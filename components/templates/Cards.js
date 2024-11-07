import style from "./Card.module.css";
import Link from "next/link";
import { TbArrowBadgeLeftFilled } from "react-icons/tb";
function Cards({ info }) {
  const { data } = info;
  return (
    <div>
      <div className={style.container}>
        {data.map((product) => (
          <ul>
            <img src="/images/img.jpg" />
            <li key={product.id}>{product.name}</li>
            <div className={style.detailHolder}>
              <div>
                <p> قیمت: {product.price} تومان</p>
                <span>تعداد باقی مانده :{product.quantity}</span>
              </div>
              <div className={style.linkHolder}>
                <Link href={`/shop/${product.id}`}>
                  جزییات محصول
                  <TbArrowBadgeLeftFilled style={{alignItems:"center" , marginBottom:"-4px"}} />
                </Link>
              </div>
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Cards;
