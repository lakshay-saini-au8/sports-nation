import { ALL_LEAGUE, FETCHING_ALL_LEAGUE } from "../actionTypes";

const initialState = {
  allLeague: "",
  fetchingLeague: false,
};

const allLeagReducerReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case ALL_LEAGUE:
      return { ...state, allLeague: data };
    case FETCHING_ALL_LEAGUE:
      return { ...state, fetchingLeague: !state.fetchingLeague };
    default:
      return state;
  }
};

export default allLeagReducerReducer;
