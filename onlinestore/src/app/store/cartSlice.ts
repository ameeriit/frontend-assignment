import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  name: string;
}

type CartState = CartItem[];

const initialState: CartState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action: PayloadAction<CartItem>) {
      state.push(action.payload);
    },
  },
});

export const { add } = cartSlice.actions;
export default cartSlice.reducer;
