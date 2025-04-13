import { configureStore } from "@reduxjs/toolkit";
import ramayanSlice from "../Features/ramayan/ramayanSlice";

export const store = configureStore({
  reducer: ramayanSlice
});