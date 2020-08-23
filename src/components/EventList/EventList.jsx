import React from "react";
import "./EventList.css";

const EventList = ({
  homeTeamId,
  awayTeamId,
  eventData,
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
}) => {
  return (
    <div className="Event">
      <div className="Event__date">
        {eventData.split("-").reverse().join("-")}
      </div>
      <div className="Event__team">
        <div className="Event__team--home">
          <a href={`/singleTeam/${homeTeamId}`}> {homeTeam}</a>
        </div>
        <div className="Event__team--score">
          <p>{homeScore}</p>
          <p style={{ padding: "0px 10px" }}>-</p>
          <p>{awayScore}</p>
        </div>
        <div className="Event__team--away">
          <a href={`/singleTeam/${awayTeamId}`}> {awayTeam}</a>
        </div>
      </div>
    </div>
  );
};

export default EventList;
