import { ReactNode } from "react";
import { Inline } from "../_styles/ui/element";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

export default function DropItem({ children, onClick }: Props) {
  return (
    <Inline y="start" onClick={onClick}>
      <div>{children}</div>.
    </Inline>
  );
}
