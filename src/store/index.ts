import { QuestionType } from "@/types/question";
import { configureStore } from "@reduxjs/toolkit";
import questionSlice from "./questionSlice";
import { localSaveByDebounce } from "@/utils/localSaveByDebounce";

const store = configureStore({
  reducer: {
    question: questionSlice.reducer,
  },
});

// 로컬 스토리지에 정보를 저장하는 함수
const saveStateToLocalStorage = (state: { question: QuestionType[] }) => {
  try {
    const serializedState = JSON.stringify(state);
    localSaveByDebounce("form-questions", serializedState);
  } catch {
    return;
  }
};

store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});

// store의 reducer들의 현재 상태의 type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
