import { createSlice } from "@reduxjs/toolkit";
import { CurrentAdminData, IncomingMessage } from "@/app/types";
import { message } from "antd";
import { adminLogin, getAdminData } from "../services/admin";

type State = { data: CurrentAdminData };

const admin = createSlice({
  name: "admin",
  initialState: {
    data: {},
  } as State,
  reducers: {},
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
        (state, { payload }: { payload: CurrentAdminData }) => {
          state.data = payload;
        }
      );
  },
});

export default admin.reducer;
