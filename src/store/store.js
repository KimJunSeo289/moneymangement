import { configureStore } from '@reduxjs/toolkit'
import { moneyListSlice } from './moneyListSlice'

export default configureStore({
  reducer: {
    moneyList: moneyListSlice.reducer,
  },
})
