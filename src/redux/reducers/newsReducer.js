import { NEWS, FETCHING_NEWS } from "../actionTypes";

const initialState = {
  allNews: "",
  fetchingNews: false,
};

const newsReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case NEWS:
      return { ...state, allNews: data };
    case FETCHING_NEWS:
      return { ...state, fetchingNews: !state.fetchingNews };
    default:
      return state;
  }
};

export default newsReducer;
