import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ListItem {
  width: number
  height: number
  quantity: number
  id: string
  color: string
  changed: boolean
}

interface ChangeFields {
  width: string
  height: string
  quantity: string
  id: string
}

interface DeleteListItem {
  id: string
}
interface BoardState {
  list: ListItem[];
}

const initialState: BoardState = {
  list: [],
};

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    addToList: (state, action: PayloadAction<ListItem>) => {
      state.list = [...state.list, action.payload];
    },
    deleteFromList: (state, action: PayloadAction<DeleteListItem>) => {
      const { id } = action.payload;
      state.list = state.list.filter((e) => e.id !== id);
    },
    changeListItem: (state, action: PayloadAction<DeleteListItem>) => {
      const { id } = action.payload;
      state.list = state.list.map((e) => (e.id === id ? { ...e, changed: !e.changed } : e));
    },
    saveItemChanges: (state, action: PayloadAction<ChangeFields>) => {
      const { id, width, height, quantity } = action.payload;
      state.list = state.list.map((e) =>
        e.id === id ? { ...e, width: +width, height: +height, quantity: +quantity } : e
      );
    }
  },
});

export default boardSlice.reducer;
