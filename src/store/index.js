import { combineReducers } from "redux";
import walletReducer from "./reducers/walletReducer";
import historyReducer from "./reducers/historyReducer";
import marketReducer from "./reducers/marketReducer";

const reducers = combineReducers({
   walletReducer,
   historyReducer,
   marketReducer
});

export default reducers;