import { useDebounceFn, useRequest } from "ahooks";
import { notification } from "antd";
import { PageCard } from "components/card";
import { ITable } from "components/index";
import { Label } from "components/label";
import InitTableHeader from "components/table-header";
import { useEffect, useState } from "react";
import { TicketReportType } from "service/report/TicketReport/type";
import { initPagination } from "utils/index";

const TicketReport = () => {
  const [filter, setFilter] = useState({ ...initPagination, pageSize: 10 });
  const [create, setCreate] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const data = [
    {
      state: "2024/10/20",
      type: "1001",
      receipt_number: "0₮",
      date: "75000₮",
      all_payed: "60000₮",
      ready: "60000₮",
      not_ready: "60000₮",
      total_payment: "60000₮",
      crane_fee: "60000₮",
      road_use: "60000₮",
      save_goods: "60000₮",
      train_clean: "60000₮",
      train_use: "60000₮",
      tltrain_use: "60000₮",
      customs_inspection: "60000₮",
      car_entrance: "60000₮",
    },
    {
      state: "2024/10/20",
      type: "1002",
      receipt_number: "75000₮",
      date: "0₮",
      all_payed: "60000₮",
      ready: "60000₮",
      not_ready: "60000₮",
      total_payment: "60000₮",
      crane_fee: "60000₮",
      road_use: "60000₮",
      save_goods: "60000₮",
      train_clean: "60000₮",
      train_use: "60000₮",
      tltrain_use: "60000₮",
      customs_inspection: "60000₮",
      car_entrance: "60000₮",
    },
    {
      state: "2024/10/20",
      type: "1003",
      receipt_number: "75000₮",
      date: "75000₮",
      all_payed: "60000₮",
      ready: "60000₮",
      not_ready: "60000₮",
      total_payment: "60000₮",
      crane_fee: "60000₮",
      road_use: "60000₮",
      save_goods: "60000₮",
      train_clean: "60000₮",
      train_use: "60000₮",
      tltrain_use: "60000₮",
      customs_inspection: "60000₮",
      car_entrance: "60000₮",
    },
    // (repeat for each row shown in the image)
  ];

  return (
    <PageCard xR>
      <div className="px-2 pb-0">
        <InitTableHeader
          customHeaderTitle={<Label title="Э/Х орлогын тайлан" />}
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

      <ITable<TicketReportType>
        total={data.length}
        loading={false}
        dataSource={data as any}
        refresh={() => {}}
        hideEditButton={() => true}
        form={filter}
        setForm={setFilter}
        columns={[
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
          {
            dataIndex: "type",
            title: "Төрөл",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "receipt_number",
            title: "Баримт дугаар",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "date",
            title: "Огноо",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "all_payed",
            title: "Нийт төлсөн",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "ready",
            title: "Бэлнээр",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "not_ready",
            title: "Бэлэн бусаар",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "total_payment",
            title: "Нийт төлбөр",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "crane_fee",
            title: "Краны хөлс",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "road_use",
            title: "Зам ашиглалт",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "save_goods",
            title: "Ачаа хадагламж",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "train_clean",
            title: "Чингэлэг вагон цэвэрлэгээ",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "train_use",
            title: "Вагон ашиглалт",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "tltrain_use",
            title: "TL Вагон ашиглалт",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "customs_inspection",
            title: "Гаалийн үзлэг",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "car_entrance",
            title: "Машин оролт",
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
      />
    </PageCard>
  );
};

export default TicketReport;
