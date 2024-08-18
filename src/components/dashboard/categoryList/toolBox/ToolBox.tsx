import { FunctionComponent } from "react";
import Item from "./Item";
import { useDispatch } from "react-redux";
import { handleEditSelectCat } from "../../../../service/core/redux/SelectCat";
import UseActiveGroupCat from "../../../../service/hooks/active/UseActiveGroupCat";
import UseDeActiveGroupCat from "../../../../service/hooks/active/UseDeActiveGroupCat";
interface IToolBoxProps {
  data: number[];
}

const ToolBox: FunctionComponent<IToolBoxProps> = ({ data }) => {
  const dispatch = useDispatch();
  const { activeMutate } = UseActiveGroupCat();
  const { deActiveMutate } = UseDeActiveGroupCat();
  function onCancel() {
    dispatch(handleEditSelectCat({ data: [] }));
  }
  function onActive() {
    activeMutate(data);
    onCancel();
  }
  function onDeActive() {
    deActiveMutate(data);
    onCancel();
  }

  return (
    <div className="flex justify-between ">
      <Item color="bg-green-500" onclick={onActive} title="فعال سازی همه" />
      <Item color="bg-red-500" onclick={onDeActive} title="غیر فعال سازی همه" />
      <Item color="bg-blue-500" onclick={() => onCancel()} title="انصراف" />
    </div>
  );
};

export default ToolBox;
