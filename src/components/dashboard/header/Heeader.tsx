
import NotifIcon from "../../../assets/photos/icons/NotifIcon.svg";
import MenuIcon from "../../../assets/photos/icons/MenuIcon.svg";
import { FunctionComponent } from "react";

const Heeader:FunctionComponent=()=> {
  return (
    <div className="text-white  items-center  border border-white/10   text-2xl font-bold flex justify-between  bg-gradient-to-r from-[#FFFFFF]/40 via-[#FFFFFF]/0 to-[#FFFFFF]/20 p-5  rounded-[30px]">
      <div className="flex items-center gap-5 ">
        <div className="p- 4 bg-white/20 rounded-full ">
          <img className="m-4 h-6 w-6  " src={NotifIcon} alt="" />
        </div>
        <div className="   bg-white/20 rounded-full ">
          <img className="m -4   m-4 h-6 w-6 " src={MenuIcon} alt="" />
        </div>
        <div className="bg-white/10 p-2 rounded-full px-6  ">
          <p className="text-lg ">طاها رحیمی</p>
        </div>
      </div>
      <div>
        <p>اطلاعات پایه دسته بندی کالا</p>
      </div>
    </div>
  );
}

export default Heeader;
