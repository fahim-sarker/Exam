import { createSlice } from '@reduxjs/toolkit'

export const ExamSlice = createSlice({
  name: 'counter',
  initialState: {
    value:JSON.parse(localStorage.getItem("counter")) ?JSON.parse(localStorage.getItem("counter")) : 10,
  },
  reducers: {
    increment: (state) => {
        if(state.value < 20){
            localStorage.setItem("counter", JSON.stringify( state.value += 1))
        }
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment } = ExamSlice.actions

export default ExamSlice.reducer