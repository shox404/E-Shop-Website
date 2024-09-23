import { Form, Modal } from "antd";
import { AppButton, AppInput } from "../_styles/ui/element";
import FormItem from "../_components/form-item";
import { FormValue } from "../global/types";

export default function CategoryEditor() {
  return (
    <Modal title="Edit category">
      <Form
        layout="vertical"
        // onFinish={submit}
        // onChange={({ target: { id, value } }: FormValue) =>
        //   setValue({ key: id, value })
        // }
        // initialValues={edit}
      >
        <FormItem node={<AppInput />} name="key" />
        <FormItem node={<AppButton />} />
      </Form>
    </Modal>
  );
}
