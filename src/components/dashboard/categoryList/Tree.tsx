import { FunctionComponent } from "react";
import Creator from "./tree/Creator";

interface ITreeProps {
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

const Tree: FunctionComponent<ITreeProps> = ({ dataList }) => {
  // const DataList:Data[] =[{id:1,parentId:0,children:[{id:2,parentId:1,children:[]},{id:3,parentId:1,children:[]}]}];

  return (
    <>
      <Creator dataList={dataList} />{" "}
    </>
  );
};

export default Tree;
