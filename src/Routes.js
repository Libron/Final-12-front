import React from 'react';
import {Route, Switch} from "react-router-dom";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import Gallery from "./containers/Gallery/Gallery";
import UploadPhotoForm from "./components/UploadPhotoForm/UploadPhotoForm";
import {Redirect} from "react-router";

const Routes = ({user}) => {
    const ProtectedRoute = ({isAllowed, ...props}) => {
        return isAllowed ? <Route {...props} /> : <Redirect to="/login" />;
    };

  return (
    <Switch>
      <Route path="/" exact component={Gallery} />
      <Route path="/gallery" exact component={Gallery} />
        <ProtectedRoute
            isAllowed={user}
            path="/gallery/uploadPhoto"
            exact
            component={UploadPhotoForm}
        />
      <Route path="/register" exact component={Register}/>
      <Route path="/login" exact component={Login}/>
    </Switch>
  );
};

export default Routes;
