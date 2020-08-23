import {
  FETCH_SINGLE_LEAGUE,
  SINGLE_LEAGUE,
  SINGLE_LEAGUE_TEAM,
  SINGLE_LEAGUE_LAST_EVENT,
  SINGLE_LEAGUE_UPCOMING_EVENT,
} from "../actionTypes";

const initialState = {
  singleLeague: "",
  singleLeagueTeam: "",
  singleLeagueLastEvent: "",
  singleLeagueUpcomingEvent: "",
  fetchingSingleLeague: false,
};

const singleLegaueReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case SINGLE_LEAGUE:
      return { ...state, singleLeague: data };
    case SINGLE_LEAGUE_TEAM:
      return { ...state, singleLeagueTeam: data };
    case SINGLE_LEAGUE_LAST_EVENT:
      return { ...state, singleLeagueLastEvent: data };
    case SINGLE_LEAGUE_UPCOMING_EVENT:
      return { ...state, singleLeagueUpcomingEvent: data };
    case FETCH_SINGLE_LEAGUE:
      return { ...state, fetchingSingleLeague: !state.fetchingSingleLeague };
    default:
      return state;
  }
};

export default singleLegaueReducer;
