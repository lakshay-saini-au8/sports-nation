import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Country from "./pages/Country/Country";
import Home from "./pages/Home/Home";
import AllLeague from "./pages/League/AllLeague";
import SingleLeague from "./pages/SingleLeague/SingleLeague";
import SingleTeam from "./pages/SingleTeam/SingleTeam";
import "./App.css";
import News from "./pages/News/News";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Index from "./pages/Index/Index";

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/sports" component={Home} />
          <Route exact path="/country" component={Country} />
          <Route
            exact
            path="/allLeague/:sportName/:countryName"
            component={AllLeague}
          />
          <Route
            exact
            path="/singleLeague/:leagueID"
            component={SingleLeague}
          />
          <Route exact path="/singleTeam/:teamID" component={SingleTeam} />
          <Route exact path="/news" component={News} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/contactus" component={ContactUs} />
          <Redirect to="/" />
        </Switch>
      </>
    );
  }
}

export default App;
