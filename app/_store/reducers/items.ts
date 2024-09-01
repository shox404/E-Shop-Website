import { createSlice } from "@reduxjs/toolkit";
import { createItem } from "../services/items";

type State = {};

const items = createSlice({
  name: "items",
  initialState: {} as State,
  reducers: {},
  extraReducers(builder) {
    builder.addMatcher(createItem.matchFulfilled, (state, { payload }) => {});
  },
});

export default items.reducer;
