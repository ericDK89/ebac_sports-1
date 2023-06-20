import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type IFavorites = Produto

const initialState: IFavorites[] = []

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<IFavorites>) => {
      const produto = action.payload

      const isFavorite = state.find((p) => p.id === produto.id)

      if (isFavorite) {
        const isFavoriteIndex = state.findIndex((p) => p.id === isFavorite.id)
        state.splice(isFavoriteIndex, 1)
      } else {
        state.push(produto)
      }
    }
  }
})

export const { addToFavorites } = favoritesSlice.actions
export const favoritesReducer = favoritesSlice.reducer
