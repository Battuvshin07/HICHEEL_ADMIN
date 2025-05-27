import { useState } from "react";
import { PageCard } from "components/card";
import { ITable } from "components/index";
import { Label } from "components/label";
import InitTableHeader from "components/table-header";
import { initPagination } from "utils/index";
import { UpdateService } from "pages/dashboard/financiar/pages/CustomerCompany/actions/update";

const ArrivalField = () => {
  const [filter, setFilter] = useState({ ...initPagination, pageSize: 10   });
  const [create, setCreate] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  // Table data from the image
  const data = [
    {
      near_date: "2/5/2024",
      broker_code: "-",
      apartment_number: "-",
      field_broken: "-",
      field_arrival: "-",
      broken: "-",
      weakened: "-",
      shipped: "-",
      field_arrive: "-",
    },
   
    {
      near_date: "2/5/2024",
      broker_code: "-",
      apartment_number: "-",
      field_brokenr: "-",
      field_arrival: "-",
      broken: "-",
      weakened: "-",
      shipped: "-",
      field_arrive: "-",
    },
    {
      near_date: "2/5/2024",
      broker_code: "-",
      apartment_number: "-",
      field_broken: "-",
      field_arrival: "-",
      broken: "-",
      weakened: "-",
      shipped: "-",
      field_arrive: "-",
    },
    {
      near_date: "2/5/2024",
      broker_code: "-",
      apartment_number: "-",
      field_broken: "-",
      field_arrival: "-",
      broken: "-",
      weakened: "-",
      shipped: "-",
      field_arrive: "-",
    },
    // You can add more rows as needed
  ];

  return (
    <PageCard>
      <div className="px-2 pb-0">
        <InitTableHeader
          customHeaderTitle={<Label title="Талбайн бүртгэл" />}
          searchPlaceHolder="Хайх чингэлэгийн дугаар оруулна уу"
          fileName="Нэмэлт хураамж тохиргоо"
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
            dataIndex: "broker_code",
            title: "Зууч код",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "apartment_number",
            title: "Байр №",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "field_broken",
            title: "Талбайд задарсан",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "field_arrival",
            title: "Талбайд ирсэн",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "broken",
            title: "Задарсан",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "weakened",
            title: "Суларсан",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "shipped",
            title: "Aчилт хийсэн",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "field_arrive",
            title: "Талбайд ирэх",
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

export default ArrivalField;
