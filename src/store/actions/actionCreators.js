import * as actionTypes from './actionTypes';

// get data from firebase
export const getWalletApi = (data) => ({ type: actionTypes.GET_WALLET_API, payload: data });
export const getHistoryApi = (data) => ({ type: actionTypes.GET_HISTORY_API, payload: data });
export const getMarketApi = (data) => ({ type: actionTypes.GET_MARKET_API, payload: data });


// set wallet
export const setWallet = (crypto) => ({ type: actionTypes.WALLET_SET, payload: crypto });
export const addCryptoToWallet = (crypto) => ({ type: actionTypes.CRYPTO_ADD_TO_WALLET, payload: crypto });
export const removeCryptoFromWallet = (crypto) => ({ type: actionTypes.CRYPTO_REMOVE_FROM_WALLET, payload: crypto });

// set balance
export const decreaseBalance = (value) => ({ type: actionTypes.BALANCE_DECREASE, payload: value });
export const increaseBalance = (value) => ({ type: actionTypes.BALANCE_INCREASE, payload: value });


// set history
export const addCryptoToHistory = (crypto) => ({ type: actionTypes.CRYPTO_ADD_TO_HISTORY, payload: crypto });
// export const clearCryptoHistory = () => ({ type: actionTypes.CLEAR_HISTORY });


// get and set userInfo & set token to localStorage 
export const getUserInformation = (userInfo) => ({ type: actionTypes.GET_USER_INFORMATION, payload: userInfo });