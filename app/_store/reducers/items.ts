import { createSlice } from "@reduxjs/toolkit";
import { createItem, deleteItem, editItem, getItem } from "../services/items";
import { Detail, Item } from "@/app/global/types";

type State = {
  item: Item;
  items: Item[];
};

const initialState: State = {
  item: {
    images: [],
    title: "",
    price: 0,
    description: "",
    active: false,
    amount: 0,
    category: "Item",
  },
  items: [],
};

const items = createSlice({
  name: "items",
  initialState,
  reducers: {
    SET_ITEM: (state, { payload }: { payload: Detail }) => {
      state.item = { ...state.item, [payload.key]: payload.value };
    },
    CLEAR_ITEM: (state) => {
      state.item = initialState.item;
    },
  },
  extraReducers(builder) {
    builder
      .addMatcher(createItem.matchFulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addMatcher(getItem.matchFulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addMatcher(editItem.matchFulfilled, (state, { payload }) => {
        state.items.map((item, index) => {
          if (payload.id == item.id) state.items.splice(index, 1, payload);
        });
      })
      .addMatcher(deleteItem.matchFulfilled, (state, { payload }) => {
        state.items.map((item, index) => {
          if (payload.id == item.id) state.items.splice(index, 1);
        });
      });
  },
});

export const { SET_ITEM, CLEAR_ITEM } = items.actions;
export default items.reducer;
