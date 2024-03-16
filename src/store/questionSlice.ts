import { QuestionType } from "@/types/question";
import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  value: QuestionType[];
};

const initialState: InitialState = {
  value: [
    {
      id: Date.now(),
      title: "",
      category: "단답형",
      options: ["옵션 1"],
      required: false,
    },
  ],
};

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("form-questions");
    if (serializedState === null) return initialState;

    const parsed = JSON.parse(serializedState);
    return parsed.question;
  } catch (err) {
    return initialState;
  }
};

const questionSlice = createSlice({
  name: "question",
  initialState: loadStateFromLocalStorage() || initialState,
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    },
    push: (state, action) => {
      state.value.push(action.payload); // 새로운 항목을 배열에 추가합니다.
    },
    pop: (state) => {
      state.value.pop(); // 새로운 항목을 배열에 추가합니다.
    },
  },
});

export default questionSlice;
export const { change, push, pop } = questionSlice.actions;
