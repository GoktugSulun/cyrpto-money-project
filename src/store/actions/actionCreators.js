import * as actionTypes from './actionTypes'

export const addCrypto = (crypto) => ({ type: actionTypes.CRYPTO_ADD, payload: crypto });

export const removeCrypto = (crypto) => ({ type: actionTypes.CRYPTO_REMOVE, payload: crypto });

export const setWallet = (crypto) => ({ type: actionTypes.WALLET_SET, payload: crypto });

export const getWalletApi = (data) => ({ type: actionTypes.GET_WALLET_API, payload: data });
export const getHistoryApi = (data) => ({ type: actionTypes.GET_HISTORY_API, payload: data });
export const getMarketApi = (data) => ({ type: actionTypes.GET_MARKET_API, payload: data });