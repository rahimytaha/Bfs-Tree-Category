import { FunctionComponent, useState } from "react";
import ListMenu from "../../../commen/listMenu/ListMenu";
import UseGetAllData from "../../../../service/hooks/allData/useGetAllData";
import Creator from "./Creator";
import LineIcon from "../../../../assets/photos/icons/LineIcon.svg";
import { useDispatch, useSelector } from "react-redux";
import { handleEditSelectCat } from "../../../../service/core/redux/SelectCat";
interface IItemProps {
  title: string;
  isRoot: boolean;
  level: number;
  isActive: boolean;
  id: number;
  parentId: number | null;
}

const Item: FunctionComponent<IItemProps> = ({
  title,
  id,
  isRoot,
  level,
  parentId,
  isActive,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const data = UseGetAllData("", id);
  const menuData = useSelector((el: any) => el.Menu);
  const dispatch = useDispatch();
  const catSelected: number[] = useSelector((el: any) => el.SelectCat).data;
  function onSelect(state: boolean) {
    if (state) {
      dispatch(
        handleEditSelectCat({
          data: [...catSelected, id],
        })
      );
    } else {
      const newSelect = catSelected.filter((el: any) => el != id);
      dispatch(
        handleEditSelectCat({
          data: newSelect,
        })
      );
    }
  }
  return (
    <div className={parentId != null ? "mr-14 relative " : "relative"}>
      <div
        className={`${isRoot ? "bg-[#E1EDF3]" : "bg-[#e5ecf0cc] "}
          ${
            menuData.id == id && menuData.isOpen
              ? "border-[#7AB5B6] "
              : " border-transparent"
          } border-2  font-semibold items-center p-2 mt-5 flex-row-reverse   py-3 text-lg  flex justify-between  rounded-2xl `}
      >
        {parentId != null ? (
          <img
            src={LineIcon}
            className="absolute bg -black/50 top-[-35px] right-[-55px] "
            alt=""
          />
        ) : (
          ""
        )}
        <div className="flex items-center  flex-row-reverse gap-2 ">
          {/* <input type="checkbox" name="" id="" /> */}
          <input
            type="checkbox"
            checked={
              catSelected.find((el: number) => el == id) != undefined && true
            }
            onChange={(e) => onSelect(e.target.checked)}
            className="w-4 h-4 opacity-50   m bg-gray-100 border-gray-300 rounded focus:ring-transparent dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
          ></input>
          <p>{title}</p>
        </div>

        <ListMenu
          isActive={isActive}
          noDown={data.data?.length != 0 ? false : true}
          onOpen={() => setIsOpen(!isOpen)}
          isLevel={level != 5 ? true : false}
          CategoryId={id}
          parentId={parentId}
        />
      </div>
      {isOpen && <Creator dataList={data?.data} />}
    </div>
  );
};

export default Item;
