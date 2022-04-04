import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';

import { BuyButton } from '../../assets/styled';

import produce from 'immer'

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#f0b90b',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
    },
    '&:hover fieldset': {
      borderColor: '#ddd',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#f0b90b',
    },
  },
});

const absolute = {
   position: 'absolute',
   top: '50%',
   transform: 'translateY(-50%)',
   left: '10px',
   opacity: 0.7
}


const CustomizedInputs = () => {
   const [enteredValue, setEnteredValue] = React.useState('');
   const [calculatedValue, setCalculatedValue] = React.useState(0);
   const [isValidAmount, setIsValidAmount] = React.useState(true);
   const [isTypedAmount, setIsTypedAmount] = React.useState(false);
   
   const currentValue = 47000;
   const currentBalance = 200;
   
   const inputColor = (isValidAmount) ? 'primary' : 'error';

   const enteredValueHandler = (e) => {    
      setEnteredValue((prevValue) => {
         return e.target.value
      });

      const isValidAmount = Number(e.target.value) <= currentBalance;
      if(isValidAmount){
         setIsValidAmount(true);
      }else {
         setIsValidAmount(false);
      }

      const resultValue = (Number(enteredValue) / currentValue).toFixed(12);
      setCalculatedValue(resultValue);
      console.log(enteredValue, ' ENTERED VALUE');
   }

   const formFocusHandler = () => {
      setIsTypedAmount(true);
   }

   const buyCryptoMoney = () => {
      if(isValidAmount){
         alert(`$ ${calculatedValue} BTC buyed successfully!`);
      }

      // reset
      setEnteredValue('');
      setCalculatedValue(0);
   }

  return (
   <>
      <Box
      component="form"
      noValidate
      sx={{
        display: 'grid',
        gridTemplateColumns: { sm: '1fr 1fr' },
        gap: 2,
        position: 'relative'
      }}
      >
         <FormControl onFocus={formFocusHandler} fullWidth sx={{ m: 1 }}>
            <InputLabel color={inputColor} htmlFor="outlined-adornment-amount">Amount</InputLabel>
            <OutlinedInput
               style={{ 
                  boxShadow: 
                  'rgba(0, 0, 0, 0.24) 0px 3px 8px', 
               }} 
               id="outlined-adornment-amount"
               type='number'
               color={inputColor}
               value={enteredValue}
               onChange={enteredValueHandler}
               startAdornment={<InputAdornment position="start">$</InputAdornment>}
               label="Amount"
            />
         </FormControl>
         <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontStyle: 'italic', color: 'rgb(118, 118, 118)' }}>
            { enteredValue.length > 0 && `$${calculatedValue} BTC` }
         </Typography>
         

         <div>
            { 
            (isTypedAmount && !isValidAmount ) 
               &&
            <Typography variant='body2' sx={{ color: 'red', fontStyle: 'italic' }} > You cannot buy crypto more than balance you have. Do you want to add money ?
               <Typography variant='body2' component="span" sx={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }} > Add Money </Typography> 
            </Typography> 
         }
         </div>
         { enteredValue.length > 0 && <BuyButton disabled={!isValidAmount} sx={{ width: '60&', }} onClick={buyCryptoMoney} > Buy </BuyButton>}
      </Box>
   </>
  );
}

export default CustomizedInputs;