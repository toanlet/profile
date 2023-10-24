import { ILogin } from 'src/config/interface';
import { login, logout } from './../api/auth';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { removeStorage, setStorage } from 'src/util/common';
import { LOCAL_STORE } from 'src/util/constant';

const initialState = {
  isLoading: false,
  isLogin: false,
  user: null,
  // permission: []
};

export const authLogin = createAsyncThunk(
  'auth/login',
  async (payload: ILogin, { dispatch, rejectWithValue }) => {
    const response = await login(payload);
    if (response.data) {
      setStorage(LOCAL_STORE.ACCESS_TOKEN, response.data.accessToken);
      setStorage(LOCAL_STORE.REFRESH_TOKEN, response.data.refreshToken);
      // dispatch(getPermission());

      return response.data;
    } else {
      return rejectWithValue(response);
    }
  }
);

export const actionLogout = createAsyncThunk('auth/logout', async () => {
  const response = await logout();
  if (response) {
    removeStorage(LOCAL_STORE.ACCESS_TOKEN);
    removeStorage(LOCAL_STORE.USER_INFO);
  }
});

export const authSlider = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // logout: (state) => {
    //   state.isLoading = false;
    //   state.isLogin = false;
    //   state.user = null;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(authLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(authLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLogin = true;
      state.user = action.payload;
    });
    builder.addCase(authLogin.rejected, (state) => {
      state.isLoading = false;
      state.isLogin = false;
      state.user = null;
    });

    builder.addCase(actionLogout.fulfilled, (state) => {
      state.isLoading = false;
      state.isLogin = false;
      state.user = null;
    });
  },
});

export default authSlider.reducer;
