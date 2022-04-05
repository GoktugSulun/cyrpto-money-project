import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Typography } from '@mui/material';

import * as thunkActions from '../../store/actions/thunkActions'
import { useDispatch } from 'react-redux';

const InputAdornments = (props) => {
  const [moneyWillAdded, setMoneyWillAdded] = React.useState('');
  const dispatch = useDispatch();

  const { setIsDisplayedAddingMoney, handleClose } = props;

  const addMoneyHandler = () => {
      console.log(moneyWillAdded, ' money weill aded');
      alert(`$${moneyWillAdded} added successfully :)`);
      dispatch(thunkActions.addMoneyToWallet(Number(moneyWillAdded)));
      setMoneyWillAdded('');
      setIsDisplayedAddingMoney(false);
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography sx={{ mt: 2 }}> How much money do you want to load ? </Typography>
      <div style={{ display: 'flex', gap: 10}}>
         <FormControl fullWidth sx={{ mt: 2, flex: 3 }}>
            <InputLabel htmlFor="outlined-adornment-amount-2">Amount</InputLabel>
            <OutlinedInput
               style={{ 
                  boxShadow: 
                  'rgba(0, 0, 0, 0.24) 0px 3px 8px', 
               }} 
               id="outlined-adornment-amount-2"
               type='number'
               value={moneyWillAdded}
               onChange={(e) => setMoneyWillAdded(e.target.value)}
               startAdornment={<InputAdornment position="start">$</InputAdornment>}
               label="Amount"
            />
         </FormControl>
         <Button onClick={addMoneyHandler} sx={{mt: 2, flex: 1}} variant="contained"> LOAD </Button>
      </div>
      
    </Box>
  );
}

export default InputAdornments;