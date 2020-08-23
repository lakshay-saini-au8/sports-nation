import React, { Component } from "react";
import "./LeagueCard.css";
import { withRouter } from "react-router-dom";
class LeagueCard extends Component {
  handelClick = () => {
    this.props.history.push(`/singleLeague/${this.props.leagueID}`);
  };
  render() {
    return (
      <div className="LeagueCard" onClick={this.handelClick}>
        <div className="LeagueImage">
          <img src={this.props.img} alt="" />
        </div>
        <div className="LeagueTitle">{this.props.title}</div>
      </div>
    );
  }
}

export default withRouter(LeagueCard);
