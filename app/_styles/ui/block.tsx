import styled from "styled-components";

import { Theme } from "@/app/types";

export const Container = styled.div<Theme>`
  background-color: ${(p) => (p.theme == "dark" ? "#02020281" : "#ebe2eb")};
  color: ${(p) => (p.theme == "dark" ? "#ebedf0" : "#222222")};
`;

export const DarkContent = styled.div`
  background-color: #121212;
  color: #ebedf0;
`;

export const LightContent = styled.div`
  background-color: #ebe2eb;
  color: #222222;
`;

export const Card = styled.div``;
