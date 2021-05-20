import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth-Provider";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { authenticated } = useContext(AuthContext);

  if (!authenticated) {
    return <Redirect to="/login" />;
  } else {
    return <Route {...rest} component={RouteComponent} />;
  }
};

export default PrivateRoute;
