"use client";
import Link from "next/link";
import React, { useState } from "react";
import { MenuButton } from "./btnMenu";
import clsx from "clsx";
import page from "@/app/page";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const Page = ["Servicios", "Proyectos", "Materiales"];

  const menuButtonStyle = {
    cursor: "pointer",
  };

  return (
    <div className="container absolute left-1/2 -translate-x-1/2 2xl:px-0">
      <div className="flex w-full flex-row items-center justify-between rounded-2xl border border-gray-100 bg-gray-400/20 bg-clip-padding px-4 py-4 backdrop-blur-md backdrop-filter">
        <h2
          className={
            " xs:text-3xl text-2xl text-[#e09c1e] md:text-5xl lg:text-3xl xl:text-5xl 2xl:text-6xl"
          }
        >
          Modidecor MD
        </h2>
        <nav
          className={
            "text-white lg:flex lg:gap-4 lg:text-xl xl:text-3xl 2xl:text-4xl " +
            clsx({
              hidden: !isOpen,
              "absolute right-3 top-2 z-20 flex w-1/2 flex-col items-end justify-center gap-4 bg-black/90 px-4 pb-5 pt-14 text-2xl md:right-3 md:gap-8 md:pb-10 md:pt-24 md:text-5xl":
                isOpen,
            })
          }
        >
          <Link className="hover:text-[#e09c1e]" href={"/"}>
            Inicio
          </Link>
          {Page.map((link: string) => (
            <Link className="hover:text-[#e09c1e]" href={"/" + link}>
              {link}
            </Link>
          ))}
        </nav>
        <div className="z-50 my-auto lg:hidden">
          <MenuButton
            className={"stroke-[3px] md:h-9 md:w-16"}
            isOpen={isOpen}
            onClick={() => setOpen(!isOpen)}
            strokeWidth={3}
            color="#fff"
            transition={{ ease: "easeOut", duration: 0.2 }}
            width={38}
            height={16}
            style={menuButtonStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
