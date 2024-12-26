import { configureStore } from "@reduxjs/toolkit";
import commonDataReducer from "./commonslice";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Redux Persist Configuration
const persistConfig = {
  key: 'myapp', 
  storage, 
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
