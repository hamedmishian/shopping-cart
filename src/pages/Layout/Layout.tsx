import React from 'react'
import CartOverlay from '../../components/CartOverlay/CartOverlay';
import Navbar from "../../components/Navbar/Navbar";
import Home from "../Home/Home";

export default function Layout({children}) {
    return (
        <>
      <Navbar />
      <Home />
      {children}
    </>
    )
}
