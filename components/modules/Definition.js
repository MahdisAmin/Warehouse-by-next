import React from 'react'
import { AiOutlineProduct } from "react-icons/ai";

import styles from "./Definition.module.css"

function Definition({ openModel }) {
  return (
    <div className={styles.addContainer}>
      <div>
        <p>
          <AiOutlineProduct style={{ marginLeft: "10px", marginTop: "1px" }} />
          مدیرت کالا
        </p>
      </div>
      <div>
        <button onClick={openModel}>افزودن محصول</button>
      </div>
    </div>
  );
}

export default Definition