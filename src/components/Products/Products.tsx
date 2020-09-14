import React from 'react'
import Product from "./Product";
import {useSelector} from "react-redux";

interface StateType{
  products:any;
}
export default function Products() {
    const products = useSelector((state:StateType) =>state.products);

  return (
    <section className="products">
      <div className="section-title">
        <h2>our products</h2>
      </div>
      <div className="products-center">
        {(products || []).map((product) => {
          return <Product product={product} key={product.id} />;
        })}
      </div>
    </section>
  );
}
