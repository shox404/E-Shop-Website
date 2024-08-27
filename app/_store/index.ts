import admin from "./reducers/admin";

import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: { [api.reducerPath]: api.reducer, admin },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
