import { FunctionComponent } from "react";
import LeftFlashIcon from "../../../assets/photos/icons/LeftFlashIcon.svg";
import DownFlashIcon from "../../../assets/photos/icons/DownFlashIcon.svg";
import RepairIcon from "../../../assets/photos/icons/RepairIcon.svg";
import DeleteIcon from "../../../assets/photos/icons/DeleteIcon.svg";
import TurnIcon from "../../../assets/photos/icons/TurnIcon.svg";
import { useNavigate } from "react-router-dom";
import UseDelete from "../../../service/hooks/delete/UseDelete";
import { useSelector } from "react-redux";
import UseActiveCat from "../../../service/hooks/active/UseActiveCat";
interface IMenuBoxProps {
  id: number;
  isActive: boolean;
  isLevel: boolean;
  parentId: number | null;
}

const MenuBox: FunctionComponent<IMenuBoxProps> = ({
  id,
  isLevel,
  parentId,
  isActive,
}) => {
  const navigate = useNavigate();
  const { mutate } = UseDelete();
  const data = [
    {
      id: 1,
      title: "افزودن به سطح جاری",
      icon: LeftFlashIcon,
      navigate: () => navigate(`/addCategory/${parentId}`),
    },

    {
      id: 3,
      title: "ویرایش",
      icon: RepairIcon,
      navigate: () => navigate(`/repair/${id}/${parentId}`),
    },
    {
      id: 4,
      title: "حذف",
      icon: DeleteIcon,
      navigate: () => mutate(id),
    },
  ];
  const menuData = useSelector((item:any) => item.Menu);
  const { activeMutate } = UseActiveCat();
  function onActive() {
    activeMutate({
      id: id,
      active: !isActive,
    });
  }
  return menuData.isOpen && menuData.id == id ? (
    <div className="absolute left-20 top-[-30px] hb -3 2 w-52 bg-slate-200 z-30 shadow-lg rounded-lg p-3  ">
      {isLevel && (
        <div
          onClick={() => navigate(`/addCategory/${id}`)}
          className="flex py-2 border- b z-50 border-b border-[#3F5882]/30    flex-row-reverse items-center text-base gap-2 "
        >
          <img className="h-5" src={DownFlashIcon} alt="" />
          <p>افزودن به سطح زیرین</p>
        </div>
      )}
      {data.map((el) => (
        <div
          onClick={el.navigate}
          className="flex py-2 border- b z-50 border-b border-[#3F5882]/30    flex-row-reverse items-center text-base gap-2 "
        >
          <img className="h-5" src={el.icon} alt="" />
          <p>{el.title}</p>
        </div>
      ))}
      <img
        className={`m-auto h-9 mt-2 cursor-pointer ${
          !isActive && "opacity-50"
        }`}
        onClick={onActive}
        src={TurnIcon}
        alt=""
      />
    </div>
  ) : null;
};

export default MenuBox;
