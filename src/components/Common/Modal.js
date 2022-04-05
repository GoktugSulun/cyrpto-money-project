import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Modal from '@mui/material/Modal';

import { BuyButton, SellButton } from '../../assets/styled';
import { useSelector } from 'react-redux';

import { Icon } from '@iconify/react';
import { AccountBalanceWallet } from '@mui/icons-material';
import Input from '../Common/Input'
import AddingMoney from './AddingMoney'
import { Hidden } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 'auto',
  bgcolor: 'background.paper',
  borderRadius: 5,
  boxShadow: 24,
  px: 4,
  py: 3
};

const center = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 };

const addingMoneySection = {
  marginTop: 30,
  transition: 'all 300ms',
}

const hideAddingMoneySection = {
  height: 0,
  opacity: 0,
  visibility: 'hidden',
}

const displayAddingMoneySection = {
  height: 112,
  opacity: 1,
  visibility: 'visible',
}

const BasicModal = (props) => {
  const [isDisplayedAddingMoney, setIsDisplayedAddingMoney] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = (e) => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setIsDisplayedAddingMoney(false);
  };

  const cryptos = useSelector(state => state.marketReducer);
  const wallet = useSelector(state => state.walletReducer);
  const { balance } = wallet;

  const { type, clickInfo } = props;
  const userCrypto = wallet?.cryptos.filter(crypto => crypto?.type === clickInfo?.row?.col0);
  const infoSectionClass = userCrypto.length > 0 ? { display: 'flex', flexDirection: 'column'} : { display: 'none'};

  let addingMoneyClass = isDisplayedAddingMoney ? displayAddingMoneySection : hideAddingMoneySection;
      
  return (
    <div>
      {
         (type === 'buy') 
            ? <BuyButton onClick={handleOpen}> {type} </BuyButton>
            : <SellButton onClick={handleOpen}> {type} </SellButton>
      }  
          
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={center} >
            <Typography id="modal-modal-title" align='left' variant="h3" component="h2" >
              Trade 
            </Typography>
            <div style={{ display: 'flex', gap: 15, alignItems: 'center' }}>
              <div>
                <Typography style={{ fontStyle: 'italic' }} variant="body2" color="#b8b7b4"> Your Balance: </Typography>
                <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                  ${balance} 
                </Typography>
              </div>
              <AccountBalanceWallet fontSize='large' />
            </div>
          </div>
          <Divider sx={{ mt: 2}} />
          <div style={center}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 15,  }} >
              <Icon icon="cryptocurrency:yfi" width="48" height="48" />
              <Typography variant="h4"> {clickInfo?.row?.col1 || ''} 
                <Typography sx={{marginLeft: 1}} component='span' variant="h6">({clickInfo?.row?.col2 || ''})</Typography>
              </Typography>
            </div>
            <div style={infoSectionClass}>
              <Typography variant="body1" style={{ fontStyle: 'italic', opacity: 0.7, fontWeight: 'bold' }} > You have {userCrypto[0]?.amount} {userCrypto[0]?.type} </Typography> 
              <Typography variant="body1" style={{ fontStyle: 'italic', opacity: 0.7, fontWeight: 'bold' }} > Its cost is ${Math.floor(userCrypto[0]?.price * userCrypto[0]?.amount)} </Typography>
            </div>
          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            { (type === 'buy') 
                ? `How much do you want to buy ${clickInfo?.row?.col1 || ''} ?`
                : `How much do you want to sell ${clickInfo?.row?.col1 || ''} ?`
            }
          </Typography>

          <div style={{ marginTop: 15 }}>
           <Input handleClose={handleClose} setIsDisplayedAddingMoney={setIsDisplayedAddingMoney} type={type} wallet={wallet} clickInfo={clickInfo || {}} /> 
          </div>

          <div style={{...addingMoneySection, ...addingMoneyClass}}>
            <Divider />
            <AddingMoney handleClose={handleClose} setIsDisplayedAddingMoney={setIsDisplayedAddingMoney} />
          </div>
          
        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal;