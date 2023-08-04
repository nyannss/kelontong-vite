import {
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage
  from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { configureStore } from '@reduxjs/toolkit';

import reducer from './slices';

const persistConfig = {
  key: "klontong_appdata",
  storage,
  // blacklist: ["context"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (defaultMiddleware) => {
    return defaultMiddleware({
      serializableCheck: {
        ignoreActions: true,
      },
    });
  },
});
export const persistor = persistStore(store);
export default store;
