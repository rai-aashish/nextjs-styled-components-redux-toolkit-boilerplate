import { configureStore } from "@reduxjs/toolkit";
import appThemeReducer from "./reducers/appThemeReducer";
import counterReducer from "./reducers/counterReducer";

// ...
const store = configureStore({
  reducer: {
    count: counterReducer,
    appTheme: appThemeReducer,
  },
});

//store types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
