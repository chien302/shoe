import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    totalQuantity: 0,
    totalPrice: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const addItem = action.payload
            const existItem = state.products.find(item => item.id === addItem.id)
            state.totalQuantity++
            if (!existItem) {
                state.products.push({ ...addItem, quantity: 1 })
            } else {
                existItem.quantity++
            }
        },
        addToCartWithQuantity: (state, action) => {
            const { item, quantity } = action.payload
            console.log(action.payload)
            const existing = state.products.find(x => x.id === item.id)
            state.totalQuantity++
            if (!existing) {
                state.products.push({ ...item, quantity: quantity })
                // product.quantity = quantity
            } else {
                existing.quantity += quantity
            }
            console.log(state.totalQuantity)
        },
        decreaseItem: (state, action) => {
            const item = action.payload
            state.totalQuantity--
            const existItem = state.products.find(x => x.id === item.id)
            console.log(existItem.quantity)
            if (existItem.quantity <= 1) {
                state.products = state.products.filter(x => x.id !== item.id)
            } else {
                existItem.quantity--
            }
        }
    }

})

export const { addToCart, addToCartWithQuantity, decreaseItem } = cartSlice.actions

export default cartSlice.reducer