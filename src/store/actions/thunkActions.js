import { useDispatch } from "react-redux";
import * as actionCreators from "./actionCreators";

export const getApiRequest = () => async (dispatch) => {

   await fetch(`https://authorization-bece2-default-rtdb.firebaseio.com/wallet.json`)
    .then((response) => response.json())
    .then((data) => {
       console.log(data, ' GET APII REQUEST');
       for(let key in data){
         dispatch(actionCreators.getWalletApi(data[key]));
       }
     
    });

    await fetch(`https://authorization-bece2-default-rtdb.firebaseio.com/history.json`)
    .then((response) => response.json())
    .then((data) => {
       console.log(data, ' GET APII REQUEST');
       for(let key in data){
         dispatch(actionCreators.getHistoryApi(data[key]));
       }
     
    });

}
