import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/home";
import New from "../pages/new";
import View from "../pages/view";

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>

    <Route exact path="/view/:id">
      <View />
    </Route>

    <Route path="/new">
      <New />
    </Route>
  </Switch>
);

export default Routes;
