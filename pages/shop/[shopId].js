import React from "react";
import CardDetails from "../../components/templates/CardDetails";

function CardDetail({ data }) {
  return <CardDetails data={data} />;
}

export default CardDetail;

export async function getServerSideProps(context) {
  const { params } = context;
  const res = await fetch(`http://localhost:3000/products/${params.shopId}`);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
}
