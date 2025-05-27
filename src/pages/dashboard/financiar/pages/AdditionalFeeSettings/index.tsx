import { useDebounceFn, useRequest } from "ahooks";
import { notification } from "antd";
import { PageCard } from "components/card";
import { ITable } from "components/index";
import { Label } from "components/label";
import InitTableHeader from "components/table-header";
import { useEffect, useState } from "react";
import { initPagination } from "utils/index";
import { CreateService } from "./actions/create";
import { UpdateService } from "./actions/update";
import additionalFee from "service/fininaciar/additionalFee";
import { AdditionalFeeType } from "service/fininaciar/additionalFee/type";

const AdditionalFeeSettings = () => {
  const [filter, setFilter] = useState(initPagination);
  const [create, setCreate] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const data = [
    {
      class_name: "10",
      fees_code: "1001",
      fees_name: "краны хелс - 40Тн-ын чингэлэг Ачаатай",
      unit_measurement: "1чингэлэг",
      fees_amount: "60000",
    },
    {
      class_name: "10",
      fees_code: "1002",
      fees_name: "краны хелс - 20Тн-ын чингэлэг Ачаатай",
      unit_measurement: "1ш",
      fees_amount: "60000",
    },
    {
      class_name: "10",
      fees_code: "1003",
      fees_name: "Гаалийн үзлэгт оруулах - 40Тн чингэлэг",
      unit_measurement: "хагас задрагаа",
      fees_amount: "60000",
    },
    // Repeat similar objects for other rows in the screenshot.
  ];

  return (
    <PageCard xR>
      <div className="px-2 pb-0">
        <InitTableHeader
          addButtonName="Нэмэх"
          customHeaderTitle={<Label title="Нэмэлт хураамж тохиргоо" />}
          searchPlaceHolder="Хайх чиглэлийн дугаар оруулна уу"
          fileName="Нэмэлт хураамж тохиргоо"
          setCreate={setCreate}
          search={search}
          setSearch={(e) => setSearch(e)}
          refresh={() => {}}
        />
      </div>

      <ITable<AdditionalFeeType>
        total={data.length}
        loading={false}
        dataSource={data as any}
        refresh={() => {}}
        DetailComponent={UpdateService}
        UpdateComponent={UpdateService}
        form={filter}
        setForm={setFilter}
        columns={[
          {
            dataIndex: "class_name",
            title: "Ангилал код",
            align: "left",
            render: (value) => (
              <span className="text-sm text-[#475467] font-normal flex text-center">
                {value || "-"}
              </span>
            ),
          },
          {
            dataIndex: "fees_code",
            title: "Хураамжийн код",
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
            dataIndex: "unit_measurement",
            title: "Хэмжих нэгж",
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
        ]}
        CreateComponent={CreateService}
        create={create as boolean}
        setCreate={setCreate}
        RemoveModelConfig={{
          action: additionalFee.deleteA, // Delete function from the customerCompany service
          config: (record) => ({
            uniqueKey: record?.id, // Unique identifier for the record to be deleted
            display: record?.name, // Display the company name for confirmation
            title: "Remove Company", // Title of the deletion confirmation modal
          }),
        }}
      />
    </PageCard>
  );
};

export default AdditionalFeeSettings;

//   const list = useRequest(additionalFee.list, {
//     manual: true,
//     onError: (err) =>
//       notification.error({
//         message: err.message,
//       }),
//   });

//   const run = () => {
//     list.run({
//       ...filter,
//       search: search,
//     });
//   };

//   useEffect(() => {
//     run();
//   }, [filter]);

//   const searchRun = useDebounceFn(list.run, { wait: 1000 });

//   return (
//     <PageCard xR>
//       <div className="px-2 pb-0">
//         <InitTableHeader
//           addButtonName="Нэмэх"
//           customHeaderTitle={<Label title="Нэмэлт хураамж тохиргоо" />}
//           searchPlaceHolder="Хайх чиглэлийн дугаар оруулна уу"
//           fileName="Нэмэлт хураамж тохиргоо"
//           setCreate={setCreate}
//           search={search}
//           setSearch={(e) => {
//             setSearch(e);
//             searchRun.run({ ...filter, search: e });
//           }}
//           refresh={() => list.run({ ...filter, search: search })}
//         />
//       </div>

//       <ITable<AdditionalFeeType>
//         total={list.data?.total}
//         loading={list.loading}
//         dataSource={list?.data?.items ?? []}
//         refresh={(values) => list.run({ ...filter, ...values })}
//         UpdateComponent={UpdateService}
//         form={filter}
//         setForm={setFilter}
//         columns={[
//           {
//             dataIndex: "class_name",
//             title: "Ангилал код",
//             align: "left",
//             render: (value) => (
//               <span className="text-sm text-[#475467] font-normal flex text-center">
//                 {value || "-"}
//               </span>
//             ),
//           },
//           {
//             dataIndex: "fees_code",
//             title: "Хураамжийн код",
//             width: "200",
//             render: (value) => (
//               <span className="text-sm text-[#475467] font-normal flex text-center">
//                 {value || "-"}
//               </span>
//             ),
//           },
//           {
//             dataIndex: "fees_name",
//             title: "Хураамжийн нэр",
//             width: "200",
//             render: (value) => (
//               <span className="text-sm text-[#475467] font-normal flex text-center">
//                 {value || "-"}
//               </span>
//             ),
//           },
//           {
//             dataIndex: "unit_measurement",
//             title: "Хэмжих нэгж",
//             width: "200",
//             render: (value) => (
//               <span className="text-sm text-[#475467] font-normal flex text-center">
//                 {value || "-"}
//               </span>
//             ),
//           },
//           {
//             dataIndex: "fees_amount",
//             title: "Хураамжийн дүн",
//             width: "200",
//             render: (value) => (
//               <span className="text-sm text-[#475467] font-normal flex text-center">
//                 {value || "-"}
//               </span>
//             ),
//           },
//         ]}
//         CreateComponent={CreateService}
//         create={create as boolean}
//         setCreate={setCreate}
//         // RemoveModelConfig={{
//         //   action: customerCompany.deleteA,
//         //   config: (record) => ({
//         //     uniqueKey: record?.id,
//         //     display: record?.name,
//         //     title: "Remove",
//         //   }),
//         // }}
//       />
//     </PageCard>
//   );
// };

// export default AdditionalFeeSettings;
