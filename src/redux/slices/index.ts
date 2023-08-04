import { combineReducers } from 'redux';

import authInfoSlice from './authInfo.slice';

const reducers = combineReducers({
  authInfo: authInfoSlice,
});

export default reducers;
