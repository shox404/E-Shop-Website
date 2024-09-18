import styled from "@emotion/styled";

export const Styles = styled.div`
  padding: 20px;
  min-height: calc(100% - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    border-radius: 20px;
    width: 350px;
    background-color: #ffffff;
    padding: 25px 35px 20px 35px;
    button,
    input {
      width: 100%;
    }
    button {
      margin-top: 20px;
    }
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    form {
      width: 100%;
    }
  }
`;
