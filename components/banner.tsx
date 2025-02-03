"use client";

import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import Image from "next/image";

export const Banner = () => {
  return (
    <section className="pt-16 lg:min-h-[768px] bg-primary bg-pattern">
      <div className="container min-h-[768px] flex items-center justify-center">
        <MouseParallaxContainer
          globalFactorX={0.4}
          globalFactorY={0.3}
          resetOnLeave
          className="w-full flex flex-col lg:flex-row items-center justify-between"
        >
          <MouseParallaxChild factorX={0.1} factorY={0.2}>
            <div className="px-4 flex flex-1 flex-col lg:flex-row items-center text-center lg:text-left text-white">
              <div className="flex-1">
                <p className="mb-4 font-primary text-3xl uppercase tracking-[0.03em]">
                  🍕 Best pizza in town
                </p>
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-primary drop-shadow-md">
                  Pizza perfection <br /> in every bite
                </h1>
              </div>
            </div>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.2} factorY={0.3} className="relative">
            <div className="px-6 flex-1 flex justify-end max-w-sm lg:max-w-max">
              <Image
                priority
                width={550}
                height={558}
                src="/pizza-banner.png"
                alt="Pizza Banner"
              />
            </div>
            <MouseParallaxChild
              factorX={0.2}
              factorY={0.3}
              className="absolute top-6 left-4 hidden xl:flex"
            >
              <Image
                width={160}
                height={84}
                src="/chilli-1.png"
                alt="Chilli Image"
                className="w-full h-auto"
              />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.4}
              factorY={0.4}
              className="absolute top-16 -left-4 hidden xl:flex"
            >
              <Image
                width={130}
                height={84}
                src="/chilli-2.png"
                alt="Chilli Image"
                className="w-full h-auto"
              />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.6}
              factorY={0.6}
              className="absolute top-80 -left-24 hidden xl:flex"
            >
              <Image
                width={84}
                height={72}
                src="/garlic-1.png"
                alt="Garlic Image"
                className="w-full h-auto"
              />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.3}
              factorY={0.6}
              className="absolute top-[22rem] -left-8 hidden xl:flex"
            >
              <Image
                width={84}
                height={72}
                src="/garlic-2.png"
                alt="Garlic Image"
                className="w-full h-auto"
              />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.4}
              factorY={1}
              className="absolute top-96 -left-20 hidden xl:flex"
            >
              <Image
                width={100}
                height={72}
                src="/garlic-3.png"
                alt="Garlic Image"
                className="w-full h-auto"
              />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.2}
              factorY={0.2}
              className="absolute top-96 left-12 hidden xl:flex"
            >
              <Image
                width={180}
                height={72}
                src="/leaves.png"
                alt="Baselic leaves Image"
                className="w-full h-auto"
              />
            </MouseParallaxChild>
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
    </section>
  );
};
