import { api } from "../api";

export const itemsApi = api.injectEndpoints({
  endpoints: (build) => ({
    createItem: build.mutation({
      query: (body) => ({ url: "/items", method: "POST", body }),
    }),
  }),
});

export const { useCreateItemMutation } = itemsApi;

export const { createItem } = itemsApi.endpoints;
