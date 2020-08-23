import React, { Component } from "react";
import Loader from "../../components/Loader/Loader";
import { connect } from "react-redux";
import {
  getTeamDetails,
  setTeamDetails,
  setTeamDetailsLastEvent,
  setTeamDetailsNextEvent,
} from "../../redux/actions/teamDetailsAction";
import Logo from "../../components/Logo/Logo";
import LTHeader from "../../components/LTHeader/LTHeader";

import "./SingleTeam.css";
import LTPoster from "../../components/LTPoster/LTPoster";
import LTDesc from "../../components/LTDesc/LTDesc";
import LTEvent from "../../components/LTEvent/LTEvent";
import LTStadium from "../../components/LTStadium/LTStadium";
import NoData from "../../assets/img/voidData.svg";
import { Link } from "react-router-dom";
class SingleTeam extends Component {
  componentDidMount() {
    this.props.getTeamDetails(this.props.match.params.teamID);
  }

  componentWillUnmount() {
    this.props.setTeamDetails("");
    this.props.setTeamDetailsLastEvent("");
    this.props.setTeamDetailsNextEvent("");
  }
  render() {
    return this.props.team === null ? (
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
    ) : this.props.fetchingTeamDetails === true || this.props.team === "" ? (
      <>
        <Logo />
        <Loader />
      </>
    ) : (
      <>
        <LTHeader
          banner={this.props.team[0].strTeamBanner}
          fb={this.props.team[0].strFacebook}
          tw={this.props.team[0].strTwitter}
          web={this.props.team[0].strWebsite}
          yt={this.props.team[0].strYoutube}
        />
        <div className="Team__Desc">
          <div className="Team__Desc--fd">
            <div className="TD__D--name">{this.props.team[0].strTeam}</div>
            <div className="TD__D--iH">
              <p className="TD__D--iH--CS">
                <span>Established:</span>
                {this.props.team[0].intFormedYear || "NA"}
              </p>
              <p className="TD__D--iH--AN">
                <span>Alertnate Name:</span>
                {this.props.team[0].strAlternate || "NA"}
              </p>
              <p className="TD__D--iH--SP">
                <span>Sport:</span>
                {this.props.team[0].strSport || "NA"}
              </p>
            </div>
          </div>
          <LTPoster
            firstHead="Jersey "
            poster={this.props.team[0].strTeamJersey}
            badge={this.props.team[0].strTeamBadge}
            thirdHead="Team Logo"
            trophy={this.props.team[0].strTeamLogo}
          />
          <LTDesc
            description={
              this.props.team[0].strDescriptionEN || "DESCRIPTION NA"
            }
          />
          <LTEvent
            event={this.props.upcomingEvent}
            eventType="Upcoming Event"
          />
          <LTEvent event={this.props.lastEvent} eventType="Last Event" />
          <LTStadium
            image={this.props.team[0].strStadiumThumb}
            desc={this.props.team[0].strStadiumDescription || "DESCRIPTION NA"}
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fetchingTeamDetails: state.teamDetailsState.teamDetails,
    team: state.teamDetailsState.teamDetails,
    upcomingEvent: state.teamDetailsState.teamDetailsNextEvent,
    lastEvent: state.teamDetailsState.teamDetailTDastEvent,
  };
};

export default connect(mapStateToProps, {
  getTeamDetails,
  setTeamDetails,
  setTeamDetailsLastEvent,
  setTeamDetailsNextEvent,
})(SingleTeam);
