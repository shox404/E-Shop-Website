import styled from "@emotion/styled";

export const Styles = styled.div`
  padding: 20px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: start;
  gap: 10px;
  .card {
    width: 270px;
    background-color: #fff;
    border-radius: 20px;
    padding: 5px;
    .images {
      overflow: hidden;
      border-radius: 16px;
      .image {
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        object-fit: cover;
        .ant-image,
        img {
          border-radius: 16px;
          height: 100%;
        }
      }
    }
    .footer {
      padding: 10px;
    }
  }
`;
