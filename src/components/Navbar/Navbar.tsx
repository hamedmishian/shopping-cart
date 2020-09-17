import React from "react";
import {Link} from "react-router-dom";
import CartOverlay from "../CartOverlay/CartOverlay";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar() {

 const toggle = useSelector((state:any) => state.toggle);
 const productCounter = useSelector((state:any) => state.productCounter);
 const dispatch = useDispatch();

  function handleClick(){
    dispatch({type:"OPEN_OVERLAY-CLICKED"})
  }

  function handleClose(){
    dispatch({type:"CLOSE_OVERLAY_CLICKED"});
  }
  return (
    <>
    <CartOverlay toggle={toggle} handleClose={handleClose}/>

    <nav className="navbar">
      <div className="navbar-center">
        <span className="nav-icon">
          <i className="fas fa-bars"></i>
        </span>
        <Link to="/">
          <img src={"./images/logo.svg".substring(1)} alt="store logo" />
        </Link>

        <div className="cart-btn" onClick={handleClick}>
          <span className="nav-icon">
            <i className="fas fa-cart-plus"></i>
          </span>
          <div className="cart-itemss">{productCounter}</div>
        </div>
      </div>
    </nav>
    </>
  );
}
