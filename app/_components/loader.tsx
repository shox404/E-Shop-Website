import { LoadingOutlined } from "@ant-design/icons";
import styled from "styled-components";

export default function Loader() {
  return (
    <Styles>
      <LoadingOutlined />
    </Styles>
  );
}

const Styles = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
`;
