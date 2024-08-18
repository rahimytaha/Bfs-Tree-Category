import { FunctionComponent, useEffect, useState } from "react";

import TurnIcon from "../../../assets/photos/icons/TurnIcon.svg";
import { Formik, Form, Field } from "formik";
import { NavLink, useParams } from "react-router-dom";
import ItemInput from "../../commen/itemInput/ItemInput";
import UseGetById from "../../../service/hooks/repair/UseGetById";
import UseUpdate from "../../../service/hooks/repair/UseUpdate";
import UseGetAllData from "../../../service/hooks/allData/useGetAllData";
type Status = "error" | "success" | "pending";
interface Response {
  status: Status;
  data: Data;
}
interface Data {
  value: Value;
  isSuccess: boolean;
  isFailure: boolean;
  error: any;
  pageIndex: any;
  pageSize: any;
}

interface Value {
  id: number;
  title: string;
  code: string;
  isActive: boolean;
  hasChild: boolean;
  parent: any;
}
interface FormData {
  catCode: string;
  parentId: number;
  catTitle: string;
}
interface Item {
  id: number;
  hasChild: boolean;
  title: string;
  level: number;
  code: string;
  isActive: boolean;
}

interface ResponseCategory {
  data :Item[] |undefined
  fetchNextPage:any
  isSuccess:boolean
}
type paramsId = string | undefined;
type paramsParentId = string | undefined;
const CategoryRepair: FunctionComponent = () => {
  const params: paramsId = useParams().id;
  const parentId: paramsParentId = useParams().parentId;

  // console.log(data.value.code);
  const { mutate } = UseUpdate();
  const categorys: ResponseCategory = UseGetAllData("", null);
  const [id, setId] = useState<number>(0);
  useEffect(() => {
    setId(parseInt(params ? params : ""));
    console.log(parseInt(params ? params : ""), id);
  }, [params]);
  const { data, status }: Response = UseGetById(id.toString());
  function onSubmit(data: FormData) {
    mutate({
      id: id,
      title: data.catTitle,
      code: data.catCode,
      parentId: data.parentId,
    });
  }
  return (
    <div className="w-6/12 h-full ">
      <h1 className="text-white text-xl text-right  my-5 ">
        ثبت یا ویرایش دسته بندی ها
      </h1>
      <div className="h-full 80  px-20  p-8 w-full  text-[#2D5981]    bg-slate-100  rounded-3xl     ">
        <div className="text-center flex justify-around flex-row-reverse ">
          <h2 className="w-full text-xl">ویرایش دسته بندی</h2>
          <button className="">
            <img className="h-14 " src={TurnIcon} alt="" />
          </button>
        </div>
        <div>
          {status == "success" && (
            <Formik
              initialValues={{
                parentId: parseInt(parentId ? parentId : "0"),
                catCode: data?.value?.code,
                catTitle: data?.value?.title,
              }}
              onSubmit={(data) => onSubmit(data)}
            >
              <Form>
                {parentId == "null" && (
                  <div className="font-semibold ">
                    <p className="text-right my-3">*انتخاب دسته بندی بالایی</p>
                    <Field
                      name="parentId"
                      className="w-full  rounded-xl outline-none border border-[#47758E] h-10 p-2 text-right "
                      as="select"
                    >
                      {categorys?.data?.map((el) => (
                        <option value={el.id}>{el.title}</option>
                      ))}
                    </Field>
                  </div>
                )}

                <ItemInput
                  style=""
                  placeHolder="عنوان دسته بندی را وارد کنید"
                  name="catTitle"
                  text="*عنوان دسته بندی"
                />
                <ItemInput
                  style=""
                  placeHolder="کد دسته بندی را وارد کنید"
                  name="catCode"
                  text="*کد دسته بندی "
                />
                <button
                  type="submit"
                  className="p-3 text-center text-white bg-gradient-to-r to-[#7BB7B8] from-[#619B9C] rounded-xl w-full mt-5 "
                >
                  ثبت ویرایش کالا
                </button>
                <NavLink
                  to={`/`}
                  className="p-3 block  text-center text-[#619B9C] border-2 font-semibold hover:bg-[#619B9C]/50 duration-300 hover:text-white   border-[#619B9C] rounded-xl w-full mt-5 "
                >
                  انصراف
                </NavLink>
              </Form>
            </Formik>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryRepair;
