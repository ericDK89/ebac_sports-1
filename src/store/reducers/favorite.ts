import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isConditionTrue: false
}

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    setFavoriteTrue: (state) => {
      state.isConditionTrue = true
    },
    setFavoriteFalse: (state) => {
      state.isConditionTrue = false
    }
  }
})

export const favoriteReducer = favoriteSlice.reducer
export const { setFavoriteTrue, setFavoriteFalse } = favoriteSlice.actions
