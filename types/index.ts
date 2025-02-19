export type ToppingType = {
  image: string;
  name: string;
  price: number;
};

export type Pizza = {
  id: string;
  title: string;
  description: string;
  image: string;
  priceSm: number;
  priceMd: number;
  priceLg: number;
  toppings: ToppingType[];
};

export type SizeType = "small" | "medium" | "large";

export type DoughType = "traditional" | "thin";

export type AdditionalToppingType = ToppingType[];

export type CartItemType = {
  id: string;
  image: string;
  title: string;
  price: number;
  additionalTopping: AdditionalToppingType;
  size: SizeType;
  dough: DoughType;
  amount: number;
};
