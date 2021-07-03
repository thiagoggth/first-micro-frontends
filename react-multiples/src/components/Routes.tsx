import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Layout from "./Layout";

const Routes = () => (
  <BrowserRouter basename="react-multiples">
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Routes;
