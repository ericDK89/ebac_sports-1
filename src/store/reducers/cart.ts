import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type ICart = Produto

const initialState: ICart[] = []

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICart>) => {
      const product = action.payload

      const productAlreadyAdded = state.some((p) => p.id === product.id)

      if (product && !productAlreadyAdded) {
        state.push(product)
      } else {
        alert('Item já adicionado')
      }
    }
  }
})

export const cartReducer = cartSlice.reducer
export const { addToCart } = cartSlice.actions
