import { Category } from "@/app/global/types";
import { api } from "../api";

export const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategory: build.query<Category[], void>({
      query: () => ({ url: "/category", method: "GET" }),
    }),
    createCategory: build.mutation<Category, Category>({
      query: (body) => ({ url: "/category", method: "POST", body }),
    }),
    editCategory: build.mutation<Category, Category>({
      query: (body) => ({ url: `/category/${body.id}`, method: "PUT", body }),
    }),
    deleteCategory: build.mutation<{ id: any }, { id: any }>({
      query: (data) => ({ url: `/category/${data.id}`, method: "DELETE" }),
    }),
  }),
});

export const {
  useCreateCategoryMutation,
  useGetCategoryQuery,
  useEditCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;

export const { createCategory, getCategory, editCategory, deleteCategory } =
  categoryApi.endpoints;
