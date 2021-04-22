import { createSlice, createAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import { IUserState, TAuthReducers } from 'store/reducers/user/types';
import { TReducersState } from 'utils/types';

const initialState: IUserState = {
  isAuth: false,
};

const hydrate = createAction<TReducersState>(HYDRATE);

const userSlice = createSlice<IUserState, TAuthReducers>({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => {
      state.isAuth = true;
    },
    logout: (state) => {
      state.isAuth = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(hydrate, (state, action) => {
      return {
        ...state,
        ...action.payload.user,
      };
    });
  },
});

const { actions, reducer } = userSlice;

export const { login, logout } = actions;
export default reducer;
