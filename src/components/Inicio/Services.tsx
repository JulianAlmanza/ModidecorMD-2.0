import React from "react";
import { Button } from "../ui/button";

const Services = () => {
  return (
    <section className="te container gap-2 lg:flex-row lg:gap-8 2xl:px-0">
      <img
        src="https://res.cloudinary.com/djbdw6ylx/image/upload/v1714178585/IMG_20230129145416_25ad1e0fbb.jpg"
        alt="Imagen de Servicios"
        className="h-44 w-full rounded-3xl border border-orange-900 object-cover object-[50%_45%] drop-shadow-lg xs:h-60 xs:object-center md:h-80 md:object-[50%_42%] lg:h-[715px] lg:w-1/2 2xl:h-[750px]"
      />
      <div className="flex flex-col gap-1 xs:gap-4 lg:w-1/2 lg:gap-3 xl:gap-8">
        <h2 className="subtitle">Servicios</h2>
        <ol className="lg:text- grid gap-0.5 xs:gap-1 xs:text-xl sm:text-2xl md:gap-3 md:text-3xl xl:gap-4 2xl:text-4xl">
          <li>Remodelación Completa</li>
          <li>Remodelación de Cocinas</li>
          <li>Remodelación de Baños</li>
          <li>Diseño y fabricación de muebles</li>
          <li>Instalación de puertas y ventanas</li>
          <li>Proyectos a medida</li>
          <li>Carpintería arquitectónica</li>
          <li>Instalación de pisos de madera</li>
          <li>Renovación y restauración de muebles antiguos</li>
        </ol>
        <Button className="rounded-xl border-2 border-orange-600 bg-orange-400 text-lg hover:bg-orange-200 xs:py-7 xs:text-2xl sm:text-3xl md:py-10 md:text-4xl">
          Mas Informacion
        </Button>
      </div>
    </section>
  );
};

export default Services;
