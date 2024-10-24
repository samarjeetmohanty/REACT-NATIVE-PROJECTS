import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "../reducers/RootReducer";

export default store = configureStore({
  reducer: RootReducer,
});
