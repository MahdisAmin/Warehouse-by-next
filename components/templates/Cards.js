import style from "./Card.module.css";
import Link from "next/link";
function Cards({ info }) {
  const { data } = info;
  return (
    <div>
      <h1>Shop</h1>
      <div className={style.container}>
        {data.map((product) => (
          <Link href={`/shop/${product.name}`}>
            <ul>
              <img src="/images/img.jpg" />
              <li key={product.id}>{product.name}</li>
              <div>
                <p> قیمت: {product.price} تومان</p>
                <span>تعداد باقی مانده :{product.quantity}</span>
              </div>
            </ul>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Cards;
