import React from "react";
import { useDispatch } from "react-redux";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  function removeItem(id: any, amount: any) {
    dispatch({ type: "REMOVE_ITEM_CLICKED", payload: {id,amount} });
    console.log(amount);
    
  }
  function increaseAmount(id: number) {
    dispatch({ type: "INCREASE_AMOUNT_CLICKED", payload: id });
  }

  function decreaseAmount(id, amount) {
    if (amount === 1) {
      dispatch({ type: "REMOVE_ITEM_CLICKED", payload: {id, amount} });
    } else {
      dispatch({ type: "DECREASE_AMOUNT_CLICKED", payload: {id, amount} });
    }
  }

  return (
    <article className="cart-item">
      <img src={item.image.substring(1)} alt="item" />
      <div>
        <h4>{item.title}</h4>
        <h5>{item.price}</h5>
        <button
          type="button"
          className="cart-btn remove-btn"
          onClick={() => removeItem(item.id, item.amount)}
        >
          remove
        </button>
      </div>
      <div>
        <button
          type="button"
          className="cart-btn amount-btn"
          onClick={() => increaseAmount(item.id)}
        >
          <i className="fas fa-angle-up"></i>
        </button>
        <p className="item-amount">{item.amount}</p>
        <button
          type="button"
          className="cart-btn amount-btn"
          onClick={() => decreaseAmount(item.id, item.amount)}
        >
          <i className="fas fa-angle-down"></i>
        </button>
      </div>
    </article>
  );
}
