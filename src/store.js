import { configureStore } from '@reduxjs/toolkit'
import ExamSlice from './components/slice/ExamSlice'

export default configureStore({
  reducer: {
    counter:ExamSlice,
  },
})