import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart);

  function handleAddToCart(id) {
    const item = cart.find((item) => item.id === id);
    if (item) {
      dispatch({ type: "INCREASE_AMOUNT_CLICKED", payload: id });
    } else {
      dispatch({ type: "ADD_TO_CART_CLICKED", payload: id });
    }
  }

  return (
    <div>
      <article style={{ textAlign: "center", border: "1px solid gray" }}>
        <div className="img-container">
          <img src={product.image} alt="Single pic" />
          <div>
            <div style={{ fontSize: "20px" }}>{product.title}</div>

            <button
              style={{ margin: "10px", padding: "5px", fontWeight: 600 }}
              onClick={() => handleAddToCart(product.id)}
            >
              Add To Cart
            </button>

            <Link to={`/detail/${product.id}`}>
              <button style={{ padding: "5px", fontWeight: 600 }}>
                Go To Product
              </button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
