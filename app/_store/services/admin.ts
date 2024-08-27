import { AdminLoginData, IncomingMessage } from "@/app/types";
import { api } from "../api";

export const adminApi = api.injectEndpoints({
  endpoints: (builder) => ({
    adminLogin: builder.mutation<IncomingMessage, AdminLoginData>({
      query: (loginData) => ({
        url: "http://localhost:3000/admin/login",
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
