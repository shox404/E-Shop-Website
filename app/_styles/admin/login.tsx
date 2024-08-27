import { theme } from "@/app/globals";
import styled from "styled-components";

export const Styles = styled.div`
  padding: 20px;
  background-color: #000;
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    border-radius: 15px;
    width: 300px;
    background-color: #202020;
    padding-inline: 20px;
    padding-top: 15px;
    .ant-form-label-required {
      color: #fff !important;
    }
    button,
    input {
      width: 100%;
    }
    input {
      height: 40px;
      border-radius: 10px;
      padding-inline: 15px;
      font-size: 16px;
      outline: none;
      border: none;
      background-color: ${theme.use("dark", "inputBg")};
      color: ${theme.use("dark", "textColor")};
      transition: 0.5s;
      &:focus,
      &:hover {
        scale: 1;
        background-color: #3d3d3d81;
        box-shadow: 0;
      }
    }
    button {
      margin-top: 20px;
    }
  }
`;
