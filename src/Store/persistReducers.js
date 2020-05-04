import { AsyncStorage } from "react-native";
import { persistReducer } from "redux-persist";

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: "aonde-tem",
      storage: AsyncStorage,
      whitelist: ["login", "user"],
    },
    reducers
  );
  return persistedReducer;
};
