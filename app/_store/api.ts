import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "/api",
  prepareHeaders(headers) {
    // const token =
    //   .auth.user?.token ||
    //   localStorage.getItem("token");

    // if (token && token !== null) {
    //   headers.set("authorization", `Bearer ${token}`);
    // }
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithRetry,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});