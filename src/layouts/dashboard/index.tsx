import { AuthContext } from 'context/auth';
import { FC, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import WorkerLayout from "./layout";

type Props = {
  children?: any;
  props?: any;
};
const DashboardLayout: FC<Props> = ({}) => {
  const [{ authorized, user }] = useContext(AuthContext);
  if (!authorized) return <Navigate to={"/auth/login"} />;
  return (
    <div id="pro-layout">
      <WorkerLayout>
        <Outlet />
      </WorkerLayout>
    </div>
  );
};

export default DashboardLayout;
