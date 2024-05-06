import React from "react";
import { Button } from "../ui/button";
import {
  BiLogoFacebookSquare,
  BiLogoInstagramAlt,
  BiRightArrowAlt,
  BiLogoWhatsapp,
} from "react-icons/bi";

export const Hero = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center overflow-hidden bg-[radial-gradient(52%_45%_at_50%_45%,rgba(0,0,0,0.00)_0%,rgba(0,0,0,0.79)_100%),url(https://res.cloudinary.com/djbdw6ylx/image/upload/v1714086535/IMG_20231216164115_0e7488d3fd.jpg)] bg-cover bg-center">
      <div className="container flex w-screen columns-auto flex-col justify-center gap-4 pt-24 md:flex md:gap-y-8 lg:grid lg:h-fit  lg:w-fit lg:grid-cols-5 lg:place-items-center 2xl:p-0">
        <h1 className="font-black lg:col-span-3">
          Modelos y Diseños Decorativos
        </h1>
        <h2 className="font-bold lg:col-span-3 lg:col-start-1">
          Remodelación Residencial
        </h2>
        <Button className="gap-4 rounded-2xl bg-green-500 p-7 text-2xl hover:bg-green-400 xs:py-8 xs:text-3xl sm:py-8 sm:text-3xl md:p-14 md:px-9 md:py-12 md:text-5xl lg:col-span-2 lg:col-start-4 lg:row-start-1 lg:px-10 lg:py-12 lg:text-4xl xl:px-12 xl:py-14 xl:text-5xl">
          WhatsApp
          <BiLogoWhatsapp className="size-12 lg:size-16 xl:size-20" />
        </Button>
        <Button className="rounded-2xl bg-gray-500 p-6 text-xl hover:bg-gray-400 xs:py-7 xs:text-2xl sm:p-6 sm:text-2xl md:px-7 md:py-10 md:text-4xl lg:col-span-2 lg:col-start-4 lg:row-start-3 lg:px-8 lg:py-10 lg:text-3xl xl:px-10 xl:py-12 xl:text-4xl">
          Ver Proyectos
          <BiRightArrowAlt className="size-12 lg:size-16 xl:size-20" />
        </Button>
        <div className="flex h-fit w-fit gap-8 md:gap-16 lg:col-span-3 lg:col-start-1 lg:row-start-3">
          <BiLogoFacebookSquare className="lg:size size-16 hover:text-blue-600 xs:size-20 md:size-28 xl:size-32" />
          <BiLogoInstagramAlt className="lg:size size-16 hover:text-purple-500 xs:size-20 md:size-28 xl:size-32" />
        </div>
      </div>
    </div>
  );
};
