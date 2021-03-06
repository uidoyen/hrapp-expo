import { AsyncStorage } from "react-native";
import devTools from "remote-redux-devtools";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "../reducers";
import devToolsEnhancer from "remote-redux-devtools";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(onCompletion: () => void): any {
  const enhancer = compose(
    applyMiddleware(thunk),
    devToolsEnhancer({
      name: "MyApp",
      realtime: true
    })
  );

  let store = createStore(persistedReducer, enhancer);
  let persistor = persistStore(store, null, onCompletion);

  return store;
}
