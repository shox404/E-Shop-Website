import Cookie from "js-cookie";

export const getCookie = (key: string) => {
  return Cookie.get(key);
};
