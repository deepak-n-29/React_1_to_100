import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import counterReducer from "../counter/counterRedux";
import productsReducer from "./slices/productsSlice";
import localStorage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";


const persistConfig = {
  key: "root",
  storage: localStorage,
  blacklist: ['counter'], // Exclude counter from persistence
  whitelist: ['cart'] // Include cart in persistence
}

const rootReducer = combineReducers({
    cart: cartReducer,
    counter: counterReducer,
    products: productsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: ['persist/PERSIST', 'persist/REHYDRATE'], //['persist/PERSIST', 'persist/REHYDRATE', 'persist/FLUSH', 'persist/PAUSE', 'persist/PURGE', 'persist/REGISTER'],
      }, // Disable serializable check for persistReducer
    }),
});


export const persistor = persistStore(store)

export default store;