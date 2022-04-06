import { combineReducers } from "redux";
import walletReducer from "./reducers/walletReducer";
import historyReducer from "./reducers/historyReducer";
import marketReducer from "./reducers/marketReducer";
// import userReducer from "./reducers/userReducer";

// import { persistCombineReducers } from 'redux-persist'

const reducers = combineReducers({
   walletReducer,
   historyReducer,
   marketReducer,
   // userReducer,
});

export default reducers;