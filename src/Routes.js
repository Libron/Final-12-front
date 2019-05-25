import React from 'react';
import {Route, Switch} from "react-router-dom";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import Gallery from "./containers/Gallery/Gallery";

const Routes = ({user}) => {
  return (
    <Switch>
      <Route path="/" exact component={Gallery} />
      <Route path="/gallery" exact component={Gallery} />
      <Route path="/register" exact component={Register}/>
      <Route path="/login" exact component={Login}/>
    </Switch>
  );
};

export default Routes;
