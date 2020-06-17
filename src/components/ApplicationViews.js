import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import Login from "./auth/Login"
import PartyList from "./party/PartyList"
//import PartyDetail from "./party/PartyDetail"
//import BuddyList from "./buddy/BuddyList"

const ApplicationViews = props => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;

  // Check if credentials are in session storage returns true/false
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />

      <Route path="/login" render={props => {
        return <Login setUser={setUser}{...props} />
      }} />


      <Route exact path="/parties" render={props => {
        if (hasUser) {
          return <PartyList {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />

    </React.Fragment>

  );

};

export default ApplicationViews;