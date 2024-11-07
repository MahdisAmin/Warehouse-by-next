import React from "react";
import Cards from "../../components/templates/Cards";

function Shop({ info }) {
  return <Cards info={info} />;
}

export default Shop;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/products");
  const info = await res.json();
  // console.log(data.name);

  return {
    props: {
      info,
    },
  };
}
