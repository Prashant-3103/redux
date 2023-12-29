import {createSlice} from '@reduxjs/toolkit'

const inputSlice = createSlice({
    initialState: {
word: ""
    },
    name: 'input',
    reducers:{
        inputWord: (state,action)=>{
            state.word= action.payload
        },
        deleteWord: (state,action)=>{
            state.word= ""
        }
    }
})

export const {inputWord, deleteWord} = inputSlice.actions
export default inputSlice.reducer
