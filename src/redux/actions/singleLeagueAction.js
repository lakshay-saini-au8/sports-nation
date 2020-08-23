import axios from "axios";
import {
  SINGLE_LEAGUE,
  SINGLE_LEAGUE_TEAM,
  SINGLE_LEAGUE_LAST_EVENT,
  SINGLE_LEAGUE_UPCOMING_EVENT,
  FETCH_SINGLE_LEAGUE,
} from "../actionTypes";
import { API_KEY } from "../../config";
export const setSingleLeague = (data) => ({
  type: SINGLE_LEAGUE,
  data,
});
export const setSingleLeagueTeam = (data) => ({
  type: SINGLE_LEAGUE_TEAM,
  data,
});
export const setSingleLeagueLastEvent = (data) => ({
  type: SINGLE_LEAGUE_LAST_EVENT,
  data,
});
export const setSingleLeagueUpcomingEvent = (data) => ({
  type: SINGLE_LEAGUE_UPCOMING_EVENT,
  data,
});
const fetchingSingleLeague = () => ({
  type: FETCH_SINGLE_LEAGUE,
});

export const getSingleLeague = (leagueId) => async (dispatch) => {
  try {
    dispatch(fetchingSingleLeague());
    const league = axios.get(`${API_KEY}/lookupleague.php?id=${leagueId}`);
    const team = axios.get(`${API_KEY}/lookup_all_teams.php?id=${leagueId}`);
    const lastEvent = axios.get(
      `${API_KEY}/eventspastleague.php?id=${leagueId}`
    );
    const upcomingEvent = axios.get(
      `${API_KEY}/eventsnextleague.php?id=${leagueId}`
    );

    const data = await axios.all([league, team, lastEvent, upcomingEvent]);

    dispatch(setSingleLeague(data[0].data.leagues));
    dispatch(setSingleLeagueTeam(data[1].data.teams));
    dispatch(setSingleLeagueLastEvent(data[2].data.events));
    dispatch(setSingleLeagueUpcomingEvent(data[3].data.events));
  } catch (error) {
    alert(
      `There is some technical problem please inform at: lakshaysaini2013@gmail.com ${error}`
    );
  } finally {
    dispatch(fetchingSingleLeague());
  }
};
