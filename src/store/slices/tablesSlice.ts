import { Tables as Table } from "@prisma/client";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface TableState {
  isLoading: boolean;
  items: Table[];
  error: Error | null;
}

const initialState: TableState = {
  isLoading: false,
  items: [],
  error: null,
};

export const tablesSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    setTables: (state, action) => {
      state.items = action.payload;
    },
    addTables: (state, action: PayloadAction<Table>) => {
      state.items = [...state.items, action.payload];
    },
    removeTables: (state, action: PayloadAction<Table>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    updateTables: (state, action: PayloadAction<Table>) => {
      state.items = state.items.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
  },
});

export const { addTables, removeTables, updateTables, setTables } =
  tablesSlice.actions;

export default tablesSlice.reducer;
