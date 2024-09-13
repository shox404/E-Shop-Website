import { createSlice } from "@reduxjs/toolkit";
import { CurrentAdminData, FormValue, PayloadMsg } from "@/app/global/types";
import { message } from "antd";
import { loginAdmin, getAdminData, editAdminData } from "../services/admin";

type State = { data: CurrentAdminData };

const initialState: State = {
  data: { name: "", password: "" },
};

const admin = createSlice({
  name: "admin",
  initialState,
  reducers: {
    SET_VALUE: (state, { payload }: { payload: FormValue }) => {
      if (payload.target.id === "name" || payload.target.id === "password")
        state.data[payload.target.id] = payload.target.value;
    },
  },
  extraReducers(builder) {
    builder
      .addMatcher(loginAdmin.matchFulfilled, (_, { payload }: PayloadMsg) => {
        message.success(payload.msg);
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
          message.success(payload.msg);
        }
      );
  },
});

export const { SET_VALUE } = admin.actions;
export default admin.reducer;
