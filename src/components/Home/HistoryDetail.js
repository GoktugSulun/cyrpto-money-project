import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';

import { Icon } from '@iconify/react';
import DetailList from './DetailList'

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

const BasicModal = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const { crypto } = props;

  return (
    <div>
      <Button size='small' variant='text' onClick={handleOpen}>Show Details</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{ marginBottom: 3 }} id="modal-modal-title" variant="h3" component="h1">
            History Detail
          </Typography>
          <Divider />
          <div style={center}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 15,  }} >
              <Icon icon="cryptocurrency:yfi" width="48" height="48" />
              <Typography variant="h4"> {crypto.type} </Typography>
            </div>
            <Typography variant="body1" style={{ fontStyle: 'italic', opacity: 0.7, fontWeight: 'bold' }} > Current value: ${crypto.price} </Typography>
          </div>
          <DetailList crypto={crypto} />
        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal;