import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Views/Home";
import Details from "./Views/Details";

function Routes() {
  return (
    <div style={{ paddingRight: 60, paddingLeft: 60, paddingTop: 20 }}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/details/:code" component={Details} />
      </Switch>
    </div>
  );
}
export default Routes;
