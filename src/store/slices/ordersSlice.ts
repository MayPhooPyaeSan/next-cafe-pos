import { Orders as Order } from "@prisma/client";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface OrdersState {
  isLoading: boolean;
  items: Order[];
  error: Error | null;
}

const initialState: OrdersState = {
  isLoading: false,
  items: [],
  error: null,
};

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setOrders: (state, action: PayloadAction<Order[]>) => {
      state.items = action.payload;
    },
    addOrder: (state, action: PayloadAction<Order>) => {
      state.items = [...state.items, action.payload];
    },
  },
});

export const { setIsLoading, setOrders, addOrder } = ordersSlice.actions;

export default ordersSlice.reducer;
