import React from 'react';
import styled from 'styled-components';
 
import { Card, ImageListItem, Button, ListItemIcon, List } from '@mui/material';

export const CardEl = styled(Card)`
   width: 650px;
   height: 600px;
   padding: 0 40px;
   overflow-y: auto;
   overflow-x: hidden;
   position: relative;

   .error-message {
      color: red;
      margin-top: 10px;
      font-style: italic;
   }

   .go-to-market {
      color: blue,;
      text-decoration: underline;
      cursor: pointer;
   }

   .second-divider {
      margin-bottom: 40px;
   }

   .italic {
      font-style: italic;
   }

   .no-history {
      font-style: italic;
      color: red;
   }

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

export const BoxEl = styled.div`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   width: 650px;
   height: 450px;
   border-radius: 5px;
   box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
   padding: 30px 40px;
   background-color: #fff;

   #modal-modal-title {
      margin-bottom: 30px;
   }

   .current-value {
      font-style: italic;
      opacity: 0.7;
      font-weight: bold;
   }
`;

export const ListEl = styled(List)`
   width: 100%;
   max-width: 360;

   .hide {
      opacity: 0;
      visibility: hidden;
   }
`;
