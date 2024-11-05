import React, { useEffect, useState } from "react";

import styles from "./SearchDashboard.module.css";

import useDebounce from "../../hooks/useDebounce";

import { CiLogout, CiSearch } from "react-icons/ci";
import axios from "axios";
import api from "../../pages/api/api";

function SearchDashboard({ logOutHandler, setFilteredProducts }) {
  const [searchName, setSearchName] = useState("");
  const debouncedSearchName = useDebounce(searchName, 300);

  const fetchFilteredProducts = async (searchTerm) => {
    try {
      const response = await api.get("/products", {
        params: {
          name: searchTerm,
        },
      });

      setFilteredProducts(response.data.data);
    } catch (error) {
      console.error("خطا در بارگذاری محصولات:", error);
    }
  };

  useEffect(() => {
    if (debouncedSearchName.trim() !== "") {
      fetchFilteredProducts(debouncedSearchName);
    } else {
      fetchFilteredProducts("");
    }
  }, [debouncedSearchName]);

  return (
    <div className={styles.container}>
      <div className={styles.logoutBtn}>
        <button onClick={logOutHandler}>
          خروج
          <CiLogout style={{ marginRight: "10px" }} />
        </button>
      </div>
      <div className={styles.inputHolder}>
        <div className={styles.search}>
          <CiSearch style={{ fontSize: "30px", height: "40px" }} />
          <input
            type="text"
            placeholder="جستجو کالا"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </div>
        <div className={styles.userHolder}>
          <div>
            <img src="/images/user.png" />
          </div>
          <div>
            <p>نام کاربری</p>
            <span>مدیر</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchDashboard;
