import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./moudle/user";

const store = configureStore({
  reducer: {
    user: userSliceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
});

export default store;
