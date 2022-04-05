import React from 'react';
import styled from 'styled-components';
 
import { Card, ImageListItem, Button, ListItemIcon } from '@mui/material';

export const CardEl = styled(Card)`
   width: 600px;
   height: 500px;
   padding: 0 40px;
   overflow-y: auto;
   overflow-x: hidden;
`;

export const DivWallet = styled.div`
   display: flex;
   gap: 10px;
`;

export const CardContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-top: 15px;

   .iconify {
      margin-right: 15px;
   }
`;
