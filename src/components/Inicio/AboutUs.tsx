import React from "react";

const AboutUs = () => {
  return (
    <section className="container grid gap-4 lg:grid-cols-2">
      <div className="">
        <h2 className="subtitle">Acerca de Nosotros</h2>
        <p className="xs:text-md text-xs font-light md:text-2xl">
          Somos una empresa dedicada a la carpintería especializados en la
          fabricación de cocinas, closets, bibliotecas, escritorios, mesitas de
          noche, muebles de baño, puertas, decorativos, y lo relacionado a la
          madera.
          <br />
          Brindamos soluciones en madera, vidrio y mármol. Como instalación de
          pisos laminados, mesones, mantenimiento y renovación a detalles de
          carpintería y pintura, divisiones de baño en vidrio, ventanearía y
          otros servicios relacionados a la remodelación de interiores.
          <br />
          Con años de experiencia en el sector, nos hemos consolidado como
          líderes en calidad, innovación y atención al cliente.
          <br />
          Nuestro compromiso con nuestros clientes se refleja en el servicio
          excepcional que ofrecemos. Nos esforzamos por comprender las
          necesidades específicas de cada cliente y brindarles soluciones
          personalizadas que se ajusten a sus preferencias y presupuesto.
          Nuestro objetivo es superar las expectativas de nuestros clientes en
          términos de calidad, puntualidad y satisfacción general.
          <br />
          Valoramos la durabilidad y la sostenibilidad en todos nuestros
          proyectos. Utilizamos materiales de primera calidad que garantizan la
          resistencia y la longevidad de nuestros productos.{" "}
        </p>
      </div>
      <figure className="xs:mt-4">
        <img
          className="h-52 w-full cursor-pointer rounded-3xl border border-orange-900 object-cover drop-shadow-lg"
          src="https://res.cloudinary.com/djbdw6ylx/image/upload/a_90/IMG_20230427_224858348_1a436aba63.jpg"
          alt="Imagen de Acerca de Nosotros"
        />
      </figure>
    </section>
  );
};

export default AboutUs;
