import { FunctionComponent, useState, useEffect } from "react";

import TurnIcon from "../../../assets/photos/icons/TurnIcon.svg";
import { Field, Formik, Form } from "formik";
import { NavLink, useParams } from "react-router-dom";
import ItemInput from "../../commen/itemInput/ItemInput";
import UseGetAllData from "../../../service/hooks/allData/useGetAllData";
import UseCreateCat from "../../../service/hooks/create/UseCreateCat";
interface Item {
  id: number;
  hasChild: boolean;
  title: string;
  level: number;
  code: string;
  isActive: boolean;
}

type Id = null | string | undefined;
interface FormData {
  title: string;
  code: string;
  parentId: number;
  isActive: boolean;
}
interface Response {
  data: Item[] | any;
  isSuccess: boolean;
  fetchNextPage: any;
}

const CategoryAdd: FunctionComponent = () => {
  const categorys: Response = UseGetAllData("", null);
  const params: Id = useParams().id;

  const { mutate } = UseCreateCat();
  const [id, setId] = useState<number>(0);
  useEffect(() => {
    setId(parseInt(params ? params : ""));
  }, [params]);
  const [isActive, setIsActive] = useState<boolean>(true);

  function onSubmit(data: FormData) {
    // console.log(data,id,parseInt(id?id:"0"))
    mutate({
      title: data.title,
      code: data.code,
      parentId: params == "null" ? data.parentId : id,
      isActive: isActive,
    });
  }

  return (
    <div className="w-6/12 h-full  ">
      <h1 className="text-white text-xl text-right  my-5 ">
        ثبت یا ویرایش دسته بندی ها
      </h1>
      <div className="h-full 80  px-20  p-8 w-full  text-[#2D5981]    bg-slate-100  rounded-3xl     ">
        <div className="text-center flex justify-around flex-row-reverse ">
          <h2 className="w-full text-xl">افزودن دسته بندی</h2>
          <button className="">
            <img
              className={`h-14 ${isActive ? "opacity-100" : " opacity-30"} `}
              onClick={() => setIsActive(!isActive)}
              src={TurnIcon}
              alt=""
            />
          </button>
        </div>
        <div>
          <Formik
            initialValues={{
              parentId: id,
              code: "",
              title: "",
              isActive: true,
            }}
            onSubmit={onSubmit}
          >
            <Form>
              {params == "null" && (
                <div className="font-semibold ">
                  <p className="text-right my-3">*انتخاب دسته بندی بالایی</p>
                  <Field
                    name="parentId"
                    className="w-full  rounded-xl outline-none border border-[#47758E] h-10 p-2 text-right "
                    as="select"
                  >
                    {categorys?.data?.map((el: Item) => (
                      <option value={el.id}>{el.title}</option>
                    ))}
                  </Field>
                </div>
              )}
              <ItemInput
                style=""
                placeHolder="عنوان دسته بندی را وارد کنید"
                name="title"
                text="*عنوان دسته بندی"
              />
              <ItemInput
                style=""
                placeHolder="کد دسته بندی را وارد کنید"
                name="code"
                text="*کد دسته بندی "
              />
              <button
                type="submit"
                className="p-3 text-center text-white bg-gradient-to-r to-[#7BB7B8] from-[#619B9C] rounded-xl w-full mt-5 "
              >
                افزودن دسته بندی
              </button>
              <NavLink to={`/`} className="p-3 block  text-center text-[#619B9C] border-2 font-semibold hover:bg-[#619B9C]/50 duration-300 hover:text-white   border-[#619B9C] rounded-xl w-full mt-5 ">
                انصراف
              </NavLink>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default CategoryAdd;
