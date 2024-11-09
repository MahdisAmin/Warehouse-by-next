import React, { useEffect, useState } from "react";
import styles from "./SearchDashboard.module.css";
import useDebounce from "../../hooks/useDebounce";
import { FaShopify } from "react-icons/fa";
import { CiLogout, CiSearch } from "react-icons/ci";
import api from "../../pages/api/api";
import Link from "next/link";

function SearchDashboard({
  logOutHandler,
  products,
  setFilteredProducts,
  setNotFound,
}) {
  const [searchName, setSearchName] = useState("");
  const debouncedSearchName = useDebounce(searchName, 300);

  const fetchFilteredProducts = async (searchTerm) => {
    try {
      console.log(`Fetching products for search term: ${searchTerm}`);
      const response = await api.get(`/products?name=${searchTerm}`);
      const fetchedProducts = response.data.data;

      if (!fetchedProducts || fetchedProducts.length === 0) {
        setNotFound(true);
        setFilteredProducts([]);
      } else {
        setNotFound(false);
        setFilteredProducts(fetchedProducts);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setNotFound(true);
        setFilteredProducts([]);
      } else if (error.response) {
        console.error("Server error:", error.response.status);
      } else {
        console.error("Network or other error:", error);
      }
    }
  };

  useEffect(() => {
    if (debouncedSearchName.trim() !== "") {
      fetchFilteredProducts(debouncedSearchName);
    } else {
      setNotFound(false);
      setFilteredProducts(products);
    }
  }, [debouncedSearchName, products]);

  return (
    <div className={styles.container}>
      <div className={styles.logoutBtn}>
        <Link href="/shop">
          <FaShopify style={{ marginLeft: "5px", marginBottom: "-2px" }} />
          فروشگاه
        </Link>
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
