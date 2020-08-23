import { ALL_SPORTS, FETCHING_ALL_SPORTS } from "../actionTypes";

const initialState = {
  allSports: null,
  fetchingSports: false,
};

const allSportsReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case ALL_SPORTS:
      return { ...state, allSports: data };
    case FETCHING_ALL_SPORTS:
      return { ...state, fetchingSports: !state.fetchingSports };
    default:
      return state;
  }
};

export default allSportsReducer;
