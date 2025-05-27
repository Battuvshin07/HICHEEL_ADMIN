import { ProFormInstance } from "@ant-design/pro-form";
import { useRequest } from "ahooks";
import { IModalForm } from "components/modal";
import { useRef } from "react";
import { ActionComponentProps } from "types";
import { Info } from "./parts/info";
import fieldRegistration from "service/feild_registration";
import { CargoApproachList } from "service/feild_registration/type";

export const UpdateCargoApproach = ({ 
  detail,
  ...rest 
}: ActionComponentProps<CargoApproachList>) => {
  const formRef = useRef<ProFormInstance>();

  const update = useRequest(fieldRegistration.update, {
    manual: true,
  });

  return (
    <IModalForm
      open={rest.open}
      title="Ачаа чингэлэг тээврийн бүртгэл засах"
      formRef={formRef}
      initialValues={detail}
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
        if (values && detail?.id) {
          return await update.runAsync(values, detail.id);
        }
        return false;
      }}
      onSuccess={rest.onFinish}
    >
      <Info actionName="update" />
    </IModalForm>
  );
};
