import { useDebounceFn, useRequest } from "ahooks";
import { notification, Switch } from "antd";
import { PageCard } from "components/card";
import { ITable } from "components/index";
import { Label } from "components/label";
import InitTableHeader from "components/table-header";
import { useEffect, useState } from "react";
import customerCompany from "service/fininaciar/customerCompany";
import { CustomerCompanyType } from "service/fininaciar/customerCompany/type";
import { initPagination } from "utils/index";
import { CreateService } from "./actions/create";
import { UpdateService } from "./actions/update";

const CustomerCompany = () => {
  const [filter, setFilter] = useState(initPagination);
  const [create, setCreate] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const list = useRequest(customerCompany.list, {
    manual: true,
    onError: (err) =>
      notification.error({
        message: err.message,
      }),
  });

  const run = () => {
    list.run({
      ...filter,
      search: search,
    });
  };

  useEffect(() => {
    run();
  }, [filter]);

  const searchRun = useDebounceFn(list.run, { wait: 1000 });

  const data = [
    {
      shortcut_name: "KBL",
      name: "TL Logistic",
      is_broker: true,
      contact_number: "80606848",
      ledger: { name: "60000" },
    },
    {
      shortcut_name: "KBL",
      name: "TL Logistic",
      is_broker: true,
      contact_number: "80606848",
      ledger: { name: "60000" },
    },
    {
      shortcut_name: "KBL",
      name: "TL Logistic",
      is_broker: true,
      contact_number: "80606848",
      ledger: { name: "60000" },
    },
    {
      shortcut_name: "KBL",
      name: "TL Logistic",
      is_broker: true,
      contact_number: "80606848",
      ledger: { name: "60000" },
    },
    {
      shortcut_name: "TEW",
      name: "TL Logistic",
      is_broker: true,
      contact_number: "80606848",
      ledger: { name: "60000" },
    },
    {
      shortcut_name: "TEW",
      name: "TL Logistic",
      is_broker: false,
      contact_number: "80606848",
      ledger: { name: "60000" },
    },
    {
      shortcut_name: "TEW",
      name: "TL Logistic",
      is_broker: true,
      contact_number: "80606848",
      ledger: { name: "60000" },
    },
    {
      shortcut_name: "TEW",
      name: "TL Logistic",
      is_broker: false,
      contact_number: "80606848",
      ledger: { name: "60000" },
    },
    {
      shortcut_name: "TEW",
      name: "TL Logistic",
      is_broker: true,
      contact_number: "80606848",
      ledger: { name: "60000" },
    },
    {
      shortcut_name: "JKL",
      name: "TL Logistic",
      is_broker: true,
      contact_number: "80606848",
      ledger: { name: "60000" },
    },
    {
      shortcut_name: "JKL",
      name: "TL Logistic",
      is_broker: true,
      contact_number: "80606848",
      ledger: { name: "60000" },
    },
  ];

  return (
    <PageCard xR>
      <div className="px-2 pb-0">
        <InitTableHeader
          addButtonName="Шинэ"
          customHeaderTitle={<Label title="Харилцагч компанийн жагсаалт" />}
          searchPlaceHolder="Хайх чингэлгийн дугаар оруулна уу"
          fileName="Харилцагч компанийн жагсаалт"
          setCreate={setCreate}
          search={search}
          setSearch={(e) => {
            setSearch(e);
            searchRun.run({ ...filter, search: e });
          }}
          refresh={() => list.run({ ...filter, search: search })}
        />
      </div>

      <ITable<CustomerCompanyType>
        total={list.data?.total}
        loading={list.loading}
        dataSource={data as any}
        refresh={(values) => list.run({ ...filter, ...values })}
        UpdateComponent={UpdateService}
        DetailComponent={UpdateService}
        form={filter}
        setForm={setFilter}
        columns={[
          {
            dataIndex: "shortcut_name",
            title: "Товчлол",
            align: "left",
            render: (value) => (
              <div className="flex gap-2">
                <span className="text-sm text-[#475467] font-normal">
                  {value || "-"}
                </span>
              </div>
            ),
          },
          {
            dataIndex: "name",
            title: "Компаний нэр",
            align: "left",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "is_broker",
            title: "Зууч эсэх",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center ">
                {<Switch disabled checked={!!value} />}
              </span>
            ),
          },
          {
            dataIndex: "ledger_name",
            title: "Харилцагчийн код",
            width: "200",
            render: (_, record) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {record?.ledger?.name || "-"}
              </span>
            ),
          },
          {
            dataIndex: "contact_number",
            title: "Харилцах дугаар",
            align: "center",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal">
                {value || "-"}
              </span>
            ),
          },
        ]}
        CreateComponent={CreateService}
        create={create as boolean}
        setCreate={setCreate}
        RemoveModelConfig={{
          action: customerCompany.deleteA, // Delete function from the customerCompany service
          config: (record) => ({
            uniqueKey: record?.id, // Unique identifier for the record to be deleted
            display: record?.name, // Display the company name for confirmation
            title: "Remove Company", // Title of the deletion confirmation modal
          }),
        }}
        onPaginationChange={(page, pageSize) => {
          console.log(`Page: ${page}, PageSize: ${pageSize}`);
        }}
      />
    </PageCard>
  );
};

export default CustomerCompany;
