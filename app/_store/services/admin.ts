import { AdminLoginData, IncomingMessage } from "@/app/types";
import { api } from "../api";

export const adminApi = api.injectEndpoints({
  endpoints: (builder) => ({
    adminLogin: builder.mutation<IncomingMessage, AdminLoginData>({
      query: (loginData) => ({
        url: "/admin/login",
        method: "POST",
        body: loginData,
      }),
    }),
  }),
});

export const { useAdminLoginMutation } = adminApi;
export const {
  endpoints: { adminLogin },
} = adminApi;
