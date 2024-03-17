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
      options: [{ id: Date.now(), content: "옵션 1" }],
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
      state.value = [...state.value, action.payload];
    },
    pop: (state) => {
      state.value = [...state.value].pop();
    },
    reset: (state) => {
      state.value = [];
    },
  },
});

export default questionSlice;
export const { change, push, pop, reset } = questionSlice.actions;
