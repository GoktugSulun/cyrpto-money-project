import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { Typography } from '@mui/material';

import { FlexEl } from '../../assets/styled';
import { ListEl } from './styled';


const NestedList = (props) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const { crypto } = props;
  const day = 
   String(new Date(crypto.date).getDate()).length === 1
      ? `0${new Date(crypto.date).getDate()}`
      : new Date(crypto.date).getDate();

  const month = 
   String(new Date(crypto.date).getMonth()+1).length === 1 
      ? `0${new Date(crypto.date).getMonth()+1}` 
      : new Date(crypto.date).getMonth()+1;
   ;

  const year = new Date(crypto.date).getFullYear();
  const purchaseDate = `${month}/${day}/${year}`;

  const hour = 
   String(new Date(crypto.date).getHours()).length === 1
      ? `0${new Date(crypto.date).getHours()}`
      : new Date(crypto.date).getHours();

  const min = 
   String(new Date(crypto.date).getMinutes()).length === 1
      ? `0${new Date(crypto.date).getMinutes()}`
      : new Date(crypto.date).getMinutes();

  const purchaseTime = `${hour}:${min}`;

  return (
    <FlexEl marginTop={30} >
       <ListEl className='detail-list' bgcolor='background.paper'
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Details
            </ListSubheader>
            }
      >
        <ListItemButton>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary={`Name: ${crypto.type}`} />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary={`Date: ${purchaseDate}`} />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <AttachMoneyIcon />
          </ListItemIcon>
          <ListItemText primary={`Cost: $${crypto.cost}`} />
        </ListItemButton>
      </ListEl>

      <ListEl 
        className='detail-list'
        bgcolor='background.paper'
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton className='hide'>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary='' />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
              <SendIcon />
          </ListItemIcon>
          <ListItemText primary={`Trade Type: ${crypto.tradeType.toUpperCase()}`} />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary={`Time: ${purchaseTime}`} />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <AttachMoneyIcon />
          </ListItemIcon>
          <ListItemText primary={`Amount: ${crypto.amount}`} />
        </ListItemButton>
      </ListEl>
    </FlexEl>
    
  );
}

export default NestedList;