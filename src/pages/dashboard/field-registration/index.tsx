import { ProFormRadio } from "@ant-design/pro-form";
import { IfCondition } from "components/condition";
import { FieldRegistrationTab, FieldRegistrationTabtButton } from "config";
import { useState } from "react";
import ArrivalField from "./pages/ArrivalField";
import CargoApproach from "./pages/CargoApproach";
import Remainder from "./pages/Remainder";

export const Field_Registration: React.FC<any> = ({ data }) => {
  const [tab, setTab] = useState<any>(FieldRegistrationTab.ArrivalField);

  const DocumentButtons: FieldRegistrationTabtButton[] = [
    {
      value: FieldRegistrationTab.CargoApproach,
       label: "Ачаа дөхөлт",
    },
    {
      value: FieldRegistrationTab.Remainder,
      label: "Үлдэгдэл",
    },
    {
      value: FieldRegistrationTab.ArrivalField,
      label: "Талбайд ирсэнээр",
    },
  ];

  return (
    <>
      <div className="mt-5">
        <ProFormRadio.Group
          name={"documentLine"}
          radioType="button"
          fieldProps={{
            size: "large",
            value: tab,
            onChange: (e) => {
              setTab(e.target.value);
            },
          }}
          options={DocumentButtons?.map((el) => ({
            ...el,
            onChange: (e) => {
              setTab(e);
            },
          }))}
          initialValue={FieldRegistrationTab.ArrivalField}
        />
      </div>
      <IfCondition
        condition={tab === FieldRegistrationTab.ArrivalField}
        whenTrue={<ArrivalField />}
      />
      <IfCondition
        condition={tab === FieldRegistrationTab.CargoApproach}
        whenTrue={<CargoApproach />}
      />
      <IfCondition
        condition={tab === FieldRegistrationTab.Remainder}
        whenTrue={<Remainder />}
      />
    </>
  );
};
