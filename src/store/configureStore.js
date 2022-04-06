import reducers from "./index";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

// redux-persist
import { persistStore, persistReducer, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import userReducer from "./reducers/userReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
  // whiteList: ['userReducer'],
  // blackList: ['walletReducer', 'marketReducer', 'historyReducer'],
}

const persistedReducer = persistReducer(persistConfig, reducers)

const configureStore = () => {
  let store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
  let persistor = persistStore(store);
  return { store, persistor }
  // return createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
}

export default configureStore;