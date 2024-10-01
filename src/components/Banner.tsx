import React, { useEffect, useState } from 'react';

const images = [
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/3.jpg'
];

const Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia de imagen cada 3 segundos

    return () => clearInterval(intervalId); // Limpiar el intervalo al desmontar el componente
  }, []);

  return (
    <div className="relative bg-cover bg-center" style={{ backgroundImage: `url(${images[currentIndex]})`, height: '700px' }}>
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <h1 className="text-white text-4xl font-bold">Bienvenido a nuestra tienda</h1>
      </div>
    </div>
  );
};

export default Banner;