import { ProFormRadio } from "@ant-design/pro-form";
import { IfCondition } from "components/condition";
import { AccountTab, AccountTabtButton } from "config";
import { useState } from "react";
import Account from "./Account";
import Transaction from "./Transaction";

export const CustomerAccountSettlement: React.FC<any> = ({ data }) => {
  const [tab, setTab] = useState<any>(AccountTab.Account);

  const DocumentButtons: AccountTabtButton[] = [
    {
      value: AccountTab.Account,
      label: "Данс",
    },
    {
      value: AccountTab.Transaction,
      label: "Гүйлгээ",
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
          initialValue={AccountTab.Account}
        />
      </div>
      <IfCondition
        condition={tab === AccountTab.Account}
        whenTrue={<Account />}
      />
      <IfCondition
        condition={tab === AccountTab.Transaction}
        whenTrue={<Transaction />}
      />
    </>
  );
};

export default CustomerAccountSettlement;
