import { FunctionComponent } from "react";

interface MenuChild {
  id: number;
  title: string;
  icon: string;
}
interface Props{
  data:MenuChild
}

const Item:FunctionComponent<Props>=({ data }) =>{
  return (
    <div className="flex my-3  justify-start  gap-2  flex-row-reverse  ">
      <img src={data.icon} alt="" />
      <p className="text-lg font-semibold ">{data.title}</p>
    </div>
  );
}

export default Item;
