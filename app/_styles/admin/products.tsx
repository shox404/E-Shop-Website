import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Styles = styled(motion.div)`
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
      .ant-image {
        min-width: 100%;
      }
      .image {
        height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        object-fit: cover;
        margin: auto;
        img {
          border-radius: 16px;
          height: 100%;
        }
      }
    }
    .footer {
      padding: 10px;
      p {
        white-space: nowrap;
        max-width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      button {
        padding: 10px;
        height: 35px;
      }
    }
  }
  @media screen and (max-width: 480px) {
    padding-inline: 0;
    .card {
      width: 100%;
      .images .image {
        height: 200px;
      }
    }
  }
`;
