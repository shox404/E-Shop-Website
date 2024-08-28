import { AdminLoginData, CurrentAdminData, IncomingMessage } from "@/app/types";
import { api } from "../api";

export const adminApi = api.injectEndpoints({
  endpoints: (builder) => ({
    adminLogin: builder.mutation<IncomingMessage, AdminLoginData>({
      query: (loginData) => ({
        url: "/admin",
        method: "POST",
        body: loginData,
      }),
    }),
    getAdminData: builder.query<CurrentAdminData, void>({
      query: () => ({ url: "/admin", method: "GET" }),
    }),
  }),
});

export const { useAdminLoginMutation, useGetAdminDataQuery } = adminApi;
export const {
  endpoints: { adminLogin, getAdminData },
} = adminApi;
