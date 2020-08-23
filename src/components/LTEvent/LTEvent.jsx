import React from "react";
import EventList from "../EventList/EventList";
import "./LTEvent.css";
const LTEvent = ({ event, eventType }) => {
  return (
    <div className="LTEvent__Desc--up">
      <p className="LTEvent__Desc--upH"> {eventType}</p>
      {!event ? (
        <p>No Events</p>
      ) : (
        <div>
          {event.map((item) => (
            <EventList
              key={item.idEvent}
              homeTeamId={item.idHomeTeam}
              awayTeamId={item.idAwayTeam}
              eventData={item.dateEvent || " DATE NA"}
              homeTeam={item.strHomeTeam || "TEAM NA"}
              awayTeam={item.strAwayTeam || "TEAM NA"}
              homeScore={item.intHomeScore || "SCORE NA"}
              awayScore={item.intAwayScore || "SCORE NA"}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default LTEvent;
