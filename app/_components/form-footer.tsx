import { Flex } from "antd";
import React from "react";
import { AppButton } from "../_styles/ui/element";
import { LoadingOutlined } from "@ant-design/icons";

interface Props {
  loading: boolean;
  act: () => void;
  hide: () => void;
}

export default function FormFooter({ loading, hide, act }: Props) {
  return (
    <Flex justify="end">
      <AppButton onClick={hide} style={{ marginRight: 8 }}>
        Cancel
      </AppButton>
      <AppButton onClick={act} disabled={loading}>
        {loading ? <LoadingOutlined /> : ""} Submit
      </AppButton>
    </Flex>
  );
}
