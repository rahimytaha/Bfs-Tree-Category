import {  FunctionComponent, useState } from "react";

import UseGetAllData from "../../../service/hooks/allData/useGetAllData";
import Tree from "./Tree";
import loadingImg from "../../../assets/photos/background/loading.svg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ToolBox from "./toolBox/ToolBox";

interface Item {
  id: number;
  level: number;
  title: string;
  code: string;
  hasChild: boolean;
  parentId: number | null;
  isRoot: boolean;
  isActive: boolean;
}

interface Response {
  data: Item[] | undefined;
  fetchNextPage: any;
  isSuccess: boolean;
}
const CategoryList: FunctionComponent = () => {
  const [query, setQuery] = useState<string>("");
  const { data, isSuccess, fetchNextPage }: Response = UseGetAllData(
    query,
    null
  );
  const selectedCat: number[] = useSelector((e: any) => e.SelectCat).data;
  return (
    <div className="w-6/12 ">
      <h1 className="text-white text-xl text-right  my-5 ">
        فهرست دسته بندی کالا
      </h1>
      <div className="h-full   80 p-8 w-full  text-[#2D5981]    bg-slate-50  rounded-3xl     ">
        {selectedCat.length > 1 ? (
          <ToolBox data={selectedCat} />
        ) : (
          <input
            type="text"
            className="bg-slate-200 w-full p-2 py-3 rounded-lg  outline-none  text-right "
            placeholder="جستجو بر اساس کد و عنوان دسته بندی"
            onChange={(e) => setQuery(e.target.value)}
          />
        )}

        {!isSuccess || !data ? (
          <div className="bg-b h-full flex justify-center items-center  lue-950 ">
            <div className="w-full mb-5  ">
              <img className="mx-auto " src={loadingImg} alt="" />
              <NavLink
                to={"/addCategory/null"}
                className="p-3 w-8/12 mx-auto   block   text-center text-white bg-gradient-to-r to-[#7BB7B8] from-[#619B9C] rounded-xl w-f ull mt-5 "
              >
                ثبت دسته بندی جدید
              </NavLink>
            </div>
          </div>
        ) : (
          <div className="h-full">
            <div className="overflow-auto h-5/6">
              <Tree dataList={data} />
            </div>
            <button
              onClick={fetchNextPage}
              className="p-3 w-full opacity-70 hover:opacity-100 duration-200 mx-auto   block   text-center text-white bg-gradient-to-r to-[#7BB7B8] from-[#619B9C] rounded-xl w-f ull mt-5 "
            >
              مشاهده بیشتر
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryList;
