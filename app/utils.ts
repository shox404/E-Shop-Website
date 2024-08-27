import { message } from "antd";

export const errorMsg = (error: any) => {
  if (error) message.error(error.data.message);
};
