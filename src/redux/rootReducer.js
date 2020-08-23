import { combineReducers } from "redux";
import allSportsReducer from "./reducers/allSportsReducer";
import userSelectionReducer from "./reducers/userSelectionReducer";
import allLeagReducer from "./reducers/allLeagueReducer";
import singleLeagueReducer from "./reducers/singleLeagueReducer";
import teamDetailsReducer from "./reducers/teamDetailsReducer";
import newsReducer from "./reducers/newsReducer";

const rootReducer = combineReducers({
  allSportsState: allSportsReducer,
  userSelectionState: userSelectionReducer,
  allLeagueState: allLeagReducer,
  singleLeagueState: singleLeagueReducer,
  teamDetailsState: teamDetailsReducer,
  newsState: newsReducer,
});

export default rootReducer;
