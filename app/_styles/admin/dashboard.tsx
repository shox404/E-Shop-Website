import styled from "@emotion/styled";

export const Styles = styled.div`
  padding: 20px;
  height: 100%;
  .boxes {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
    .box {
      width: 32%;
      height: 100px;
      background-color: #fff;
      display: flex;
      align-items: center;
      padding: 15px;
      border-radius: 20px;
    }
  }
  @media screen and (max-width: 480px) {
    padding-inline: 0;
    .boxes .box {
      width: 100%;
    }
  }
`;
