import { Field } from "formik";
import { FunctionComponent } from "react";

interface IItemInputProps {
  name: string;
  text: string;
  style: string;
  placeHolder: string;
}

const ItemInput: FunctionComponent<IItemInputProps> = ({
  name,
  placeHolder,
  text,
}) => {
  return (
    <div className="font-semibold ">
      <p className="text-right my-4">{text}</p>
      <Field
        className="w-full  rounded-xl outline-none border border-[#47758E] h-12 p-3 text-right "
        placeHolder={placeHolder}
        name={name}
      />
    </div>
  );
};

export default ItemInput;
