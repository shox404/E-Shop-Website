import { createSlice } from "@reduxjs/toolkit";
import { createItem, getItem } from "../services/items";
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
      });
  },
});

export const { SET_ITEM, CLEAR_ITEM } = items.actions;
export default items.reducer;
