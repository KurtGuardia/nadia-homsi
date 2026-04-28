import React from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

const partnersData = [
  {
    displayName: "Victoria",
    handle: "@balance_nutricionintegrativa",
    url: "https://www.instagram.com/balance_nutricionintegrativa/",
  },
  {
    displayName: "Mishel",
    handle: "@danzando.con.la.vida",
    url: "https://www.instagram.com/danzando.con.la.vida/",
  },
  {
    displayName: "Paula",
    handle: "@centro_holistico_alas",
    url: "https://www.instagram.com/centro_holistico_alas_/",
  },
];

const PartnersSection = () => {
  return (
    <section
      id="partners"
      className="relative overflow-hidden py-6 md:py-8 lg:py-7 text-white"
    >
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[var(--secondary-color)] via-[#5e3732] to-[var(--primary)]" />
      <div className="hidden md:block absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="hidden md:block absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold font-handwritten tracking-wider mb-8">
            Colaboraciones
          </h2>

          <p className="text-xl md:text-2xl text-white/85 leading-relaxed">
            Trabajo en conjunto con estas maravillosas profesionales.
            <br />
            ¡Conoce más sobre ellas!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {partnersData.map((partner) => (
            <a
              key={partner.handle}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl bg-white/95 backdrop-blur-sm p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-center flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-3xl font-bold mb-5 shadow-md">
                {partner.displayName.charAt(0)}
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-primary transition-colors">
                {partner.displayName}
              </h3>

              <p className="text-sm text-primary mt-2 mb-4 flex items-center">
                <FaInstagram className="mr-2 text-base" />
                {partner.handle}
              </p>

              <span className="mt-auto text-sm text-gray-500 border-t border-gray-200 pt-4 w-full group-hover:text-gray-700 transition">
                Visitar perfil en Instagram
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
