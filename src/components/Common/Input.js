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
import { setBalance } from '../../store/actions/thunkActions';

import produce from 'immer'
import { useDispatch, useSelector } from 'react-redux';
import { decreaseBalance } from '../../store/actions/actionCreators';
import * as thunkActions from '../../store/actions/thunkActions';
import { WALLET_SET } from '../../store/actions/actionTypes';

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


const CustomizedInputs = (props) => { 
   const dispatch = useDispatch();

   const [enteredValue, setEnteredValue] = React.useState('');
   const [calculatedValue, setCalculatedValue] = React.useState(0);
   const [isValidAmount, setIsValidAmount] = React.useState(true);
   const [isTypedAmount, setIsTypedAmount] = React.useState(false);

   const { clickInfo, wallet } = props;
   console.log(wallet, ' WALL');
   
   const currentValue = Number(clickInfo.row.col2.split('$')[0]);

   const inputColor = (isValidAmount) ? 'primary' : 'error';

   const enteredValueHandler = (e) => {    
      setEnteredValue((prevValue) => {
         return e.target.value
      });

      const isValidAmount = Number(e.target.value) <= wallet.balance;
      if(isValidAmount){
         setIsValidAmount(true);
      }else {
         setIsValidAmount(false);
      }

      const resultValue = (Number(enteredValue) / currentValue).toFixed(12);
      setCalculatedValue(resultValue);
   }

   const formFocusHandler = () => {
      setIsTypedAmount(true);
   }

   const prepareNewWallet = () => {
      console.log(clickInfo, ' CLICKED INFO !!!!!');
      const idxCrypto = wallet.cryptos.findIndex(crypto => clickInfo.row.col0 === crypto.type);
      const priceValue = clickInfo.row.col2.split('$')[0];
      console.log(typeof(priceValue));

      let newCryptoForWallet = {
         amount: Number(calculatedValue),
         price: Number(priceValue),
         type: clickInfo.row.col0
      };

      let newCryptoForHistory = {
         ...newCryptoForWallet,
         tradeType: 'buy', // what did I
         cost: enteredValue, // how much money did I pay ?
         amount: calculatedValue, // how much cyrpto-money did I buy ?
         date: new Date(), // when did I
      }

      dispatch(thunkActions.postWalletApiRequest(newCryptoForWallet, enteredValue));
      dispatch(thunkActions.postHistoryApiRequest(newCryptoForHistory));
   }

   const buyCryptoMoney = () => {
      if(isValidAmount){
         const newWallet = prepareNewWallet();
         alert(`$ ${calculatedValue} ${clickInfo.row.col0} buyed successfully!`);
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
            { enteredValue.length > 0 && `$${calculatedValue} ${clickInfo.row.col0}` }
         </Typography>
         

         <div>
            { 
            ( (isTypedAmount && !isValidAmount) || wallet.balance === 0 ) 
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