import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Modal from '@mui/material/Modal';

import { BuyButton, SoldButton } from '../../assets/styled';
import { useSelector } from 'react-redux';

import { Icon } from '@iconify/react';
import { AccountBalanceWallet } from '@mui/icons-material';
import Input from '../Common/Input'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 400,
  bgcolor: 'background.paper',
  borderRadius: 5,
  boxShadow: 24,
  px: 4,
  py: 3
};

const center = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 };

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (e) => {
    setOpen(true);
    console.log(e.target.parentElement.parentElement.parentElement);
  };
  const handleClose = () => setOpen(false);

  const cryptos = useSelector(state => state.marketReducer);
  console.log(cryptos, ' CRYP');

  const { type } = props;

  return (
    <div>
      {
         (type === 'buy') 
            ? <BuyButton onClick={handleOpen}> {type} </BuyButton>
            : <SoldButton onClick={handleOpen}> {type} </SoldButton>
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
                  $200
                </Typography>
              </div>
              <AccountBalanceWallet fontSize='large' />
            </div>
          </div>
          <Divider sx={{ mt: 2}} />
          <div style={center}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 15,  }} >
              <Icon icon="cryptocurrency:yfi" width="48" height="48" />
              <Typography variant="h4"> YFI </Typography>
            </div>
            <Typography variant="body1" style={{ fontStyle: 'italic', opacity: 0.7, fontWeight: 'bold' }} > Current value: 46758$ </Typography>
          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            How much do you want to buy YFI ?
          </Typography>

          <div style={{ marginTop: 15 }}>
            <Input />
          </div>
          
        </Box>
      </Modal>
    </div>
  );
}
