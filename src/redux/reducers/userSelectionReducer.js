import { SELECTED_SPORT, SELECTED_COUNTRY } from "../actionTypes";

const initialState = {
  selectedSport: null,
  selectedCountry: null,
};

export default (state = initialState, { type, data }) => {
  switch (type) {
    case SELECTED_SPORT:
      return { ...state, selectedSport: data };
    case SELECTED_COUNTRY:
      return { ...state, selectedCountry: data };

    default:
      return state;
  }
};
