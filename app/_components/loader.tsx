import { LoadingOutlined } from "@ant-design/icons";
import { ReactNode } from "react";
import styled from "@emotion/styled";

interface Props {
  children: ReactNode;
  is: boolean;
}

export default function Loader({ children, is }: Props) {
  if (is) {
    return (
      <Styles>
        <LoadingOutlined />
      </Styles>
    );
  } else {
    return children;
  }
}

const Styles = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
`;
