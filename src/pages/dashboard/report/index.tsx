// // const Dashboard: React.FC = () => {
// //   return <div>Dashboard page is here</div>;
// // };

// // export default Dashboard;

import { ProFormRadio } from "@ant-design/pro-form";
import { IfCondition } from "components/condition";
import { TicketReporttButton, TicketTabButton } from "config";
import { useState } from "react";
import TicketReport from "./pages/TicketReport";

export const Report: React.FC<any> = ({ data }) => {
  const [tab, setTab] = useState<any>(TicketTabButton.TicketReport);

  const DocumentButtons: TicketReporttButton[] = [
    {
      value: TicketTabButton.TicketReport,
      label: "Э/Х орлогын тайлан",
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
          initialValue={TicketTabButton.TicketReport}
        />
      </div>
      <IfCondition
        condition={tab === TicketTabButton.TicketReport}
        whenTrue={<TicketReport />}
      />
    </>
  );
};
