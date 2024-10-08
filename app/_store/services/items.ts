import { Item } from "@/app/global/types";
import { api } from "../api";

export const itemsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getItem: build.query<Item[], void>({
      query: () => ({ url: "/items", method: "GET" }),
    }),
    createItem: build.mutation<Item, Item>({
      query: (body) => ({ url: "/items", method: "POST", body }),
    }),
    editItem: build.mutation<Item, Item>({
      query: (body) => ({ url: `/items/${body.id}`, method: "PUT", body }),
    }),
    deleteItem: build.mutation<{ id: any }, { id: any }>({
      query: (data) => ({ url: `/items/${data.id}`, method: "DELETE" }),
    }),
  }),
});

export const {
  useCreateItemMutation,
  useGetItemQuery,
  useEditItemMutation,
  useDeleteItemMutation,
} = itemsApi;

export const { createItem, getItem, editItem, deleteItem } = itemsApi.endpoints;
