import styled from "@emotion/styled";

export const Styles = styled.div`
  padding: 20px;
  min-height: calc(100% - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    border-radius: 20px;
    width: 100%;
    background-color: #ffffff;
    padding: 25px 35px 20px 35px;
    form {
      button,
      input {
        width: 100%;
      }
      button {
        margin-top: 20px;
      }
    }
  }
  @media screen and (max-width: 480px) {
    padding-inline: 0;
    .content {
      padding: 15px 25px 10px 25px;
    }
  }
`;
