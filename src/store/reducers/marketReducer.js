import { produce } from "immer";

import { ActionTypes, GET_MARKET_API } from "../actions/actionTypes";

const initalState = [
   {
      day_change: '',
      day_volume: '',
      market_cap: '',
      change_type: '',
      name: '',
      price: '',
      subname: ''
   }
]

const marketReducer = produce((draft, action) => {
   switch (action.type) {
      case GET_MARKET_API:
         draft = action.payload;
         return draft;
      default:
         break;
   }
}, initalState);

export default marketReducer;