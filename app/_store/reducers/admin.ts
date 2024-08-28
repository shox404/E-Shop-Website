import { createSlice } from "@reduxjs/toolkit";
import { AdminLoginData, CurrentAdminData, IncomingMessage } from "@/app/types";
import { message } from "antd";
import { adminLogin, getAdminData } from "../services/admin";
import { ChangeEvent } from "react";

type State = { data: AdminLoginData };

const admin = createSlice({
  name: "admin",
  initialState: {
    data: { name: "", password: "" },
  } as State,
  reducers: {
    SET_VALUE: (
      state,
      { payload }: { payload: ChangeEvent<HTMLInputElement> }
    ) => {
      const { name, value } = payload.target;
      if (name === "name" || name === "password") state.data[name] = value;
    },
  },
  extraReducers(builder) {
    builder
      .addMatcher(
        adminLogin.matchFulfilled,
        (_state, { payload }: { payload: IncomingMessage }) => {
          message.success(payload.message);
        }
      )
      .addMatcher(
        getAdminData.matchFulfilled,
        (state, { payload }: { payload: AdminLoginData }) => {
          state.data = payload;
        }
      );
  },
});

export const { SET_VALUE } = admin.actions;
export default admin.reducer;
