import styled from "@emotion/styled";

export const SideBar = styled.div`
  width: 300px;
  height: 100dvh;
  gap: 15px;
  padding: 30px;
  transition: 0.5s;
  position: fixed;
  top: 0;
  left: -300px;
  background-color: #ffffff;
  z-index: 100;
  border-radius: 0 20px 20px 0;
  .header {
    height: 30px;
    margin-bottom: 50px;
    .handler {
      transition: 0.5s;
      position: fixed;
      left: 15px;
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
  @media screen and (max-width: 480px) {
    width: 100%;
    left: -100%;
    border-radius: 0;
  }
`;

export const Item = styled.div`
  height: 50px;
  border-radius: 10px;
  background-color: #ffffff;
  color: #222222;
  padding-inline: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: 0.5s background-color;
  &:hover {
    background-color: #807e9781;
  }
  &.active {
    background-color: #807e9781;
  }
`;

export const Content = styled.div`
  background-color: #f0f0f0;
  color: #181818;
  width: 100%;
  padding: 15px;
  transition: 0.5s;
  min-height: 100dvh;
  &.open {
    width: calc(100% - 300px);
    margin-left: 300px;
  }
  @media screen and (max-width: 480px) {
    padding-top: 80px;
    &.open {
      width: 100%;
      margin-left: 0;
    }
  }
`;
