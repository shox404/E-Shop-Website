import { message } from "antd";

export const errorMsg = (error: any) => {
  if (error) {
    if (error?.data?.message) {
      message.error(error?.data?.message);
    } else {
      message.error("Failed!");
    }
  }
};

const categoryOptions = () => {
  const category = ["item", "meal"];
  return category.map((e) => ({ value: e[0].toUpperCase() + e.slice(1) }));
};

export const options = categoryOptions();
