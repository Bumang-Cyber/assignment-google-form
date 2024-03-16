import { configureStore } from "@reduxjs/toolkit";
import questionSlice from "./questionSlice";

const store = configureStore({
  reducer: {
    question: questionSlice.reducer,
  },
});

// store의 reducer들의 현재 상태의 type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
