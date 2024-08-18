import { FunctionComponent } from "react";

interface IItemProps {
  title: string;
  color: string;
  onclick:Function

}

const Item: FunctionComponent<IItemProps> = ({ title, color,onclick }) => {
  return (
    <button onClick={()=>onclick()} className={`block p-2 bg- ${color} w-44 py-3 opacity-80 hover:opacity-100 duration-200 text-white  -600/60  rounded-xl hover:text-white/80 font-semibold`}>
      {title}
      
    </button>
  );
};

export default Item;
