import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import {ProductList} from "./containers/ProductList";
import {ProductPage } from './containers/ProductList'
import {Header }from "./containers/Header";
import "./App.css";
import {ProductDetails} from "./containers/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductPage} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;