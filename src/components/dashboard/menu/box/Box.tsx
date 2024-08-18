import { FunctionComponent, useState } from "react";
import DownIcon from "../../../../assets/photos/icons/DownIcon.svg";
import Item from "./item/Item";
interface Props {
  data: MenuData;
}
interface MenuChild {
  id: number;
  title: string;
  icon: string;
}
interface MenuData {
  id: number;
  title: string;
  children: Array<MenuChild>;
}
const Box: FunctionComponent<Props> = ({ data }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <div>
      <div className="p-2 font-semibold flex justify-between  flex-row-reverse ">
        <p className="text-lg">{data.title}</p>
        <img
          className="h-8 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          src={DownIcon}
          alt=""
        />
      </div>
      <div className={`   `}>
        {data.children.map((el) => (
          <Item data={el} />
        ))}
      </div>
    </div>
  );
};

export default Box;
