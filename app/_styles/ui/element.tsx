import { Input, Select } from "antd";
import styled from "@emotion/styled";

export const DefaultBtn = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  background-color: #000000;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  &:hover:not(:disabled) {
    background-color: #303030;
  }
  &:active:not(:disabled) {
    scale: 0.95;
    background-color: #303030;
  }
  &:disabled {
    background-color: #1b1b1b;
    color: #cacaca;
  }
`;

export const AppButton = styled(DefaultBtn)`
  height: 50px;
  border-radius: 10px;
  gap: 10px;
  font-size: 16px;
  padding-inline: 20px;
`;

export const IconButton = styled(DefaultBtn)`
  height: 35px;
  width: 35px;
  border-radius: 50%;
`;

const InputUi = `
  height: 45px;
  border-radius: 10px;
  font-size: 16px;
  background-color: #f5f5f5 !important;
  transition: 0.5s;
`;

export const AppInput = styled(Input)(InputUi);

export const AppPassword = styled(Input.Password)(InputUi);

export const AppTextArea = styled(Input.TextArea)(InputUi);

export const AppSelect = styled(Select)`
  height: 45px;
  .ant-select-selector {
    font-size: 16px;
    transition: 0.5s;
    background-color: #f5f5f5 !important;
    border-radius: 10px;
  }
`;

export const Navbar = styled.nav`
  padding: 30px;
  margin-inline: 20px;
  border-radius: 20px;
  height: 70px;
  background-color: #fff;
  display: flex;
  align-items: center;
  @media screen and (max-width: 480px) {
    margin-inline: 0px;
    width: 100%;
  }
`;
