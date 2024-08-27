import styled from "styled-components";

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
  &:hover {
    background-color: #303030;
  }
  &:active {
    scale: 0.95;
    background-color: #303030;
  }
`;

export const Button = styled(DefaultBtn)`
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

export const Input = styled.input`
  height: 40px;
  border-radius: 10px;
  padding-inline: 15px;
  font-size: 16px;
  outline: none;
  border: none;
  background-color: #141414;
  color: #ebe2eb;
  transition: 0.5s;
  &:focus {
    scale: 1;
    background-color: #3d3d3d81;
  }
`;
