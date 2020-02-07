import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Country from "./pages/Country";
import Header from "./components/Header";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/country/:code" component={Country} />
        <Route exact path="/country/country/:code" component={Country} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
