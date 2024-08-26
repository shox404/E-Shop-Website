import styled from "styled-components";

import { DarkContent } from "./ui/block";

export const SideBar = styled(DarkContent)`
  width: 300px;
  height: 100dvh;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  gap: 15px;
  padding: 30px;
`;

export const Item = styled(DarkContent)`
  height: 50px;
  border-radius: 10px;
  background-color: #02020281;
  padding-inline: 20px;
  display: flex;
  align-items: center;
`;
