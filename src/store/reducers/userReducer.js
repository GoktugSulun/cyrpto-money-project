import React from 'react';

import produce, {current} from 'immer';
import * as actionTypes from '../actions/actionTypes'

const initialState = {
   email: '',
   userId: '',
}

const userReducer = produce((draft, action) => {
   switch (action.type) {
       case actionTypes.GET_USER_INFORMATION:
            draft = action.payload;
            return draft;
       default:
           return draft;
   }
}, initialState)

export default userReducer;


