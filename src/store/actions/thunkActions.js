import { useMemo } from "react";
import { useDispatch } from "react-redux";
import * as actionCreators from "./actionCreators";

export const getHomeApiRequest = () => async (dispatch) => {

   await fetch(`https://authorization-bece2-default-rtdb.firebaseio.com/wallet.json`)
    .then((response) => response.json())
    .then((data) => {
       for(let key in data){
         dispatch(actionCreators.getWalletApi(data[key]));
       }
     
    });

   await fetch(`https://authorization-bece2-default-rtdb.firebaseio.com/history.json`)
    .then((response) => response.json())
    .then((data) => {
       for(let key in data){
         dispatch(actionCreators.getHistoryApi(data[key]));
       }
     
    });

}

export const getMarketApiRequest = () => async (dispatch) => {

   const response = await fetch(`https://authorization-bece2-default-rtdb.firebaseio.com/market.json`)
   const data = await response.json();
   
   for(let key in data){
      console.log(' get market api çalıştı ! => ', data);
      dispatch(actionCreators.getMarketApi(data));
   }

}
