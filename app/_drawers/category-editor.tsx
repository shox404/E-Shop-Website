import { Form, Modal } from "antd";
import { Fragment, useEffect, useState } from "react";
import { EditFilled } from "@ant-design/icons";
import { AppInput } from "../_styles/ui/element";
import { Category } from "../global/types";
import { useEditCategoryMutation } from "../_store/services/category";
import { errorMsg } from "../global/utils";
import FormItem from "../_components/form-item";
import FormFooter from "../_components/form-footer";
import DropItem from "../_components/drop-item";

export default function CategoryEditor({ data }: { data: Category }) {
  const [visible, setVisible] = useState(false);
  const [ctg, setCtg] = useState<string>("");
  const [edit, { isLoading, error }] = useEditCategoryMutation();

  useEffect(() => errorMsg(error), [error]);

  const toggle = () => setVisible(!visible);

  const submit = async () => {
    await edit({ ...data, key: ctg });
  };

  return (
    <Fragment>
      <DropItem onClick={toggle}>
        <EditFilled /> Edit
      </DropItem>
      <Modal
        title="Edit category"
        open={visible}
        onCancel={toggle}
        footer={<FormFooter act={submit} hide={toggle} loading={isLoading} />}
      >
        <Form layout="vertical" onFinish={submit} initialValues={data}>
          <FormItem
            node={<AppInput onChange={(e) => setCtg(e.target.value)} />}
            name="key"
          />
        </Form>
      </Modal>
    </Fragment>
  );
}
