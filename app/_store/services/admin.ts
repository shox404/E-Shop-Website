import { AdminData, CurrentAdminData, IncomingMessage } from "@/app/global/types";
import { api } from "../api";

export const adminApi = api.injectEndpoints({
  endpoints: (builder) => ({
    loginAdmin: builder.mutation<IncomingMessage, AdminData>({
      query: (body) => ({ url: "/admin", method: "POST", body }),
    }),
    editAdminData: builder.mutation<IncomingMessage, AdminData>({
      query: (body) => ({ url: "/admin", method: "PUT", body }),
    }),
    getAdminData: builder.query<CurrentAdminData, void>({
      query: () => ({ url: "/admin", method: "GET" }),
    }),
  }),
});

export const {
  useLoginAdminMutation,
  useGetAdminDataQuery,
  useEditAdminDataMutation,
} = adminApi;

export const { loginAdmin, getAdminData, editAdminData } = adminApi.endpoints;
