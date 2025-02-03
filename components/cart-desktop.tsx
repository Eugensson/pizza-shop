"use client";

import { useContext } from "react";
import { twMerge } from "tailwind-merge";

import { CartItem } from "@/components/cart-item";
import { CartHeader } from "@/components/cart-header";
import { CartFooter } from "@/components/cart-footer";

import { CartItemType } from "@/types";

import { CartContext } from "@/context/cart-context";

export const CartDesktop = () => {
  const context = useContext(CartContext);

  if (!context)
    throw new Error("CartContext must be used within a CartProvider");

  const { isOpen, cartItems } = context;

  return (
    <div
      className={twMerge(
        "fixed top-0 bottom-0 w-[500px] hidden lg:flex flex-col shadow-2xl bg-white transition-all duration-300",
        isOpen ? "left-0" : "-left-full"
      )}
    >
      <CartHeader />
      <ul
        className={twMerge(
          "px-10 py-2 mr-4 mt-8 h-[65vh] flex flex-col gap-y-4",
          cartItems.length >= 3 &&
            "overflow-y-scroll scrollbar-thin scrollbar-track-black/10 scrollbar-thumb-secondary"
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
