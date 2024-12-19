import { createSlice } from "@reduxjs/toolkit"; 

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        orderDetails: [],
    },
    reducers: {
        addItem: (state, action) => {
            const item = action.payload;
            if (item && item.card && item.card.info && item.card.info.id) {
                const existingItem = state.items.find(
                    (cartItem) => cartItem.card.info.id === item.card.info.id
                );
                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    state.items.push({ ...item, quantity: 1 });
                }
            }
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.items = state.items.filter((item) => item.card.info.id !== itemId);
        },
        clearCart: (state) => {
            state.items = [];
        },
        updateQuantity: (state, action) => {
            const { itemId, quantity } = action.payload;
            const item = state.items.find((cartItem) => cartItem.card.info.id === itemId);
            if (item && quantity >= 0) { // Ensure quantity is not negative
                item.quantity = quantity;
            }
        },
        OrderHistory: (state, action) => {
            state.orderDetails.push(action.payload);
          },
    },
});

export const { addItem, removeItem, clearCart, updateQuantity,OrderHistory} = cartSlice.actions;

export default cartSlice.reducer;