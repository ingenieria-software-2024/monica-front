import React, { useEffect, useState } from "react";

const aboutImages = ["/images/s2.jpg", "/images/s3.jpg", "/images/s4.jpg"];

const AboutBanner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % aboutImages.length);
    }, 3000); // Cambia de imagen cada 3 segundos

    return () => clearInterval(intervalId); // Limpiar el intervalo al desmontar el componente
  }, []);

  return (
    <div
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${aboutImages[currentIndex]})`,
        height: "100vh", // Ocupar toda la altura de la ventana
        width: "100vw", // Ocupar todo el ancho de la ventana
        margin: 0, // Asegúrate de que no haya márgenes
        padding: 0, // Asegúrate de que no haya paddings
      }}
    >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <h1 className="text-white text-4xl font-bold">Sobre Nosotros</h1>
      </div>
    </div>
  );
};

export default AboutBanner;
