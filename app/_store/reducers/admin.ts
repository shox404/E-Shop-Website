import { createSlice } from "@reduxjs/toolkit";
import { CurrentAdminData, IncomingMessage } from "@/app/types";
import { message } from "antd";
import { adminLogin, getAdminData } from "../services/admin";
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
      { payload }: { payload: { key: "password" | "name"; value: string } }
    ) => {
      // const { name, value } = payload.target;
      // console.log(name);

      // state.data?.[payload.name] = payload.value;
      // if (payload.name === "name" || payload.value === "password")
        state.data[payload.key] = payload.value;
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
      // .addMatcher(
      //   getAdminData.matchFulfilled,
      //   (state, { payload }: { payload: CurrentAdminData }) => {
      //     state.data = payload;
      //   }
      // );
  },
});

export const { SET_VALUE } = admin.actions;
export default admin.reducer;
