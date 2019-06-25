import { AsyncStorage } from "react-native";
import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { createLogger } from 'redux-logger';
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

const persistConfig = {
  key: "root",
  storage: AsyncStorage
};

const middlewares = [thunk];
if (__DEV__) {
  middlewares.push(createLogger());
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistedReducer,
  undefined,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
export const persistor = persistStore(store);

