import { createSlice } from "@reduxjs/toolkit";
import { adminApi } from "../services/admin";
import { AdminLoginData, IncomingMessage } from "@/app/types";
import { message } from "antd";

type State = { data: AdminLoginData };

const admin = createSlice({
  name: "admin",
  initialState: {
    data: {},
  } as State,
  reducers: {},
  extraReducers(builder) {
    builder.addMatcher(
      adminApi.endpoints.adminLogin.matchFulfilled,
      (_state, { payload }: { payload: IncomingMessage }) => {
        message.success(payload.message);
      }
    );
  },
});

export default admin.reducer;
