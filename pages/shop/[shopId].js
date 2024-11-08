import React from "react";
import CardDetails from "../../components/templates/CardDetails";

function CardDetail({ data }) {
  return <CardDetails data={data} />;
}

export default CardDetail;

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/products");
  const item = await res.json();
  const { data } = item;
  const paths = data.map((item) => ({
    params: { shopId: item.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`http://localhost:3000/products/${params.shopId}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
