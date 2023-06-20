import { configureStore } from '@reduxjs/toolkit'
import { api } from '../services/api'
import { favoritesReducer } from './reducers/favorites'
import { favoriteReducer } from './reducers/favorite'
import { cartReducer } from './reducers/cart'

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    favorite: favoriteReducer,
    cart: cartReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>

export const { useGetProductsQuery } = api
