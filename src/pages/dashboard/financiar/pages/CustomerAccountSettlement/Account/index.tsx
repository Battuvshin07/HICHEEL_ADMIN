import { useState } from "react";
import { PageCard } from "components/card";
import { ITable } from "components/index";
import { Label } from "components/label";
import InitTableHeader from "components/table-header";
import { initPagination } from "utils/index";
import { UpdateService } from "./actions/update";
import { CustomerAccountType } from "service/fininaciar/customerAccount/type";
import customerAccount from "service/fininaciar/customerAccount";

const Account = () => {
  const [filter, setFilter] = useState(initPagination);
  const [search, setSearch] = useState<string>("");

  const data: CustomerAccountType[] = [
    {
      date: "2024/10/20",
      account: "KBL",
      customer_name: "TL Logistic",
      first_remainder: 60000,
      debit: 60000,
      ready: "0₮",
      not_ready: "75000₮",
      receipt: "60000",
      payer: "60000",
      employee_transaction: "Тээврийн менежер",
      credit: 0,
      last_remainder: 60000,
    },
    {
      date: "2024/10/20",
      account: "KBL",
      customer_name: "TL Logistic",
      first_remainder: 60000,
      debit: 60000,
      ready: "0₮",
      not_ready: "75000₮",
      receipt: "60000",
      payer: "60000",
      employee_transaction: "Тээврийн менежер",
      credit: 0,
      last_remainder: 60000,
    },
    {
      date: "2024/10/20",
      account: "KBL",
      customer_name: "TL Logistic",
      first_remainder: 60000,
      debit: 60000,
      ready: "0₮",
      not_ready: "75000₮",
      receipt: "60000",
      payer: "60000",
      employee_transaction: "Тээврийн менежер",
      credit: 0,
      last_remainder: 60000,
    },
    {
      date: "2024/10/20",
      account: "KBL",
      customer_name: "TL Logistic",
      first_remainder: 60000,
      debit: 60000,
      ready: "0₮",
      not_ready: "75000₮",
      receipt: "60000",
      payer: "60000",
      employee_transaction: "Тээврийн менежер",
      credit: 0,
      last_remainder: 60000,
    },
    {
      date: "2024/10/20",
      account: "TEW",
      customer_name: "TL Logistic",
      first_remainder: 60000,
      debit: 60000,
      ready: "0₮",
      not_ready: "75000₮",
      receipt: "60000",
      payer: "60000",
      employee_transaction: "Тээврийн менежер",
      credit: 0,
      last_remainder: 60000,
    },
    {
      date: "2024/10/20",
      account: "TEW",
      customer_name: "TL Logistic",
      first_remainder: 60000,
      debit: 60000,
      ready: "0₮",
      not_ready: "75000₮",
      receipt: "60000",
      payer: "60000",
      employee_transaction: "Тээврийн менежер",
      credit: 0,
      last_remainder: 60000,
    },
    {
      date: "2024/10/20",
      account: "TEW",
      customer_name: "TL Logistic",
      first_remainder: 60000,
      debit: 60000,
      ready: "0₮",
      not_ready: "75000₮",
      receipt: "60000",
      payer: "60000",
      employee_transaction: "Тээврийн менежер",
      credit: 0,
      last_remainder: 60000,
    },
    {
      date: "2024/10/20",
      account: "TEW",
      customer_name: "TL Logistic",
      first_remainder: 60000,
      debit: 60000,
      ready: "0₮",
      not_ready: "75000₮",
      receipt: "60000",
      payer: "60000",
      employee_transaction: "Тээврийн менежер",
      credit: 0,
      last_remainder: 60000,
    },
    {
      date: "2024/10/20",
      account: "JKL",
      customer_name: "TL Logistic",
      first_remainder: 60000,
      debit: 60000,
      ready: "0₮",
      not_ready: "75000₮",
      receipt: "60000",
      payer: "60000",
      employee_transaction: "Тээврийн менежер",
      credit: 0,
      last_remainder: 60000,
    },
    {
      date: "2024/10/20",
      account: "JKL",
      customer_name: "TL Logistic",
      first_remainder: 60000,
      debit: 60000,
      ready: "0₮",
      not_ready: "75000₮",
      receipt: "60000",
      payer: "60000",
      employee_transaction: "Тээврийн менежер",
      credit: 0,
      last_remainder: 60000,
    },
  ];

  return (
    <PageCard xR>
      <div className="px-2 pb-0">
        <InitTableHeader
          customHeaderTitle={<Label title="Данс" />}
          searchPlaceHolder="Хайх"
          fileName="Данс"
          search={search}
          setSearch={(e) => setSearch(e)}
          refresh={() => {}}
          hideCreate={true}
          hideDownload={true}
        />
      </div>

      <ITable<CustomerAccountType>
        total={data.length}
        loading={false}
        dataSource={data}
        refresh={() => {}}
        DetailComponent={UpdateService}
        UpdateComponent={UpdateService}
        form={filter}
        setForm={setFilter}
        columns={[
          {
            dataIndex: "account",
            title: "Данс",
            align: "left",
          },
          {
            dataIndex: "customer_name",
            title: "Харилцагчийн нэр",
            width: "200",
          },
          {
            dataIndex: "first_remainder",
            title: "Эхний үлдэгдэл",
            width: "200",
          },
          {
            dataIndex: "debit",
            title: "Дебит",
            width: "200",
          },
          {
            dataIndex: "credit",
            title: "Кредит",
            width: "200",
          },
          {
            dataIndex: "last_remainder",
            title: "Эцсийн үлдэгдэл",
            width: "200",
          },
        ]}
        RemoveModelConfig={{
          action: customerAccount.deleteA, // Delete function from the customerCompany service
          config: (record) => ({
            display: record?.customer_name, // Display the company name for confirmation
            title: "Remove Company", // Title of the deletion confirmation modal
          }),
        }}
      />
    </PageCard>
  );
};

export default Account;
