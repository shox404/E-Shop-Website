import Cookie from "js-cookie";

export const expires = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000);

export const getCookie = (key: string) => {
  return Cookie.get(key);
};

export const setCookie = (key: string, value: string) => {
  return Cookie.set(key, value, { expires: 10 });
};

export const clearCookie = (key: string) => {
  return Cookie.remove(key);
};
