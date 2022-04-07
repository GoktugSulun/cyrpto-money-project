import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';

import { Icon } from '@iconify/react';
import DetailList from './DetailList'

import { BoxEl } from './styled';
import { FlexEl } from '../../assets/styled';

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
        <BoxEl>
          <Typography id="modal-modal-title" variant="h3" component="h1">
            History Detail
          </Typography>
          <Divider />
          <FlexEl justifyContent='space-between' alignItems="center" marginTop='25'>
            <FlexEl alignItems='center' gap="15" >
              <Icon icon="cryptocurrency:yfi" width="48" height="48" />
              <Typography variant="h4"> {crypto.type} </Typography>
            </FlexEl>
            <Typography variant="body1" className='current-value'> Current value: ${crypto.price} </Typography>
          </FlexEl>
          <DetailList crypto={crypto} />
        </BoxEl>
      </Modal>
    </div>
  );
}

export default BasicModal;