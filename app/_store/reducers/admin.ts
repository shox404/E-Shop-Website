import { createSlice } from "@reduxjs/toolkit";
import { CurrentAdminData, PayloadMsg } from "@/app/types";
import { message } from "antd";
import { loginAdmin, getAdminData, editAdminData } from "../services/admin";
import { ChangeEvent } from "react";

type State = { data: CurrentAdminData };

const admin = createSlice({
  name: "admin",
  initialState: {
    data: { name: "", password: "" },
  } as State,
  reducers: {
    SET_VALUE: (
      state,
      { payload }: { payload: ChangeEvent<HTMLFormElement> }
    ) => {
      if (payload.target.id === "name" || payload.target.id === "password")
        state.data[payload.target.id] = payload.target.value;
    },
  },
  extraReducers(builder) {
    builder
      .addMatcher(loginAdmin.matchFulfilled, (_, { payload }: PayloadMsg) => {
        message.success(payload.message);
      })
      .addMatcher(
        getAdminData.matchFulfilled,
        (state, { payload }: { payload: CurrentAdminData }) => {
          state.data = payload;
        }
      )
      .addMatcher(
        editAdminData.matchFulfilled,
        (_, { payload }: PayloadMsg) => {
          message.success(payload.message);
        }
      );
  },
});

export const { SET_VALUE } = admin.actions;
export default admin.reducer;
