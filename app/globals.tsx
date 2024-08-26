import { ThemeType } from "./types";

type ThemeKeys = "bgColor" | "textColor";

export const theme = {
  dark: { bgColor: "#0a0a0a", textColor: "#ebedf0" },
  light: { bgColor: "#ebe2eb", textColor: "#222222" },
  use(theme: ThemeType, key: ThemeKeys) {
    return theme == "dark" ? this.dark[key] : this.light[key];
  },
};
