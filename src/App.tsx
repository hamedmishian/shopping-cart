import React, { useEffect } from "react";
import "./App.css";
import Layout from "./pages/Layout/Layout";
import { Route, Switch } from "react-router";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Products from "./components/Products/Products";
import { getInitData } from './store/actions'
import {useDispatch} from 'react-redux'; 

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{

    dispatch(getInitData())
  },[dispatch])
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route path="/detail/:id">
          <SingleProduct />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
