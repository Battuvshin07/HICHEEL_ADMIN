import { useDebounceFn, useRequest } from "ahooks";
import { notification } from "antd";
import { PageCard } from "components/card";
import { ITable } from "components/index";
import { Label } from "components/label";
import InitTableHeader from "components/table-header";
import { useEffect, useState } from "react";
import { initPagination } from "utils/index";
import cancellingTicket from "service/fininaciar/cancellingTicket";
import { CancellingTicketType } from "service/fininaciar/cancellingTicket/type";

const CancellingTicket = () => {
  const [filter, setFilter] = useState({ ...initPagination, pageSize: 10 });
  const [create, setCreate] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const data = [
    {
      date: "2024/10/20",
      ticket_number: "410024214",
      code: "9999",
      fees_name: "Баримтын үнэ",
      category: "Сунгалт олгогчоор",
      request_cashier: "Тээврийн менежер",
      state: "Шинээр ирсэн",
    },
    {
      date: "2024/10/20",
      ticket_number: "410024214",
      code: "5001",
      fees_name: "Зам,талбай ашиглалтын хураамж Вагон",
      category: "Сунгалт олгогчоор",
      request_cashier: "Тээврийн менежер",
      state: "Шинээр ирсэн",
    },
    {
      date: "2024/10/20",
      ticket_number: "410024214",
      code: "5001",
      fees_name: "Зам,талбай ашиглалтын хураамж Вагон",
      category: "Сунгалт олгогчоор",
      request_cashier: "Тээврийн менежер",
      state: "Шинээр ирсэн",
    },
    {
      date: "2024/10/20",
      ticket_number: "410024214",
      code: "5001",
      fees_name: "Зам,талбай ашиглалтын хураамж Вагон",
      category: "Сунгалт олгогчоор",
      request_cashier: "Тээврийн менежер",
      state: "Шинээр ирсэн",
    },
    {
      date: "2024/10/20",
      ticket_number: "410024214",
      code: "5001",
      fees_name: "Зам,талбай ашиглалтын хураамж Вагон",
      category: "Сунгалт олгогчоор",
      request_cashier: "Тээврийн менежер",
      state: "Шинээр ирсэн",
    },
    {
      date: "2024/10/20",
      ticket_number: "410024214",
      code: "5001",
      fees_name: "Зам,талбай ашиглалтын хураамж Вагон",
      category: "Сунгалт олгогчоор",
      request_cashier: "Тээврийн менежер",
      state: "Цуцалсан",
    },
    {
      date: "2024/10/20",
      ticket_number: "410024214",
      code: "5001",
      fees_name: "Зам,талбай ашиглалтын хураамж Вагон",
      category: "Сунгалт олгогчоор",
      request_cashier: "Тээврийн менежер",
      state: "Цуцалсан",
    },
    {
      date: "2024/10/20",
      ticket_number: "410024214",
      code: "5001",
      fees_name: "Зам,талбай ашиглалтын хураамж Вагон",
      category: "Сунгалт олгогчоор",
      request_cashier: "Тээврийн менежер",
      state: "Цуцалсан",
    },
    {
      date: "2024/10/20",
      ticket_number: "410024214",
      code: "5001",
      fees_name: "Зам,талбай ашиглалтын хураамж Вагон",
      category: "Сунгалт олгогчоор",
      request_cashier: "Тээврийн менежер",
      state: "Цуцалсан",
    },
  ];

  return (
    <PageCard xR>
      <div className="px-2 pb-0">
        <InitTableHeader
          customHeaderTitle={<Label title="Э/Х тасалбах хүчингүй болгох" />}
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

      <ITable<CancellingTicketType>
        total={data.length}
        loading={false}
        dataSource={data as any}
        refresh={() => {}}
        hideEditButton={() => true}
        form={filter}
        setForm={setFilter}
        columns={[
          {
            dataIndex: "date",
            title: "Он сар өдөр",
            align: "left",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "ticket_number",
            title: "ЭХ тасалбарын №",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "code",
            title: "Код",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "fees_name",
            title: "Хураамжийн нэр",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "fees_amount",
            title: "Хураамжийн дүн",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "request_cashier",
            title: "Хүсэлт явуулсан кассир",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "state",
            title: "Төлөв",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
        ]}
        create={create as boolean}
        setCreate={setCreate}
        RemoveModelConfig={{
          action: cancellingTicket.deleteA,
          config: (record) => ({
            display: record?.ticket_number, // Display the company name for confirmation
            title: "Remove Company", // Title of the deletion confirmation modal
          }),
        }}
      />
    </PageCard>
  );
};
export default CancellingTicket;
