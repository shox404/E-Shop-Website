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
