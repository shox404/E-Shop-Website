import { Tooltip as Component } from "antd";
import { ReactNode } from "react";

export default function Tooltip({ children }: { children: ReactNode }) {
  return <Component title={children}>{children}</Component>;
}
