import { createSlice } from "@reduxjs/toolkit";
import { CurrentAdminData, IncomingMessage } from "@/app/types";
import { message } from "antd";
import { loginAdmin, getAdminData } from "../services/admin";
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
      .addMatcher(
        loginAdmin.matchFulfilled,
        (_state, { payload }: { payload: IncomingMessage }) => {
          message.success(payload.message);
        }
      )
      .addMatcher(
        getAdminData.matchFulfilled,
        (state, { payload }: { payload: CurrentAdminData }) => {
          state.data = payload;
        }
      );
  },
});

export const { SET_VALUE } = admin.actions;
export default admin.reducer;
