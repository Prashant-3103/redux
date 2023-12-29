import { configureStore } from "@reduxjs/toolkit";
import {  deleteWord, inputWord } from "./reducers/inputSlice";

const store = configureStore({
    reducer: {
        input: inputWord,
        delete: deleteWord
    }
})

export default store
