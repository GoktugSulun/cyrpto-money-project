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

import { BuyButton, SellButton } from '../../assets/styled';
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

let sellWarningMessage = null;
let buyWarningMessage = {};

const CustomizedInputs = (props) => { 
   const dispatch = useDispatch();
   const { userId } = useSelector(state => state.userReducer);

   const [enteredValue, setEnteredValue] = React.useState('');
   const [calculatedValue, setCalculatedValue] = React.useState(0);
   const [isValidAmount, setIsValidAmount] = React.useState(true);
   const [isTypedAmount, setIsTypedAmount] = React.useState(false);

   const { clickInfo, wallet, type, setIsDisplayedAddingMoney, handleClose } = props;

   const isUserHaveCrypto = wallet.cryptos.findIndex(cyrpto => cyrpto.type === clickInfo?.row?.col0) !== -1;
   
   const currentValue = Number(clickInfo.row.col2.split('$')[0]);

   const inputColor = (isValidAmount) ? 'primary' : 'error';

   const enteredValueHandler = (e) => {  
      setIsDisplayedAddingMoney(false);  

      if(Number(e.target.value) <= 0){
         setIsValidAmount(false);
         sellWarningMessage = 'Invalid value! Please enter a positive value.';
         buyWarningMessage = {
            message: 'Invalid value! Please enter a positive value.',
            isValid: false
         };
         return;
      }

      const isTypeBuy = type === 'buy';
      const isValidBuy = () => {
         return Number(e.target.value) <= wallet.balance;
      }
      
      const isValidSell = () => {
         const idx = wallet.cryptos.findIndex(cyrpto => cyrpto.type === clickInfo?.row?.col0);
         return Number(e.target.value) <= (wallet.cryptos[idx].amount * wallet.cryptos[idx].price);
      }

      const isValidAmount = (isTypeBuy) ? isValidBuy() : isValidSell();
      // const isValidAmount = Number(e.target.value) <= wallet.balance;
      if(isValidAmount){
         setIsValidAmount(true);
         sellWarningMessage = '';
      }else {
         sellWarningMessage = 'You cannot sell crypto more than you have!';
         buyWarningMessage = {
            message: 'You cannot buy crypto more than balance you have. Do you want to add money ?',
            isValid: true
         }
         setIsValidAmount(false);
      }

      const resultValue = (Number(e.target.value) / currentValue).toFixed(12);
      setCalculatedValue(resultValue);
   }

   const formFocusHandler = () => {
      setIsTypedAmount(true);
   }

   const isTypeBuy = type === 'buy';

   const prepareNewWallet = () => {
      const idxCrypto = wallet.cryptos.findIndex(crypto => clickInfo.row.col0 === crypto.type);
      const priceValue = clickInfo.row.col2.split('$')[0];      

      let newCryptoForWallet = {
         amount: Number(calculatedValue),
         price: Number(priceValue),
         type: clickInfo.row.col0,
         cost: Number(enteredValue),
         userId: userId
      };

      let newCryptoForHistory = {
         ...newCryptoForWallet,
         tradeType: (isTypeBuy ? 'buy' : 'sell'), // what did I
         cost: enteredValue, // how much money did I pay or get ?
         amount: calculatedValue, // how much cyrpto-money did I buy or sell ?
         date: new Date(), // when did I
         userId: userId
      }

      if(isTypeBuy){
         dispatch(thunkActions.postWalletApiRequest(newCryptoForWallet, enteredValue));
      }else {
         dispatch(thunkActions.sellCrypto(newCryptoForWallet, enteredValue));
      }
      
      dispatch(thunkActions.postHistoryApiRequest(newCryptoForHistory));

      
   }

   const buyCryptoMoney = () => {
      if(isValidAmount){
         const newWallet = prepareNewWallet();
         const result = (type === 'buy') ? 'buyed' : 'sold'
         alert(`$ ${calculatedValue} ${clickInfo.row.col0} ${result} successfully!`);
      }

      // reset
      setEnteredValue('');
      setCalculatedValue(0);

      handleClose();
   }

   if(!isUserHaveCrypto && !isTypeBuy){
      return <div style={{ color: 'red', fontStyle: 'italic', marginTop: 20 }} > You dont have any {clickInfo?.row?.col0} </div>
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
                  onChange={(e) => {
                     enteredValueHandler(e);
                     setEnteredValue(e.target.value);
                  }}
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
                  <Typography variant='body2' sx={{ color: 'red', fontStyle: 'italic' }} > 
                     { 
                        (type === 'buy')
                           ? buyWarningMessage.message
                           : sellWarningMessage
                     }
                     <Typography onClick={() => {
                        setIsDisplayedAddingMoney(true);
                        setEnteredValue('');
                        buyWarningMessage = {
                           message: '',
                           isValid: false
                        };
                     }} variant='body2' component="span" sx={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer' }} > {(type === 'buy') && (buyWarningMessage.isValid) && 'Add Money'} </Typography> 
                  </Typography> 
               }
            </div>
   
            {
               (type === 'buy') && (enteredValue.length > 0 ) && <BuyButton disabled={!isValidAmount} sx={{ width: '60&', }} onClick={buyCryptoMoney} > BUY </BuyButton> 
            }
   
            {
               (type === 'sell') && (enteredValue.length > 0 ) && <SellButton disabled={!isValidAmount} sx={{ width: '60&', }} onClick={buyCryptoMoney} > SELL </SellButton>
            }
   
         </Box>
      </>
     );

   

  
}

export default CustomizedInputs;