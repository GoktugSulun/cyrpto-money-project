import React from 'react';
import styled from 'styled-components';
// import { styled } from '@mui/system'
import { Button } from '@mui/material';

// export const MenuButtonEl = styled(Button)(({ theme }) => ({
//    color: theme.palette.black,
//  }));

export const MenuButtonEl = styled(Button)`
   color: black;
   font-weight: 500;
   transition: all 250ms;

   &:hover {
      background: #ddd;
   }
`;

export const Main = styled.main`
   width: 100%;
   height: calc(100vh - 68px);
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 20px;
`;

export const BuyButton = styled(Button)`
   background: green;
   border: none !important;
   color: #fff;

   :hover {
      background: green;
      opacity: .7;
   }

   :disabled {
      background: rgba(239, 239, 239, 0.3);
      color: rgba(16, 16, 16, 0.3);
      border: 1px solid rgba(118, 118, 118, 0.3) !important;
   }

`;

export const SellButton = styled(Button)`
   background: red;
      border-color: #fff;
      color: #fff;

      :hover {
         background: red;
         opacity: .7;
      }
`;

export const MainEl = styled.main`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100vw;
   gap: 20px;
   height: calc(100vh - 68px);

   @media (max-width: 1050px) {
      flex-direction: column;
      width: auto;
      padding: 20px 0;
   }

   @media (max-width: 600px) {
      .iCqfhB {
         width: 95%;
      }
   }
`;