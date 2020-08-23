import { NEWS, FETCHING_NEWS } from "../actionTypes";
import axios from "axios";
import { NEWS_BASE_URL } from "../../config";
export const setNews = (data) => ({
  type: NEWS,
  data,
});

const fetchingNews = () => ({
  type: FETCHING_NEWS,
});

export const getNews = (query = "sports") => async (dispatch) => {
  try {
    dispatch(fetchingNews());
    const { data } = await axios.get(`${NEWS_BASE_URL}/${query}/in.json`);
    dispatch(setNews(data.articles));
  } catch (error) {
    alert(
      `There is some technical problem please inform at: lakshaysaini2013@gmail.com ${error}`
    );
  } finally {
    dispatch(fetchingNews());
  }
};
