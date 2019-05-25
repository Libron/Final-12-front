import React from 'react';
import {Route, Switch} from "react-router-dom";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import Cocktails from "./containers/Cocktails/Cocktails";
import CocktailDetail from "./containers/CocktailDetail/CocktailDetail";
import CocktailBuilder from "./containers/CocktailBuilder/CocktailBuilder";

const Routes = ({user}) => {
  return (
    <Switch>
      <Route path="/" exact component={Cocktails} />
      <Route path="/cocktails" exact component={Cocktails} />
        <Route path="/cocktails/mylist" exact component={Cocktails} />
        <Route path="/cocktails/create" exact component={CocktailBuilder} />
        <Route path="/cocktails/:id" exact component={CocktailDetail} />
      <Route path="/register" exact component={Register}/>
      <Route path="/login" exact component={Login}/>
    </Switch>
  );
};

export default Routes;
