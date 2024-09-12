import { Item } from "@/app/global/types";
import { api } from "../api";

export const itemsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getItem: build.query<Item[], void>({ query: () => ({ url: "/items", method: "GET" }) }),
    createItem: build.mutation<Item, Item>({
      query: (body) => ({ url: "/items", method: "POST", body }),
    }),
  }),
});

export const { useCreateItemMutation, useGetItemQuery } = itemsApi;

export const { createItem, getItem } = itemsApi.endpoints;
