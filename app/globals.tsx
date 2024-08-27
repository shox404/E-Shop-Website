import { ThemeType } from "./types";

type ThemeKeys = "bgColor" | "textColor" | "inputBg";

export const theme = {
  dark: { bgColor: "#0a0a0a", textColor: "#ebedf0", inputBg: "#141414" },
  light: { bgColor: "", textColor: "", inputBg: "#ebe2eb" },
  use(theme: ThemeType, key: ThemeKeys) {
    return this[theme][key];
  },
};
