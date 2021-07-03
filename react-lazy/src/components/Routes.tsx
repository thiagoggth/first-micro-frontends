import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const About = React.lazy(() => import("../pages/About"));
const Home = React.lazy(() => import("../pages/Home"));
const Layout = React.lazy(() => import("./Layout"));

const Routes = ({ name }) => (
  <Suspense fallback={<h1>Loading...</h1>}>
    <BrowserRouter basename="react-lazy">
      <Layout name={name}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Layout>
    </BrowserRouter>
  </Suspense>
);

export default Routes;
