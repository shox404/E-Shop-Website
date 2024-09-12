import { createSlice } from "@reduxjs/toolkit";
import { createItem, getItem } from "../services/items";
import { Detail, Item } from "@/app/global/types";

type State = {
  item: Item;
  items: Item[];
};

const items = createSlice({
  name: "items",
  initialState: {
    item: {},
    items: [],
  } as unknown as State,
  reducers: {
    SET_ITEM: (state, { payload }: { payload: Detail }) => {
      state.item = { ...state.item, [payload.key]: payload.value };
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

export const { SET_ITEM } = items.actions;
export default items.reducer;
