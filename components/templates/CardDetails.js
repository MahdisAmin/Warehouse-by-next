import Link from "next/link";
import style from "./CardDetails.module.css";
import { FaArrowLeftLong } from "react-icons/fa6";
function CardDetails({ data }) {
  return (
    <div className={style.cardContainer}>
      <div className={style.imageHolder}>
        <img src="/images/img.jpg" />
      </div>
      <div className={style.details}>
        <h3>{data.name}</h3>
        <h4> توضیحات محصول :</h4>
        <p>
          ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
          پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
        <p>قیمت محصول : {data.price} تومان </p>
        <span> تعداد قابل سفارش:{data.quantity}</span>
        <div>
          <Link href={"/shop"}>
            بازگشت به فروشگاه
            <FaArrowLeftLong style={{marginBottom:"-5px", marginRight:"5px"}} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
