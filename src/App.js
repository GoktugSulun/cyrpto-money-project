import React, { useEffect, useCallback } from 'react';
import Routes from './routes/Routes'
import { BrowserRouter as Router } from 'react-router-dom';

import { CssBaseline } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';

const App = () => {

  return (
    <>
      <CssBaseline />
      <Router>
        <Routes />
      </Router>
    </>
  )

}

export default App;
