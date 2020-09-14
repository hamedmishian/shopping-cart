import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function CartOverlay({ toggle, handleClose }) {
  const cart = useSelector((state: any) => state.cart);
  const state = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);

  function handleClearCart() {
    dispatch({ type: "CLEAR_BUTTON_CLICKED" });
  }

  useEffect(() => {
    let newTotal = state.cart.reduce((total, cartItem) => {
      return (total += cartItem.amount * cartItem.price);
    }, 0);
    newTotal = parseFloat(newTotal.toFixed(2));
    setTotal(newTotal);
  }, [state.cart]);

  return (
    <div className={toggle ? "cart-overlay transparentBcg" : "cart-overlay"}>
      <div className={toggle ? "cart showCart" : "cart"}>
        <span className="close-cart">
          <i className="fas fa-window-close" onClick={handleClose}></i>
        </span>
        <h2>your cart</h2>

        <div>
          {cart.length === 0 ? (
            <h2>Cart is Empty...</h2>
          ) : (
            cart.map((item) => <CartItem key={item.id} item={item} />)
          )}
        </div>

        <div className="cart-footer">
          <h3>
            your total : $ <span className="cart-total">{total}</span>
          </h3>
          <button className="clear-cart banner-btn" onClick={handleClearCart}>
            clear cart
          </button>
        </div>
      </div>
    </div>
  );
}
