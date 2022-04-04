import React, { useEffect } from 'react';

import Header from "../components/Common/Header"
import Card from "../components/Home/Card"
import { Main } from '../assets/styled';

import btc from '../assets/img/btc.png';
import eth from '../assets/img/eth.png';
import doge from '../assets/img/doge.png';
import tether from '../assets/img/tether.png';
import dot from '../assets/img/dot.png';

import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';

import * as actionCreators from '../store/actions/actionCreators';
import { getHomeApiRequest } from '../store/actions/thunkActions';

// const userWalletInfo = {
//   target: 'user',
//   title: 'My Wallet',
//   balance: '200',
//   cryptos: [
//     {
//       id: 'crypto-1-wallet',
//       type: 'BTC',
//       img: btc,
//       amount: '0.001'
//     },
//     {
//       id: 'crypto-2-wallet',
//       type: 'ETH',
//       img: eth,
//       amount: '0.005'
//     },
//     {
//       id: 'crypto-3-wallet',
//       type: 'DOGE',
//       img: doge,
//       amount: '0.100'
//     },
//     {
//       id: 'crypto-4-wallet',
//       type: 'TETHER',
//       img: tether,
//       amount: '0.350'
//     },
//     {
//       id: 'crypto-5-wallet',
//       type: 'DOT',
//       img: dot,
//       amount: '0.600'
//     },
//   ]
// }

// const purchaseHistoryInfo = {
//   target: 'purchase',
//   title: 'Purchase History',
//   cryptos: [
//     {
//       id: 'crypto-1-purchase-history',
//       type: 'BTC',
//       img: btc,
//       amount: '0.001',
//       date: '31/03/2022'
//     },
//     {
//       id: 'crypto-2-purchase-history',
//       type: 'ETH',
//       img: eth,
//       amount: '0.005',
//       date: '11/01/2022'
//     },
//   ]
// }

const HomePage = () => {
  const dispatch = useDispatch();
  // const state = useSelector(state => state);

  useEffect(() => {

    dispatch(getHomeApiRequest());

  }, [dispatch]);

  return (
    <>
      <Header />
      <Main>
        <Card targetCard='user'/>
        <Card targetCard='purchase-history'/>
      </Main>
    </>
  )
}

export default HomePage;