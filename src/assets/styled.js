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

