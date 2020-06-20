import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import Login from "./auth/Login";
import PartyList from "./party/PartyList";
import PartyDetail from "./party/PartyDetail";
import BuddyDetail from "./buddy/BuddyDetail";
import ThemeDetail from "./theme/ThemeDetail";
import TeaDetail from "./tea/TeaDetail";
import PartyForm from "./party/PartyForm";
import PartyEditForm from "./party/PartyEditForm";
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

      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      <Route exact path="/parties" render={props => {
        if (hasUser) {
          return <PartyList {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />

      <Route path="/parties/:partyId(\d+)" render={(props) => {
        // Pass the partyId to the PartyDetailComponent
        return <PartyDetail partyId={parseInt(props.match.params.partyId)} />
      }} />
      <Route path="/parties/new" render={(props) => {
        return <PartyForm {...props} />
      }} />

      <Route path="/parties/:partyId(\d+)/edit" render={props => {
        if (hasUser) {
          return <PartyEditForm {...props} />
        } else {
          return <Redirect to="/login" />
        }
      }} />

      <Route path="/buddies"
        render={(props) => {
          return <BuddyList />
        }} />
      <Route path="/buddies/:buddyId(\d+)" render={(props) => {
        return <BuddyDetail buddyId={parseInt(props.match.params.buddyId)} />
      }} />

      <Route exact path="/themes" render={(props) => {
        return <ThemeList />
      }} />

      <Route path="/themes/:themeId(\d+)" render={(props) => {
        return <ThemeDetail themeId={parseInt(props.match.params.themeId)} />
      }} />

      <Route path="/teas"
        render={(props) => {
          return <TeaList />
        }} />

      <Route path="/teas/:teaId(\d+)" render={(props) => {
        return <TeaDetail teaId={parseInt(props.match.params.teaId)} />
      }} />



      <Route path="/login" render={props => {
        return <Login setUser={setUser}{...props} />
      }} />
    </React.Fragment>

  );

};

export default ApplicationViews;