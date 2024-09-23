import { Form, Modal } from "antd";
import { AppButton, AppInput, Inline } from "../_styles/ui/element";
import FormItem from "../_components/form-item";
import { Fragment, useEffect, useState } from "react";
import { EditFilled } from "@ant-design/icons";
import FormFooter from "../_components/form-footer";
import { Category } from "../global/types";
import { useEditCategoryMutation } from "../_store/services/category";
import { errorMsg } from "../global/utils";
import DropItem from "../_components/drop-item";

export default function CategoryEditor({ data }: { data: Category }) {
  const [visible, setVisible] = useState(false);
  const [edit, { isLoading, error }] = useEditCategoryMutation();

  useEffect(() => errorMsg(error), [error]);

  const toggle = () => setVisible(!visible);

  const submit = () => null;

  return (
    <Fragment>
      <DropItem onClick={toggle}>
        <EditFilled /> Edit
      </DropItem>
      <Modal
        title="Edit category"
        open={visible}
        footer={<FormFooter act={submit} hide={toggle} loading={isLoading} />}
      >
        <Form
          layout="vertical"
          onFinish={submit}
          // onChange={}
          initialValues={data}
        >
          <FormItem node={<AppInput />} name="key" />
          <FormItem node={<AppButton />} />
        </Form>
      </Modal>
    </Fragment>
  );
}
