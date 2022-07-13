import { configureStore } from "@reduxjs/toolkit";
import valuesSlice from "./valuesSlice";

const store = configureStore({
  reducer: {
    values: valuesSlice,
  },
});

export default store;
