import { AuthContext } from "context/auth";
import { EmployeRegistration } from "pages/dashboard/employ-registration";
import { Fininciar } from "pages/dashboard/financiar";
import { Field_Registration } from "pages/dashboard/field-registration";
import { Report } from "pages/dashboard/report";
import { CustomerAccountSettlement } from "pages/dashboard/financiar/pages/CustomerAccountSettlement";
import { MyFill } from "pages/dashboard/my-fill";
import { MyWallet } from "pages/dashboard/my-wallet";
import { UserRoleType } from "config";
import { useContext } from "react";
import { IRoute } from "./types";

const DashboardRoutes = () => {
  const [user] = useContext(AuthContext);
  let dashboardRoutes: IRoute[] = [];
  if (user.user?.role_name === UserRoleType.admin) {
    dashboardRoutes.push({
      key: "employ-registration",
      path: "employ-registration",
      component: <EmployeRegistration />,
    });
  } else if (user.user?.role_name === UserRoleType.transport_manager) {
    dashboardRoutes.push({
      key: "field-registration",
      path: "field-registration",
      component: <Field_Registration />,
    });
  } else if (user.user?.role_name === UserRoleType.financier) {
    dashboardRoutes.push({
      key: "financiar",
      path: "financiar",
      component: <Fininciar />,
    });
  } else if (user.user?.role_name === UserRoleType.cashier) {
    dashboardRoutes.push(
      {
        key: "field-registration",
        path: "field-registration",
        component: <Field_Registration />,
      },
      {
        key: "report",
        path: "report",
        component: <Report />,
      },
      {
        key: "customer-account-settlement",
        path: "customer-account-settlement",
        component: <CustomerAccountSettlement />,
      }
    );
  } else if (user.user?.role_name === UserRoleType.customer) {
    dashboardRoutes.push(
      {
        key: "my-wallet",
        path: "my-wallet",
        component: <MyWallet />,
      },
      {
        key: "my-fill",
        path: "my-fill",
        component: <MyFill />,
      }
    );
  }
  // dashboardRoutes.push({
  //   key: "field-registration",
  //   path: "field-registration",
  //   component: <Field_Registration />,
  // });
  // dashboardRoutes.push({
  //   key: "financiar",
  //   path: "financiar",
  //   component: <Fininciar />,
  // });
  // dashboardRoutes.push({
  //   key: "report",
  //   path: "report",
  //   component: <Report />,
  // });

  return dashboardRoutes;
};

export default DashboardRoutes;
