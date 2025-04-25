import { createSlice } from '@reduxjs/toolkit'

// id: 1,
// description: '용돈',
// amount: 300000,
// type: 'income', // "income" 또는 "expense"
// date: '2025-04-25',

export const moneyListSlice = createSlice({
  name: 'moneyList',
  initialState: {
    //list: [],
    id: 1,
    label: '테스트',
  },
  reducers: {},
})
