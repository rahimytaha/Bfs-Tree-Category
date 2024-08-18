import {FC}from 'react';
import loadingImg from "../../../assets/photos/background/loading.svg"

const Loading: FC = () => {
  return (
   <div className="w-6/12 b g-black  h-full ">
      <h1 className="text-white text-xl text-right  my-5 "> ثبت یا ویرایش دسته بندی ها
      </h1>
      <div className="h-full p-8 justify-center  w-full flex items-center   text-[#2D5981]    bg-slate-100  rounded-3xl     ">
        <div className='bg-b lue-950 '>
             <img src={loadingImg} alt="" />
             <p>برای ویرایش و یا افزودن بر روی دکمه + کلیک کنید.</p>
        </div>
      </div>
    </div>
 
  );
};

export default Loading;
