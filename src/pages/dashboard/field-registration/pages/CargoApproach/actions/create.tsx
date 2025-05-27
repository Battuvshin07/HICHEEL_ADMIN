import { ProFormInstance } from "@ant-design/pro-form";
import { useRequest } from "ahooks";
import { IModalForm } from "components/modal";
import { useRef } from "react";
import { ActionComponentProps } from "types";
import { Info } from "./parts/info";
import fieldRegistration from "service/feild_registration";

export const CreateCargoApproach = ({ ...rest }: ActionComponentProps<any>) => {
  const formRef = useRef<ProFormInstance>();

  const create = useRequest(fieldRegistration.create, {
    manual: true,
  });

  return (
    <IModalForm
      open={rest.open}
      title="Ачаа чингэлэг тээврийн бүртгэл"
      formRef={formRef}
      onOpenChange={() => {
        formRef.current?.resetFields();
      }}
      width={1000}
      scrollToFirstError={true}
      modalProps={{ maskClosable: false, onCancel: rest.onCancel }}
      cancelText={"Буцах"}
      okText={"Хадгалах"}
      className="px-3"
      onRequest={async (values) => {
        if (values) {
          return await create.runAsync({
            ...values,
          });
        }
        return false;
      }}
      onSuccess={rest.onFinish}
    >
      <Info actionName="create" />
    </IModalForm>
  );
};
