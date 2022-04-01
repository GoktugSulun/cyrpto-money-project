import reducers from "./index";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  return createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
}