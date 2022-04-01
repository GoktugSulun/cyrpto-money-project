import React from 'react';
import styled from 'styled-components';
 
import { Card, ImageListItem, Button } from '@mui/material';

export const CardEl = styled(Card)`
   width: 500px;
   height: 500px;
   padding: 0 40px;
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

   .MuiImageListItem-root {
      margin-left: 15px;
   }
`;

export const BuyButton = styled(Button)`
   background: green;
      border: none !important;

      :hover {
         background: green;
         opacity: .7;
      }
`;

export const SoldButton = styled(Button)`
   background: red;
      border-color: #fff;

      :hover {
         background: red;
         opacity: .7;
      }
`;