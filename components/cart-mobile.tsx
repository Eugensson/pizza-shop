"use client";

import { useContext } from "react";
import { twMerge } from "tailwind-merge";

import { CartItem } from "@/components/cart-item";
import { CartHeader } from "@/components/cart-header";
import { CartFooter } from "@/components/cart-footer";

import { CartContext } from "@/context/cart-context";

import { CartItemType } from "@/types";

export const CartMobile = () => {
  const context = useContext(CartContext);

  if (!context)
    throw new Error("CartContext must be used within a CartProvider");

  const { isOpen, cartItems } = context;

  return (
    <div
      className={twMerge(
        "fixed left-0 z-20 w-full h-full lg:hidden flex flex-col transition-all duration-300 bg-white",
        isOpen ? "bottom-0" : "-bottom-full"
      )}
    >
      <CartHeader />
      <ul
        className={twMerge(
          "p-2 mr-4 mt-8 h-[60vh] flex flex-col gap-y-4 overflow-y-scroll scrollbar-thin",
          cartItems.length >= 3
            ? "scrollbar-track-black/10 scrollbar-thumb-secondary"
            : "scrollbar-track-transparent"
        )}
      >
        {cartItems.map((item: CartItemType) => (
          <li key={item.id}>
            <CartItem item={item} />
          </li>
        ))}
      </ul>
      <CartFooter />
    </div>
  );
};
