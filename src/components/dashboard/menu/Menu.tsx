
import { FunctionComponent } from "react";
import SatekIcon from "../../../assets/photos/icons/SatekIcon.svg";
import Box from "./box/Box";
interface MenuData {
  id: number;
  title: string;
  children: Array<MenuChild>;
}
interface MenuChild {
  id: number;
  title: string;
  icon: string;
}

const Menu:FunctionComponent=()=> {
  const menuData: Array<MenuData> = [
    {
      id: 1,
      title: "اطلاعات پایه",
      children: [
        { id: 1, title: "پیمانکار", icon: SatekIcon },
        { id: 1, title: "پیمانکار", icon: SatekIcon },
        { id: 1, title: "پیمانکار", icon: SatekIcon },
      ],
    },
    {
      id: 1,
      title: "اطلاعات پایه",
      children: [
        { id: 1, title: "پیمانکار", icon: SatekIcon },
        { id: 1, title: "پیمانکار", icon: SatekIcon },
        { id: 1, title: "پیمانکار", icon: SatekIcon },
      ],
    },
  ];
  return (
    <div className="w-96 text-right   p-3 px-4  bg-slate-100 text-[#2D5981]  rounded-[30px]  -500 ">
      <div className="flex gap-3 border-b-2 border-[#3F5882]  font-medium  flex-row-reverse text-right pb-14   ">
        <img className="h-16" src={SatekIcon} />
        <div className="mt-1">
          <h1 className="text-2xl font-semibold ">ساتک</h1>
          <h3 className="text-base  ">سیستم انبارداری</h3>
        </div>
      </div>
      {menuData.map((el) => (
        <Box data={el} />
      ))}
    </div>
  );
}

export default Menu;
