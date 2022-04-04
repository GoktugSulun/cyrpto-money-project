import * as actionTypes from './actionTypes';

// api
export const getWalletApi = (data) => ({ type: actionTypes.GET_WALLET_API, payload: data });
export const getHistoryApi = (data) => ({ type: actionTypes.GET_HISTORY_API, payload: data });
export const getMarketApi = (data) => ({ type: actionTypes.GET_MARKET_API, payload: data });


// wallet
export const setWallet = (crypto) => ({ type: actionTypes.WALLET_SET, payload: crypto });

export const addCryptoToWallet = (crypto) => ({ type: actionTypes.CRYPTO_ADD_TO_WALLET, payload: crypto });
export const removeCryptoFromWallet = (crypto) => ({ type: actionTypes.CRYPTO_REMOVE_FROM_WALLET, payload: crypto });

export const decreaseBalance = (value) => ({ type: actionTypes.BALANCE_DECREASE, payload: value });
export const increaseBalance = (value) => ({ type: actionTypes.BALANCE_INCREASE, payload: value });


// history
export const addCryptoToHistory = (crypto) => ({ type: actionTypes.CRYPTO_ADD_TO_HISTORY, payload: crypto });


