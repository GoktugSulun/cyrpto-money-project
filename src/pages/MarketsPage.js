import React, { useCallback, useEffect} from 'react';
import Table from '../components/Markets/Table'
import Header from '../components/Common/Header'
import { useDispatch, useSelector } from 'react-redux';

import { getHomeApiRequest, getMarketApiRequest } from '../store/actions/thunkActions';

const MarketsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getMarketApiRequest());

  }, [dispatch]);

  return (
    <>
      <Header />
      <Table />
    </>
  )
}

export default MarketsPage