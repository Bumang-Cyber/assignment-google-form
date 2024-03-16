import { type TitleType, type QuestionType } from "../types/question";
import { createSlice } from "@reduxjs/toolkit";

export type InitialState = {
  value: {
    titleInfo: TitleType;
    questionInfo: QuestionType;
  };
};

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("title-question-form");
    console.log("loadStateFromLocalStorage", serializedState);
    if (serializedState === null) return;

    return JSON.parse(serializedState);
  } catch (err) {
    return;
  }
};

const initialState: InitialState = {
  value: {
    titleInfo: {
      title: "",
      description: "",
    },
    questionInfo: {
      category: "객관식 질문",
      option: null,
    },
  },
};

const levelSlice = createSlice({
  name: "level",
  initialState: loadStateFromLocalStorage() || initialState,
  reducers: {
    change: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default levelSlice;
export const { change } = levelSlice.actions;
