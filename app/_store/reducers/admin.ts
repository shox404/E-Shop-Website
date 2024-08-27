import { createSlice } from "@reduxjs/toolkit";
import { adminApi } from "../services/admin";
import { AdminLoginData } from "@/app/types";

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
      (state, { payload }: { payload: AdminLoginData }) => {
        state.data = payload;
      }
    );
  },
});

export default admin.reducer;
