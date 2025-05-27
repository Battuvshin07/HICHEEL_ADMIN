import { useState } from "react";
import { PageCard } from "components/card";
import { ITable } from "components/index";
import { Label } from "components/label";
import InitTableHeader from "components/table-header";
import { initPagination } from "utils/index";
import { CreateService } from "./actions/create";
import { UpdateService } from "./actions/update";
import { CustomerAccountType } from "service/fininaciar/customerAccount/type";
import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import customerAccount from "service/fininaciar/customerAccount";

const Transaction = () => {
  const [filter, setFilter] = useState(initPagination);
  const [search, setSearch] = useState<string>("");
  const [create, setCreate] = useState<boolean>(false);

  const data: CustomerAccountType[] = [
    {
      date: "2024/10/20",
      account: "1001",
      customer_name: "Customer 1",
      first_remainder: 0,
      ready: "0₮",
      not_ready: "75000₮",
      receipt: "60000",
      payer: "60000",
      employee_transaction: "Тээврийн менежер",
      debit: 0,
      credit: 0,
      last_remainder: 0,
    },
    {
      date: "2024/10/20",
      account: "1002",
      customer_name: "Customer 2",
      first_remainder: 75000,
      ready: "75000₮",
      not_ready: "0₮",
      receipt: "60000",
      payer: "60000",
      employee_transaction: "Тээврийн менежер",
      debit: 0,
      credit: 0,
      last_remainder: 75000,
    },
    {
      date: "2024/10/20",
      account: "1003",
      customer_name: "Customer 3",
      first_remainder: 150000,
      ready: "75000₮",
      not_ready: "75000₮",
      receipt: "60000",
      payer: "60000",
      employee_transaction: "Тээврийн менежер",
      debit: 0,
      credit: 0,
      last_remainder: 150000,
    },
    {
      date: "2024/10/20",
      account: "1003",
      customer_name: "Customer 3",
      first_remainder: 75000,
      ready: "0₮",
      not_ready: "75000₮",
      receipt: "60000",
      payer: "60000",
      employee_transaction: "Тээврийн менежер",
      debit: 0,
      credit: 0,
      last_remainder: 75000,
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
          addButtonName="Зузаатгал оруулах"
          hideDownload={true}
          setCreate={setCreate}
        />
      </div>

      <ITable<CustomerAccountType>
        CreateComponent={CreateService}
        create={create as boolean}
        setCreate={setCreate}
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
            dataIndex: "date",
            title: "Огноо",
            align: "left",
          },
          {
            dataIndex: "account",
            title: "Данс",
            width: "200",
          },
          {
            dataIndex: "ready",
            title: "Бэлэн",
            width: "200",
          },
          {
            dataIndex: "not_ready",
            title: "Бэлэн бус",
            width: "200",
          },
          {
            dataIndex: "receipt",
            title: "Баримт",
            width: "200",
          },
          {
            dataIndex: "payer",
            title: "Төлөгч",
            width: "200",
          },
          {
            dataIndex: "employee_transaction",
            title: "Гүйлгээ хийсэн ажилтан",
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

export default Transaction;
