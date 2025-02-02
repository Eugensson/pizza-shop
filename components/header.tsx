import Image from "next/image";

import { Logo } from "@/components/logo";

export const Header = () => {
  return (
    <header className="absolute w-full py-8">
      <div className="container flex flex-col lg:flex-row items-center justify-between gap-y-3">
        <Logo />
        <div className="flex items-center gap-x-8">
          <div className="flex items-center gap-x-3">
            <Image src="/phone.svg" alt="Phone icon" width={42} height={42} />
            <div className="font-tertiary leading-none text-white">
              <p className="text-sm font-medium uppercase">
                24/7 Pizza delivery service
              </p>
              <p className="text-3xl font-extrabold tracking-wide">
                920 234 5789
              </p>
            </div>
          </div>

          <div className="relative cursor-pointer hidden lg:flex">
            <Image src="/bag.svg" alt="Bag icon" width={38} height={38} />
            <p className="absolute -bottom-2 -right-1 size-6 flex justify-center items-center rounded-full text-xs font-tertiary bg-tertiary text-white">
              5
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
