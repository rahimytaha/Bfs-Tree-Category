import { createBrowserRouter } from "react-router-dom";
import DashboardMain from "../pages/dashboardMainPage/DashboardMainPage";
import DashboardRepairPage from "../pages/dashboardRepairPage/DashboardRepairPage";
import DashboardAddCategoryPage from "../pages/dashboardAddCategoryPage/DashboardAddCategoryPage";
import DashboardLoadingPage from "../pages/dashboardLoadingPage/DashboardLoadingPage";

const RouteList = createBrowserRouter([
  {
    path: "/",
    element: <DashboardMain />,
    children: [
      {path:"/",element:<DashboardLoadingPage/>},
      { path: "/repair/:id/:parentId", element: <DashboardRepairPage /> },
      {path:"/addCategory/:id",element:<DashboardAddCategoryPage/>}
    ],
  },
]);

export default RouteList;
