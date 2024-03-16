import { configureStore } from "@reduxjs/toolkit";
import { type InitialState } from "./formSlice";
import formSlice from "./formSlice";

const store = configureStore({
  reducer: {
    form: formSlice.reducer,
  },
});

const saveStateToLocalStorage = (state: { form: InitialState }) => {
  try {
    console.log("saveStateToLocalStorage", state);
    const serializedState = JSON.stringify(state);
    localStorage.setItem("title-question-form", serializedState);
  } catch {
    // ignore write errors
  }
};

store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});

// store의 reducer들의 현재 상태의 type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
