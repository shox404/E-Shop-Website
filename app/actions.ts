import Cookie from "js-cookie";

export const getCookie = (key: string) => {
  return Cookie.get(key);
};

export const setCookie = (key: string, value: string) => {
  return Cookie.set(key, value, { expires: 10 });
};

export const clearCookie = (key: string) => {
  return Cookie.remove(key);
};
