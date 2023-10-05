import { combineReducers } from '@reduxjs/toolkit';
import AuthReducer from './auth';

export const rootReducer = combineReducers({
  auth: AuthReducer,
});
