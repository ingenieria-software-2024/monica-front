import React from "react";
import AboutBanner from "../components/AboutBanner";

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <AboutBanner />
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Sobre Nosotros</h1>
        <p className="text-center">
          Bienvenido a nuestra tienda de productos electrónicos. Aquí ofrecemos
          una amplia gama de artículos, incluyendo celulares, computadoras,
          consolas de juegos y más.
        </p>
        <p className="text-center mt-4">
          Nuestro objetivo es proporcionar los mejores productos y servicios
          para satisfacer todas tus necesidades electrónicas. ¡Gracias por
          visitarnos!
        </p>
      </div>
      <br />
      <h1 className="text-2xl font-bold mb-4">Lo que nos caracteriza</h1>

      {/* Tarjetas en el medio con más separación */}
      <div className="flex flex-row justify-center gap-4 mt-8 mb-16">
        {" "}
        {/* Añadir 'mb-16' para separar del footer */}
        {/* Tarjeta Misión */}
        <div className="service-card w-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127]">
          <svg
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            stroke="#000000"
            fill="none"
            viewBox="0 0 24 24"
            className="text-5xl h-12 w-12 stroke-gray-800 group-hover:stroke-gray-400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect ry="2" rx="2" height="14" width="20" y="3" x="2"></rect>
            <line y2="21" x2="16" y1="21" x1="8"></line>
            <line y2="21" x2="12" y1="17" x1="12"></line>
          </svg>
          <p className="font-bold text-2xl group-hover:text-white text-black/80">
            Nuestra Misión
          </p>
          <p className="text-gray-400 text-sm">
            Ofrecer productos tecnológicos de alta calidad y un excelente
            servicio al cliente.
          </p>
        </div>
        {/* Tarjeta Visión */}
        <div className="service-card w-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127]">
          <svg
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            stroke="#000000"
            fill="none"
            viewBox="0 0 24 24"
            className="text-5xl h-12 w-12 stroke-gray-800 group-hover:stroke-gray-400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect ry="2" rx="2" height="14" width="20" y="3" x="2"></rect>
            <line y2="21" x2="16" y1="21" x1="8"></line>
            <line y2="21" x2="12" y1="17" x1="12"></line>
          </svg>
          <p className="font-bold text-2xl group-hover:text-white text-black/80">
            Nuestra Visión
          </p>
          <p className="text-gray-400 text-sm">
            Ser la tienda de productos electrónicos más confiable y reconocida.
          </p>
        </div>
        {/* Tarjeta Objetivos */}
        <div className="service-card w-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127]">
          <svg
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            stroke="#000000"
            fill="none"
            viewBox="0 0 24 24"
            className="text-5xl h-12 w-12 stroke-gray-800 group-hover:stroke-gray-400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect ry="2" rx="2" height="14" width="20" y="3" x="2"></rect>
            <line y2="21" x2="16" y1="21" x1="8"></line>
            <line y2="21" x2="12" y1="17" x1="12"></line>
          </svg>
          <p className="font-bold text-2xl group-hover:text-white text-black/80">
            Nuestros Objetivos
          </p>
          <p className="text-gray-400 text-sm">
            Innovar continuamente en tecnología para ofrecer lo mejor a nuestros
            clientes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
