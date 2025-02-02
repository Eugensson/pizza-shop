import { BsHandbagFill } from "react-icons/bs";

export const CartMobile = () => {
  return (
    <div className="fixed lg:hidden z-20 right-[10vw] bottom-[5vh] flex items-center justify-center w-[72px] h-[72px] rounded-full cursor-pointer bg-tertiary text-white">
      <BsHandbagFill size={36} />
      <span className="absolute bottom-3 right-4 text-white gradient size-5 rounded-full flex items-center justify-center font-tertiary text-xs">
        5
      </span>
    </div>
  );
};
