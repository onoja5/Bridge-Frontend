import { configureStore } from '@reduxjs/toolkit';
import blueprintReducer from '@/utils/reduxslice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, blueprintReducer);

const store = configureStore({
  reducer: {
    blueprint: persistedReducer,
  },
});

export const persistor = persistStore(store);
export default store;