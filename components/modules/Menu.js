import Link from "next/link";
import React from "react";
import style from "./Menu.module.css"
function Menu() {
  return (
    <div className={style.container}>
      <div className={style.about}>
        <p> محصولات </p>
        <p>تماس با ما</p>
        <p> درباره ما</p>
      </div>
      <ul className={style.login}>
        <Link href={"/login"}>ورود / ثبت نام</Link>
      </ul>
    </div>
  );
}

export default Menu;
