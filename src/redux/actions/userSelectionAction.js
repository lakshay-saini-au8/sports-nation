import { SELECTED_SPORT, SELECTED_COUNTRY } from "../actionTypes";

export const setSportsName = (data) => ({
  type: SELECTED_SPORT,
  data,
});
export const setCountryName = (data) => ({
  type: SELECTED_COUNTRY,
  data,
});
