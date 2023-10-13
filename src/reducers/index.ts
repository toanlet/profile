import { combineReducers } from '@reduxjs/toolkit';
import AuthReducer from './auth';
import CommonReducer from './common';

export const rootReducer = combineReducers({
  auth: AuthReducer,
  common: CommonReducer,
});
