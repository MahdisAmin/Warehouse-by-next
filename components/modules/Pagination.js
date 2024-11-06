import React from "react";

import style from "./Pagination.module.css";
function Pagination({ currentPage, totalPage, setCurrentPage }) {
  const nextPageHandler = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const previousPageHandler = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className={style.pagination}>
      <button onClick={previousPageHandler} disabled={currentPage === 1}>
        قبلی
      </button>
      {[...Array(totalPage)].map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={`currentPage === index + 1 ? ${style.active} : ""`}
        >
          {index + 1}
        </button>
      ))}
      <button onClick={nextPageHandler} disabled={currentPage == totalPage}>
        بعدی
      </button>
    </div>
  );
}

export default Pagination;
