import { FunctionComponent } from "react";
// import ListMenu from "../../../commen/listMenu/ListMenu";
import Item from "./Item";
// import ListMenu from "../../../commen/listMenu/ListMenu";
// import ItemSecond from "../itemSecond/ItemSecond";

// interface Item {
//   id: number;
//   title: string;
//   code: string;
//   isActive: boolean;
// }
interface ICreatorProps {
  dataList: Item[] |undefined;

}
interface Item {
  id: number;
  level:number;
  title: string;
  code: string;
  hasChild: boolean;
  parentId:number |null;
  isRoot: boolean;
  isActive: boolean;
}

const Creator: FunctionComponent<ICreatorProps> = ({ dataList }) => {
  return (
    <div>
      {dataList?.map((el) => {
        // console.log(el);
        return (
          <Item isActive={el.isActive} level={el.level} isRoot={el.isRoot} parentId={el.parentId} title={el.title } id={el.id} />
        );
      })}
    </div>
  );
};
export default Creator;
// if (el.children.length >0) {
//           return
//         }
