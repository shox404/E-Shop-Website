import { AdminLoginData, CurrentAdminData, IncomingMessage } from "@/app/types";
import { api } from "../api";

export const adminApi = api.injectEndpoints({
  endpoints: (builder) => ({
    loginAdmin: builder.mutation<IncomingMessage, AdminLoginData>({
      query: (loginData) => ({
        url: "/admin",
        method: "POST",
        body: loginData,
      }),
    }),
    editAdminData: builder.mutation<IncomingMessage, AdminLoginData>({
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

export const { useLoginAdminMutation, useGetAdminDataQuery } = adminApi;
export const {
  endpoints: { loginAdmin, getAdminData },
} = adminApi;
