import { useEffect, useState } from "react";
import { PageCard } from "components/card";
import { ITable } from "components/index";
import { Label } from "components/label";
import InitTableHeader from "components/table-header";
import { initPagination } from "utils/index";
import { UpdateCargoApproach } from "./actions/update";
import { CreateCargoApproach } from "./actions/create";
import fieldRegistration from "service/feild_registration";
import { CargoApproachList } from "service/feild_registration/type";

const CargoApproach = () => {
  const [filter, setFilter] = useState({ ...initPagination, pageSize: 10 });
  const [create, setCreate] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<CargoApproachList[]>([]);
  const [total, setTotal] = useState<number>(0);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fieldRegistration.list({
        ...filter,
        search,
      });
      setData(response.data.items || []);
      setTotal(response.data.total || 0);
    } catch (error) {
      console.error("Error fetching cargo approach data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [filter, search]);

  const refresh = () => {
    fetchData();
  };

  return (
    <PageCard>
      <div className="px-2 pb-0">
        <InitTableHeader
          addButtonName="Шинэ"
          customHeaderTitle={<Label title="Чингэлэг" />}
          searchPlaceHolder="Хайх чингэлэгийн дугаар оруулна уу"
          fileName="Ачаа чингэлэг тээврийн бүртгэл"
          setCreate={setCreate}
          search={search}
          hideDownload={true}
          setSearch={(e) => setSearch(e)}
          refresh={refresh}
        />
      </div>

      <ITable
        total={total}
        loading={loading}
        dataSource={data}
        refresh={refresh}
        form={filter}
        UpdateComponent={UpdateCargoApproach}
        CreateComponent={CreateCargoApproach}
        setForm={setFilter}
        columns={[
          {
            dataIndex: "approach_report_date",
            title: "Дөхөлт огноо",
            align: "left",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value && (typeof value === 'string' || typeof value === 'number') ? new Date(value).toLocaleDateString() : "-"}
              </span>
            ),
          },
          {
            dataIndex: "direction",
            title: "Орох хил",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "transport_direction",
            title: "Ирэх/явах",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "container_code",
            title: "Чингэлэг дугаар",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "capacity",
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
            dataIndex: ["container_cargo", "cargo_name"],
            title: "Хоосон/Ачаатай",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value ? "Ачаатай" : "Хоосон"}
              </span>
            ),
          },
          {
            dataIndex: "for_sale",
            title: "Зарах эсэх",
            width: "200",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value ? "Тийм" : "Үгүй"}
              </span>
            ),
          },
          {
            dataIndex: ["transport_recieve", "transport_fee"],
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
        RemoveModelConfig={{
          action: fieldRegistration.deleteRegistration,
          config: (record) => ({
            display: record?.container_code,
          }),
        }}
      />
    </PageCard>
  );
};

export default CargoApproach;
