import { configureStore } from "@reduxjs/toolkit";
import commonDataReducer from "./commonslice";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { encryptTransform } from 'redux-persist-transform-encrypt';
// Redux Persist Configuration

const persistConfig = {
  key: 'myapp', 
  storage, transforms: [
    encryptTransform({
      secretKey: import.meta.env.VITE_redux_secret_key,
      // secretKey: process.env.REACT_APP_redux_secret_key,
      onError: function (error) {
        console.error(error)
      },
    }),
  ],
};

// Persisted Reducer
const persistedReducer = persistReducer(persistConfig, commonDataReducer);

// Store with Persisted Reducer
const store = configureStore({
  reducer: {
    commonData: persistedReducer, 
  },
});

const persistor = persistStore(store);

export { store, persistor };
