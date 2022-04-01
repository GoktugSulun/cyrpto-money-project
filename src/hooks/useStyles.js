import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
   button: {
      '&:hover': {
         background: 'red',
         color: 'green'
      }
   }
}));

export default useStyles;