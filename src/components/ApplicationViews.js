import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import Login from "./auth/Login";
import PartyList from "./party/PartyList";
import PartyDetail from "./party/PartyDetail";
import PartyForm from "./party/PartyForm";
import BuddyList from "./buddy/BuddyList";
import ThemeList from "./theme/ThemeList";
import TeaList from "./tea/TeaList";

const ApplicationViews = props => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;

  // Check if credentials are in session storage returns true/false
  // const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  return (
    <React.Fragment>


      {/* <Route path="/login" component={Login} /> */}

      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />


      <Route path="/parties/new" render={(props) => {
        return <PartyForm {...props} />
      }} />
      <Route path="/parties/:partyId(\d+)" render={(props) => {
        // Pass the partyId to the PartyDetailComponent
        return <PartyDetail partyId={parseInt(props.match.params.partyId)} />
      }} />
      <Route path="/buddies"
        render={(props) => {
          return <BuddyList />
        }} />

      <Route exact path="/themes" render={(props) => {
        return <ThemeList />
      }} />

      <Route path="/teas"
        render={(props) => {
          return <TeaList />
        }} />



      <Route path="/login" render={props => {
        return <Login setUser={setUser}{...props} />
      }} />
    </React.Fragment>

  );

};

export default ApplicationViews;