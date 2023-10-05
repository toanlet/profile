import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const login = createAsyncThunk('auth/login', () => {});

export const authSlider = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {});
  },
});

export default authSlider.reducer;
