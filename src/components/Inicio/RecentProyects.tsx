import React from "react";
import { Button } from "../ui/button";

const RecentProyects = () => {
  const datas = [
    {
      src: "https://res.cloudinary.com/djbdw6ylx/image/upload/v1714783097/eltenfnxphukdpzl6ajd.jpg",
      alt: "Cocina Ibague",
      nombre: "",
    },
    {
      src: "https://res.cloudinary.com/djbdw6ylx/image/upload/v1714783098/guc3nhmvrqr3jyv0axwv.jpg",
      alt: "Cocina Modelia",
      nombre: "",
    },
    {
      src: "https://res.cloudinary.com/djbdw6ylx/image/upload/v1714783850/Imagen_de_WhatsApp_2024-05-03_a_las_19.52.39_96146be1_tsghf4.jpg",
      alt: "Cocina ColMuñecos",
      nombre: "",
    },
    {
      src: "https://res.cloudinary.com/djbdw6ylx/image/upload/v1714783850/Imagen_de_WhatsApp_2024-05-03_a_las_19.52.39_bd173f57_dm0l3d.jpg",
      alt: "",
      nombre: "",
    },
    {
      src: "https://res.cloudinary.com/djbdw6ylx/image/upload/v1714783850/Imagen_de_WhatsApp_2024-05-03_a_las_19.52.39_b4199e9d_vbughi.jpg",
      alt: "",
      nombre: "",
    },
  ];

  return (
    <section className="container h-screen gap-2 xs:gap-4 2xl:px-0">
      <h2 className="subtitle">Proyectos Recientes</h2>
      <div className="grid h-5/6 w-full auto-cols-fr grid-flow-col  grid-rows-3 gap-2 overflow-hidden transition-all">
        {datas.map((data) => (
          <div className="group relative m-auto h-full w-full  overflow-hidden rounded-3xl ">
            <img
              src={data.src}
              alt={data.alt}
              className="h-full w-full cursor-pointer rounded-3xl border border-orange-900 object-cover drop-shadow-lg group-hover:scale-125"
            />
            <h3 className="absolute m-auto h-full w-full bg-black/80 pt-8 text-center group-hover:top-1/2">
              {data.nombre}
            </h3>
          </div>
        ))}
      </div>
      <Button className="w-full rounded-xl border-2 border-orange-600 bg-orange-400 text-lg hover:bg-orange-200 xs:py-7 xs:text-2xl sm:text-3xl md:py-10 md:text-4xl">
        Ver Proyectos
      </Button>
    </section>
  );
};

export default RecentProyects;
