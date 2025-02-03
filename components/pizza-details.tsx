"use client";

import Image from "next/image";
import { useContext, useEffect, useState } from "react";

import { Topping } from "@/components/topping";
import { SizeSelection } from "@/components/size-selection";
import { DoughSelection } from "@/components/dough-selection";

import { CartContext } from "@/context/cart-context";

import { AdditionalToppingType, DoughType, Pizza, SizeType } from "@/types";

interface PizzaDetailsProps {
  pizza: Pizza;
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PizzaDetails = ({ pizza, setModal }: PizzaDetailsProps) => {
  const context = useContext(CartContext);

  if (!context)
    throw new Error("CartContext must be used within a CartProvider");

  const { addToCart } = context;

  const [size, setSize] = useState<SizeType>("small");
  const [dough, setDough] = useState<DoughType>("traditional");
  const [additionalTopping, setAdditionalTopping] =
    useState<AdditionalToppingType>([]);
  const [additionalToppingPrice, setAdditionalToppingPrice] =
    useState<number>(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const basePrice: number =
      size === "small"
        ? pizza.priceSm
        : size === "medium"
        ? pizza.priceMd
        : pizza.priceLg;

    setPrice(parseFloat((basePrice + additionalToppingPrice).toFixed(2)));
  }, [
    size,
    additionalToppingPrice,
    pizza.priceSm,
    pizza.priceMd,
    pizza.priceLg,
  ]);

  useEffect(() => {
    if (additionalTopping.length > 0) {
      const toppingPrice = additionalTopping.reduce((a, c) => a + c?.price, 0);
      setAdditionalToppingPrice(toppingPrice);
    } else {
      setAdditionalToppingPrice(0);
    }
  }, [additionalTopping]);

  return (
    <div className="flex flex-col lg:flex-row lg:gap-x-8 h-full md:p-8">
      <div className="lg:flex-1 flex items-center justify-center">
        <div className="max-w-[300px] lg:max-w-none mt-6 lg:mt-0">
          <Image
            width={450}
            height={450}
            priority
            src={pizza.image}
            alt={`${pizza.title} Pizza Image`}
            className="object-cover aspect-square relative mx-auto"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        <div className="p-2 flex-1 text-center lg:text-left">
          <div className="flex-1 bg-white overflow-y-scroll h-[46vh] scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white pr-2">
            <div className="font-semibold">
              <h2 className="mb-1 capitalize text-3xl">{pizza.title}</h2>
              <div className="bg-yellow-200 mb-6 text-lg font-medium">
                <span>
                  {size === "small"
                    ? "25cm"
                    : size === "medium"
                    ? "30cm"
                    : size === "large"
                    ? "35cm"
                    : null}
                </span>
                <span>, {dough} dough</span>
              </div>
            </div>
            <SizeSelection pizza={pizza} size={size} setSize={setSize} />
            <DoughSelection dough={dough} setDough={setDough} />

            <p className="mb-4 text-xl font-semibold">Choose topping</p>
            <ul className="py-1 flex flex-1 flex-wrap justify-center lg:justify-start gap-2">
              {pizza.toppings.map((topping) => (
                <li key={topping.name}>
                  <Topping
                    topping={topping}
                    additionalTopping={additionalTopping}
                    setAdditionalTopping={setAdditionalTopping}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-full px-2 flex items-center lg:items-end">
          <button
            type="button"
            className="btn btn-lg gradient w-full space-x-2"
            onClick={() => {
              addToCart(
                pizza.id,
                pizza.image,
                pizza.title,
                price,
                additionalTopping,
                size,
                dough
              );
              setModal(false);
            }}
          >
            <span>Add to cart for</span>
            <span>$ {price}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
