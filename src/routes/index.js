import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import history from "../utils/history";
import LayoutComponent from "../components/Layout";
// import React, { Suspense, lazy } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from "../components/Header";
// import PrivateRoute from "../components/PrivateRoute";
// const Home = lazy(() => import("./Home"));
// const About = lazy(() => import("./About"));
// const Login = lazy(() => import("./Login"));

const AppRouter = () => {
  return (
    <Router history={history}>
      <LayoutComponent />
      {/* <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/login" exact component={Login} />
          <PrivateRoute path="/" exact component={Home} />
          <PrivateRoute path="/about" exact component={About} />
        </Switch>
      </Suspense> */}
    </Router>
  );
};

export default AppRouter;
