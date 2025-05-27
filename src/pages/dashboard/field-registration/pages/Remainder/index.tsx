import { useState } from "react";
import { PageCard } from "components/card";
import { ITable } from "components/index";
import { Label } from "components/label";
import InitTableHeader from "components/table-header";
import { initPagination } from "utils/index";
import { UpdateService } from "pages/dashboard/financiar/pages/CustomerCompany/actions/update";

const Remainder = () => {
  const [filter, setFilter] = useState({ ...initPagination, pageSize: 10 });
  const [create, setCreate] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  // Table data from the image
  const data = [
    {
      near_date: "2/5/2024",
      border_crossing: "-",
      arrival_departure: "-",
      container_number: "-",
      container: "-",
      broker_name: "-",
      empty_loaded: "-",
      whether_sell: "-",
      whether_amount: "-",
    },
    // Repeat the same data for other rows
    {
      near_date: "2/5/2024",
      border_crossing: "-",
      arrival_departure: "-",
      container_number: "-",
      container: "-",
      broker_name: "-",
      empty_loaded: "-",
      whether_sell: "-",
      whether_amount: "-",
    },
    {
      near_date: "2/5/2024",
      border_crossing: "-",
      arrival_departure: "-",
      container_number: "-",
      container: "-",
      broker_name: "-",
      empty_loaded: "-",
      whether_sell: "-",
      whether_amount: "-",
    },
    {
      near_date: "2/5/2024",
      border_crossing: "-",
      arrival_departure: "-",
      container_number: "-",
      container: "-",
      broker_name: "-",
      empty_loaded: "-",
      whether_sell: "-",
      whether_amount: "-",
    },
    // You can add more rows as needed
  ];

  return (
    <PageCard>
      <div className="px-2 pb-0">
        <InitTableHeader
          customHeaderTitle={<Label title="Чингэлэг" />}
          searchPlaceHolder="Хайх чингэлэгийн дугаар оруулна уу"
          fileName="Нэмэлт хураамж тохиргоо"
          toolbarItems = {true}
          setCreate={setCreate}
          search={search}
          hideCreate={true}
          hideDownload={true}
          setSearch={(e) => setSearch(e)}
          refresh={() => {}}
        />
      </div>

      <ITable
        total={data.length}
        loading={false}
        dataSource={data}
        refresh={() => {}}
        DetailComponent={UpdateService}
        hideEditButton={() => true}
        form={filter}
        setForm={setFilter}
        columns={[
          {
            dataIndex: "near_date",
            title: "Дөхөлт огноо",
            align: "left",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "border_crossing",
            title: "Орох хил",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "arrival_departure",
            title: "Ирэх/явах",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "container_number",
            title: "Чингэлэг дугаар",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "container",
            title: "Даац",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "broker_name",
            title: "Зуучийн нэр",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "empty_loaded",
            title: "Хоосон/Ачаатай",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "whether_sell",
            title: "Зарах эсэх",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "whether_amount",
            title: "Зарах үнэ",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
        ]}
        create={create}
        setCreate={setCreate}
      />
    </PageCard>
  );
};

export default Remainder;
