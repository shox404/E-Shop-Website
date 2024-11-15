import { message } from "antd";
import {Category} from "@/app/global/types";

export const errorMsg = (error: any) => {
  if (error) {
    if (error?.data?.message) {
      message.error(error?.data?.message);
    } else {
      message.error("Failed!");
    }
  }
};

export const categoryOptions = (array:Category[]) => {
  return array.map((e:any) => ({ value: e.key[0].toUpperCase() + e.key.slice(1) }));
};

export const format = (value: number) => Number(value).toLocaleString();
