"use client";

import { useContext } from "react";
import { BsHandbagFill } from "react-icons/bs";

import { CartContext } from "@/context/cart-context";

export const CartMobileButton = () => {
  const context = useContext(CartContext);

  if (!context)
    throw new Error("CartContext must be used within a CartProvider");

  const { isOpen, setIsOpen, totalAmount } = context;

  return (
    <button
      type="button"
      aria-label="Open cart"
      onClick={() => setIsOpen(!isOpen)}
      className="fixed lg:hidden z-20 right-[10vw] bottom-[5vh] flex items-center justify-center w-[72px] h-[72px] rounded-full cursor-pointer bg-tertiary text-white"
    >
      <BsHandbagFill size={36} />
      <span className="absolute bottom-3 right-4 text-white gradient size-5 rounded-full flex items-center justify-center font-tertiary text-xs">
        {totalAmount}
      </span>
    </button>
  );
};
