import { FunctionComponent } from "react";
import Heeader from "../dashboard/header/Heeader";
import { Outlet } from "react-router";
import CategoryList from "../dashboard/categoryList/CategoryList";
import Menu from "../dashboard/menu/Menu";

const DashboardMainLayout: FunctionComponent = () => {
  return (
    <div className="mr- gap-10 mr-5 flex  96 ml-10 mt-5 ">
      <div className="w-10/12">
        <div>
          <Heeader />
        </div>

        <div className="flex h-[650px]  gap-20 px-16   ">
          <Outlet />
          <CategoryList />
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default DashboardMainLayout;
