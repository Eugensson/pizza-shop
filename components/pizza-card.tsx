"use client";

import Image from "next/image";
import Modal from "react-modal";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

import { PizzaDetails } from "@/components/pizza-details";

import { Pizza } from "@/types";

Modal.setAppElement("body");

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
};

interface PizzaCardProps {
  pizza: Pizza;
}

export const PizzaCard = ({ pizza }: PizzaCardProps) => {
  const [modal, setModal] = useState<boolean>(false);
  const { title, description, image, priceSm } = pizza;

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <article className="py-2 px-4 xl:py-4 xl:px-2 round group">
      <Image
        priority
        src={image}
        alt={`${title} Pizza Image`}
        width={270}
        height={270}
        className="mb-8 object-cover aspect-square lg:group-hover:translate-y-3 transition-all duration-300 cursor-pointer"
        onClick={openModal}
      />
      <div onClick={openModal}>
        <h2 className="mb-3 text-xl font-bold capitalize cursor-pointer">
          {title}
        </h2>
      </div>
      <p className="text-sm font-medium min-h-[60px] mb-6 line-clamp-4">
        {description}
      </p>
      <div className="mb-6 flex items-center justify-between">
        <p className="hidden lg:block text-xl font-semiboldx`">
          starts at {priceSm}
        </p>
        <button
          onClick={openModal}
          className="hidden lg:block btn-sm gradient text-sm font-semibold text-white rounded-lg"
        >
          Choose
        </button>
        <button
          onClick={openModal}
          className="btn btn-sm px-3 text-sm gradient lg:hidden"
        >
          starts at {priceSm}
        </button>
      </div>
      <>
        {modal && (
          <Modal
            isOpen={modal}
            style={modalStyles}
            onRequestClose={closeModal}
            contentLabel="Pizza Modal"
            className="bg-white w-full h-full lg:max-w-[900px] lg:max-h-[600px] lg:rounded-[30px] lg:fixed lg:top-1/2 lg:-translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2 outline-none"
          >
            <div
              onClick={closeModal}
              className="absolute top-2 right-2 z-30 hover:scale-110 transition-all duration-300 cursor-pointer"
            >
              <IoCloseOutline className="text-4xl text-orange" />
            </div>
            <PizzaDetails pizza={pizza} modal={modal} setModal={setModal} />
          </Modal>
        )}
      </>
    </article>
  );
};
