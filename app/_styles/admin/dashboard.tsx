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
      gap: 10px;
      padding: 25px;
      border-radius: 20px;
      .icon {
        width: 50px;
        height: 50px;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f0f0f0;
        font-size: 25px;
      }
    }
  }
  .blocks {
    align-items: baseline;
    height: auto;
  }
  @media screen and (max-width: 480px) {
    padding-inline: 0;
    .boxes .box {
      width: 100%;
    }
  }
`;

export const PieBox = styled.div`
  width: 300px;
  height: 300px;
  background: #fff;
  margin-top: 20px;
  border-radius: 20px;
  @media screen and (max-width: 480px) {
    width: 100%;
}
`;
