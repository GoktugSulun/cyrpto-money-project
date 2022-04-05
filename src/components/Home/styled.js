import React from 'react';
import styled from 'styled-components';
 
import { Card, ImageListItem, Button, ListItemIcon } from '@mui/material';

export const CardEl = styled(Card)`
   width: 600px;
   height: 600px;
   padding: 0 40px;
   overflow-y: auto;
   overflow-x: hidden;
   position: relative;
`;

// export const ClearHistoryEl = styled.div`
//    position: absolute;
//    top: 20px;
//    right: 0;
//    width: 50px;
//    height: 50px;
//    background: #b0190e;
//    transition: all 250ms;
//    :hover {
//       background: red
//    }
//    color: white;
//    border-top-left-radius: 5px;
//    border-bottom-left-radius: 5px;
//    display: flex;
//    justify-content: center;
//    align-items: center;

//    abbr {
//       height: 24px;
//    }
// `;

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
