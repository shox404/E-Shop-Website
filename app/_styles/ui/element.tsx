import styled from "styled-components";

import { Theme } from "@/app/types";
import { theme } from "@/app/globals";

export const DefaultBtn = styled.button<Theme>`
  outline: none;
  border: none;
  cursor: pointer;
  background-color: ${(p) => theme.use(p.theme, "bgColor")};
  color: ${(p) => theme.use(p.theme, "textColor")};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  &:hover {
    scale: 1.05;
  }
  &:active {
    scale: 1;
    background-color: #3d3d3d81;
  }
`;

export const Button = styled(DefaultBtn)`
  height: 50px;
  border-radius: 10px;
  gap: 10px;
  font-size: 16px;
`;

export const IconButton = styled(DefaultBtn)`
  height: 35px;
  width: 35px;
  border-radius: 50%;
`;
