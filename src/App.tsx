import React from "react";
import "./App.css";
import Layout from "./pages/Layout/Layout";
import { Route, Switch } from "react-router";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Products from "./components/Products/Products";

function App() {
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
