import {
  TEAM_DETAILS,
  FETCH_TEAM_DETAILS,
  TEAM_DETAILS_NEXT_EVENT,
  TEAM_DETAILS_LAST_EVENT,
} from "../actionTypes";

const initialState = {
  teamDetails: "",
  teamDetailsLastEvent: "",
  teamDetailsNextEvent: "",
  fetchingTeamDetails: false,
};

const teamDetailsReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case TEAM_DETAILS:
      return { ...state, teamDetails: data };
    case TEAM_DETAILS_LAST_EVENT:
      return { ...state, teamDetailsLastEvent: data };
    case TEAM_DETAILS_NEXT_EVENT:
      return { ...state, teamDetailsNextEvent: data };
    case FETCH_TEAM_DETAILS:
      return { ...state, fetchingTeamDetails: !state.fetchingTeamDetails };
    default:
      return state;
  }
};

export default teamDetailsReducer;
