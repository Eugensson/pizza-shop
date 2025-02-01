import Image from "next/image";
import { twMerge } from "tailwind-merge";

import { Pizza, SizeType } from "@/types";

interface SizeSelectionProps {
  pizza: Pizza;
  size: SizeType;
  setSize: React.Dispatch<React.SetStateAction<SizeType>>;
}

const sizeOptions = [
  { label: "Small", value: "small", width: 60, height: 60 },
  { label: "Medium", value: "medium", width: 70, height: 70 },
  { label: "Large", value: "large", width: 80, height: 80 },
] as const;

export const SizeSelection = ({ pizza, size, setSize }: SizeSelectionProps) => {
  return (
    <div className="mx-auto max-w-sm lg:max-w-none flex items-center justify-center lg:justify-start">
      <ul className="mb-10 flex items-baseline gap-x-12 font-medium">
        {sizeOptions.map(({ label, value, width, height }) => (
          <li key={value}>
            <label
              htmlFor={value}
              className="flex flex-col items-center gap-1 cursor-pointer"
            >
              <Image
                src={pizza.image}
                alt={`${label} pizza`}
                width={width}
                height={height}
                className={twMerge(
                  "object-cover aspect-square",
                  size === value
                    ? "border-2 border-orange p-0.5 rounded-full"
                    : "border-transparent filter saturate-[.1]"
                )}
              />
              <input
                type="radio"
                name="size"
                value={value}
                id={value}
                checked={size === value}
                onChange={() => setSize(value)}
                className="appearance-none"
                aria-labelledby={`${value}-label`}
              />
              <span id={`${value}-label`}>{label}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
