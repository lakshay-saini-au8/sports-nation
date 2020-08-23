import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getSingleLeague,
  setSingleLeague,
  setSingleLeagueTeam,
  setSingleLeagueLastEvent,
  setSingleLeagueUpcomingEvent,
} from "../../redux/actions/singleLeagueAction";
import Logo from "../../components/Logo/Logo";
import "./SingleLeague.css";
import TeamCard from "../../components/TeamCard/TeamCard";
import Loader from "../../components/Loader/Loader";
import LTHeader from "../../components/LTHeader/LTHeader";
import LTPoster from "../../components/LTPoster/LTPoster";
import LTDesc from "../../components/LTDesc/LTDesc";
import LTEvent from "../../components/LTEvent/LTEvent";
import NoData from "../../assets/img/voidData.svg";
import { Link } from "react-router-dom";

class SingleLeague extends Component {
  componentDidMount() {
    this.props.getSingleLeague(this.props.match.params.leagueID);
  }
  componentWillUnmount() {
    this.props.setSingleLeague("");
    this.props.setSingleLeagueTeam("");
    this.props.setSingleLeagueLastEvent("");
    this.props.setSingleLeagueUpcomingEvent("");
  }
  render() {
    return this.props.singleLeague === null ? (
      <>
        <Logo />
        <div
          style={{
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100vh - 80px)",
            flexDirection: "column",
          }}
        >
          Happy to see your intrest about sports, but we apologize you we don't
          have the data of this league, either go back or
          <Link
            to="/"
            style={{
              background: "#fff",
              padding: "5px 10px",
              margin: "10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            GO TO HOME
          </Link>
          <img
            src={NoData}
            style={{ width: "250px", paddingTop: "40px" }}
            alt=""
          />
        </div>
      </>
    ) : this.props.fetchingSingleLeague === true ||
      this.props.singleLeague === "" ? (
      <>
        <Logo />
        <Loader />
      </>
    ) : (
      <>
        <LTHeader
          banner={this.props.singleLeague[0].strBanner}
          fb={this.props.singleLeague[0].strFacebook}
          tw={this.props.singleLeague[0].strTwitter}
          web={this.props.singleLeague[0].strWebsite}
          yt={this.props.singleLeague[0].strYoutube}
        />
        <div className="SLeague__Desc">
          <div className="SLeague__Desc--fd">
            <div className="SL__D--name">
              {this.props.singleLeague[0].strLeague}
            </div>
            <div className="SL__D--iH">
              <p className="SL__D--iH--CS">
                <span>Current Season:</span>
                {this.props.singleLeague[0].strCurrentSeason}
              </p>
              <p className="SL__D--iH--AN">
                <span>Alertnate Name:</span>
                {this.props.singleLeague[0].strLeagueAlternate}
              </p>
              <p className="SL__D--iH--SP">
                <span>Sport:</span>
                {this.props.singleLeague[0].strSport}
              </p>
            </div>
          </div>
          <LTPoster
            firstHead="Poster"
            poster={this.props.singleLeague[0].strPoster}
            badge={this.props.singleLeague[0].strBadge}
            thirdHead="Trophy"
            trophy={this.props.singleLeague[0].strTrophy}
          />
          <LTDesc
            description={
              this.props.singleLeague[0].strDescriptionEN || "DESCRIPTION NA"
            }
          />

          <LTEvent
            event={this.props.upcomingEvent}
            eventType="Upcoming Event"
          />
          <LTEvent event={this.props.lastEvent} eventType="LAST Event" />
          <div className="SLeague__Desc--teams">
            <p className="SLeague__Desc--teamsH"> Teams</p>
            <div
              className="SLeague__Desc--teamsC"
              style={{ display: "flex", flexFlow: "row wrap" }}
            >
              {!this.props.teams ? (
                <p>Team are not available</p>
              ) : (
                this.props.teams.map((item) => (
                  <TeamCard
                    key={item.idTeam}
                    teamID={item.idTeam}
                    img={item.strTeamBadge}
                    title={item.strCountry}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fetchingLeague: state.singleLeagueState.fetchingSingleLeague,
    singleLeague: state.singleLeagueState.singleLeague,
    upcomingEvent: state.singleLeagueState.singleLeagueUpcomingEvent,
    lastEvent: state.singleLeagueState.singleLeagueLastEvent,
    teams: state.singleLeagueState.singleLeagueTeam,
  };
};

export default connect(mapStateToProps, {
  getSingleLeague,
  setSingleLeague,
  setSingleLeagueTeam,
  setSingleLeagueLastEvent,
  setSingleLeagueUpcomingEvent,
})(SingleLeague);
