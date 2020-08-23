import axios from "axios";
import { API_KEY } from "../../config";
const { ALL_LEAGUE, FETCHING_ALL_LEAGUE } = require("../actionTypes");

export const setAllLeague = (data) => ({
  type: ALL_LEAGUE,
  data,
});

const fetchAllLeague = () => ({
  type: FETCHING_ALL_LEAGUE,
});

export const getAllLeague = (sport, country) => async (dispatch) => {
  try {
    dispatch(fetchAllLeague());
    const { data } = await axios.get(
      `${API_KEY}/search_all_leagues.php?c=${country}&s=${sport}`
    );
    dispatch(setAllLeague(data.countrys));
  } catch (error) {
    alert(
      `There is some technical problem please inform at: lakshaysaini2013@gmail.com ${error}`
    );
  } finally {
    dispatch(fetchAllLeague());
  }
};
