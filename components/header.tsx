"use client";

import Image from "next/image";
import { useContext } from "react";

import { Logo } from "@/components/logo";

import { CartContext } from "@/context/cart-context";

export const Header = () => {
  const context = useContext(CartContext);

  if (!context)
    throw new Error("CartContext must be used within a CartProvider");

  const { isOpen, setIsOpen, totalAmount } = context;

  return (
    <header className="absolute w-full py-8">
      <div className="container flex flex-col lg:flex-row items-center justify-between gap-y-3">
        <Logo />
        <div className="flex items-center gap-x-8">
          <div className="flex items-center gap-x-3">
            <Image
              src="/phone.svg"
              alt="Phone icon"
              width={42}
              height={42}
              className="w-auto h-full"
            />
            <div className="font-tertiary leading-none text-white">
              <p className="text-sm font-medium uppercase">
                24/7 Pizza delivery service
              </p>
              <p className="text-3xl font-extrabold tracking-wide">
                920 234 5789
              </p>
            </div>
          </div>

          <div
            onClick={() => setIsOpen(!isOpen)}
            className="relative cursor-pointer hidden lg:flex"
          >
            <Image src="/bag.svg" alt="Bag icon" width={38} height={38} />
            <p className="absolute -bottom-2 -right-1 size-6 flex justify-center items-center rounded-full text-xs font-tertiary bg-tertiary text-white">
              {totalAmount}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
