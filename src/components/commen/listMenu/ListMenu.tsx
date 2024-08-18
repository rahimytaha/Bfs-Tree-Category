import { FunctionComponent } from "react";
import { useState } from "react";
import plusIcon from "../../../assets/photos/icons/plusIcon.svg";
import flashIcon from "../../../assets/photos/icons/flashIcon.svg";
import flasOpenhIcon from "../../../assets/photos/icons/flashOpenIcon.svg";
import MenuBox from "./MenuBox";
import { useDispatch } from "react-redux";
import { handleEditMenu } from "../../../service/core/redux/Menu";
interface IListMenuProps {
  CategoryId: number;
  noDown: boolean;
  isLevel: boolean;
  onOpen: any;
  isActive: boolean;
  parentId: number | null;
}

const ListMenu: FunctionComponent<IListMenuProps> = ({
  CategoryId,
  onOpen,
  noDown,
  isLevel,
  parentId,
  isActive,
}) => {
  const [isMenu, setIsMenu] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  function onMenu() {
    dispatch(handleEditMenu({ id: CategoryId, isOpen: isMenu }));
  }

  return (
    <div className="flex relative gap-1 ">
      {!noDown && (
        <img
          className="h-8 cursor-pointer"
          src={isOpen ? flashIcon : flasOpenhIcon}
          onClick={() => {
            onOpen();
            setIsOpen(!isOpen);
          }}
          alt=""
        />
      )}
      <img
        className="h-8 cursor-pointer"
        onClick={() => {
          setIsMenu(!isMenu);
          onMenu();
        }}
        src={plusIcon}
        alt=""
      />
      <MenuBox
        isLevel={isLevel}
        isActive={isActive}
        parentId={parentId}
        id={CategoryId}
      />
    </div>
  );
};

export default ListMenu;
