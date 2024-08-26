import styled from "styled-components";

export const SideBar = styled.div`
  width: 300px;
  height: 100dvh;
  gap: 15px;
  padding: 30px;
  transition: 0.5s;
  position: fixed;
  top: 0;
  left: -300px;
  background-color: #121212;
  color: #ebedf0;
  .header {
    height: 30px;
    margin-bottom: 50px;
    .handler {
      transition: 0.5s;
      position: fixed;
      left: 30px;
      rotate: 180deg;
    }
  }
  .items {
    height: calc(100% - 80px);
  }
  &.open {
    left: 0;
    .header .handler {
      position: relative;
      left: auto;
      rotate: 0deg;
    }
  }
`;

export const Item = styled.div`
  height: 50px;
  border-radius: 10px;
  background-color: #0a0a0a;
  padding-inline: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: 0.5s background-color;
  &:hover {
    background-color: #3d3d3d81;
  }
  &.active {
    background-color: #3d3d3d81;
  }
`;

export const Content = styled.div`
  background-color: #000000;
  color: #ebedf0;
  width: 100%;
  padding: 15px;
  transition: 0.5s;
  min-height: 100dvh;
  &.open {
    width: calc(100% - 300px);
    margin-left: 300px;
  }
`;
