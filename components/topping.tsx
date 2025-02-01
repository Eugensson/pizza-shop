"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { IoMdCheckmark } from "react-icons/io";

import { AdditionalToppingType, ToppingType } from "@/types";

interface ToppingProps {
  topping: ToppingType;
  additionalTopping: AdditionalToppingType;
  setAdditionalTopping: React.Dispatch<
    React.SetStateAction<AdditionalToppingType>
  >;
}

export const Topping = ({
  topping,
  additionalTopping,
  setAdditionalTopping,
}: ToppingProps) => {
  const isChecked = additionalTopping.some((t) => t.name === topping.name);

  const handleCheckboxChange = () => {
    setAdditionalTopping((prev) =>
      isChecked
        ? prev.filter((t) => t.name !== topping.name)
        : [...prev, topping]
    );
  };

  return (
    <div
      className={twMerge(
        "relative w-full max-w-[110px] h-[140px] p-1 flex flex-col items-center justify-center border rounded-md bg-white cursor-pointer transition",
        isChecked ? "border-orange" : "border-gray-300 hover:border-gray-400"
      )}
      onClick={handleCheckboxChange}
    >
      <Image
        src={topping.image}
        alt={`${topping.name} pizza topping`}
        width={70}
        height={70}
        className="object-cover aspect-square"
      />
      <p className="text-sm font-medium capitalize text-center">
        {topping.name}
      </p>
      <input
        type="checkbox"
        name={topping.name}
        id={topping.name}
        checked={isChecked}
        readOnly
        className="absolute w-full h-full opacity-0 cursor-pointer"
      />
      {isChecked && (
        <div className="absolute top-1 right-1 opacity-100">
          <IoMdCheckmark className="text-xl text-orange" />
        </div>
      )}
    </div>
  );
};
