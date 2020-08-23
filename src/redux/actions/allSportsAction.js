import axios from "axios";
import { ALL_SPORTS, FETCHING_ALL_SPORTS } from "../actionTypes";
import { API_KEY } from "../../config";
const allSports = (data) => ({
  type: ALL_SPORTS,
  data,
  
});
const fetchingAllSports = () => ({
  type: FETCHING_ALL_SPORTS,
});

export const getAllSports = () => async (dispatch) => {
  try {
    dispatch(fetchingAllSports());
    const { data } = await axios.get(`${API_KEY}/all_sports.php`);
    dispatch(allSports(data.sports));
  } catch (error) {
    alert(
      `There is some technical problem please inform at: lakshaysaini2013@gmail.com ${error}`
    );
  } finally {
    dispatch(fetchingAllSports());
  }
};
