import styled from "styled-components";

import { Theme } from "@/app/types";

export const DefaultBtn = styled.button<Theme>`
  outline: none;
  border: none;
  cursor: pointer;
  background-color: ${(p) => (p.theme == "dark" ? "#02020281" : "#ebe2eb")};
  color: ${(p) => (p.theme == "dark" ? "#ebedf0" : "#222222")};
`;

export const Button = styled(DefaultBtn)`
  height: 40px;
  border-radius: 10px;
  gap: 5px;
  font-size: 16px;
`;

export const IconButton = styled(DefaultBtn)`
  height: 35px;
  width: 35px;
  border-radius: 50%;
`;
