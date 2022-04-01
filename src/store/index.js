import { combineReducers } from "redux";
import walletReducer from "./reducers/walletReducer";
import historyReducer from "./reducers/historyReducer";

const reducers = combineReducers({
   walletReducer,
   historyReducer
});

export default reducers;