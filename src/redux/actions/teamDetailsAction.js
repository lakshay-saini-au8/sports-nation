import axios from "axios";
import {
  TEAM_DETAILS,
  FETCH_TEAM_DETAILS,
  TEAM_DETAILS_NEXT_EVENT,
  TEAM_DETAILS_LAST_EVENT,
} from "../actionTypes";
import { API_KEY } from "../../config";
export const setTeamDetails = (data) => ({
  type: TEAM_DETAILS,
  data,
});
export const setTeamDetailsLastEvent = (data) => ({
  type: TEAM_DETAILS_LAST_EVENT,
  data,
});
export const setTeamDetailsNextEvent = (data) => ({
  type: TEAM_DETAILS_NEXT_EVENT,
  data,
});
const fetchTeamDetails = () => ({
  type: FETCH_TEAM_DETAILS,
});

export const getTeamDetails = (teamId) => async (dispatch) => {
  try {
    dispatch(fetchTeamDetails());
    const team = axios.get(`${API_KEY}/lookupteam.php?id=${teamId}`);
    const lastEvent = axios.get(`${API_KEY}/eventslast.php?id=${teamId}`);
    const nextEvent = axios.get(`${API_KEY}/eventsnext.php?id=${teamId}`);

    const data = await axios.all([team, lastEvent, nextEvent]);

    dispatch(setTeamDetails(data[0].data.teams));
    dispatch(setTeamDetailsLastEvent(data[1].data.results));
    dispatch(setTeamDetailsNextEvent(data[2].data.events));
  } catch (error) {
    alert(
      `There is some technical problem please inform at: lakshaysaini2013@gmail.com ${error}`
    );
  } finally {
    dispatch(fetchTeamDetails());
  }
};
