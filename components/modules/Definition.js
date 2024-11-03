import React from 'react'
import { AiOutlineProduct } from "react-icons/ai";

function Definition({ openModel }) {
  return (
    <div>
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