import { createSlice } from "@reduxjs/toolkit";
import { createItem, deleteItem, editItem, getItem } from "../services/items";
import { Detail, Item } from "@/app/global/types";

type State = { item: Item; edit: Item; items: Item[]; productsAmount: {} };

const itemSchema: Item = {
  images: [],
  title: "",
  price: 0,
  description: "",
  active: false,
  amount: 0,
  category: "",
};

const initialState: State = {
  item: itemSchema,
  edit: itemSchema,
  items: [],
  productsAmount: [],
};

const items = createSlice({
  name: "items",
  initialState,
  reducers: {
    EQUAL_ITEM: (state, { payload }: { payload: Detail }) => {
      state.item = { ...state.item, [payload.key]: payload.value };
    },
    SET_EDIT: (state, { payload }: { payload: any }) => {
      state.edit = payload;
    },
    EQUAL_EDIT: (state, { payload }: { payload: Detail }) => {
      state.edit = { ...state.edit, [payload.key]: payload.value };
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

        const ctg = Array.from(new Set(payload.map((e) => e.category)));

        state.productsAmount = ctg.map((item: string) => ({
          name: item,
          value: payload.reduce((acc: number, e: Item) => {
            if (item == e.category) acc += +e.amount;
            return acc;
          }, 0),
        }));
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

export const { EQUAL_ITEM, CLEAR_ITEM, SET_EDIT, EQUAL_EDIT } = items.actions;
export default items.reducer;
