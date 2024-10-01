import Banner from '../components/Banner';

const Home = () => {
  return (
    <div>
      <Banner />
      
      {/* Tarjetas de Productos */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6">
        {/* Tarjeta 1 */}
        <div className="m-2 group px-10 py-5 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[rgba(37,99,235,0.7)] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0">
          <img src="../../public/images/laptop.png" alt="Calathea Orbifolia" className="w-24 h-24" />
          <p className="font-semibold text-gray-200 tracking-wider group-hover:text-gray-700 text-xl">Laptops</p>
          <p className="font-semibold text-gray-200 text-xs">Las mejores laptops del mercado</p>
          <div className="flex flex-row justify-center items-center w-full">
            <p className="lg:inline-flex items-center gap-3 group-hover:bg-white/10 bg-blue-800 shadow-[10px_10px_150px_#ff9f0d] cursor-pointer py-2 px-4 text-sm font-semibold text-white rounded-full">Ordenar ahora</p>
          </div>
        </div>

        {/* Tarjeta 2 */}
        <div className="m-2 group px-10 py-5 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[rgba(37,99,235,0.7)] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0">
          <img src="../../public/images/s24.png" alt="Product Name" className="w-24 h-24" />
          <p className="font-semibold text-gray-200 tracking-wider group-hover:text-gray-700 text-xl">Celulares</p>
          <p className="font-semibold text-gray-200 text-xs">Amplia variedad de smartphones de alta gama</p>
          <div className="flex flex-row justify-center items-center w-full">
            <p className="lg:inline-flex items-center gap-3 group-hover:bg-white/10 bg-blue-800 shadow-[10px_10px_150px_#ff9f0d] cursor-pointer py-2 px-4 text-sm font-semibold text-white rounded-full">Ordenar ahora</p>
          </div>
        </div>

        {/* Tarjeta 3 */}
        <div className="m-2 group px-10 py-5 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[rgba(37,99,235,0.7)] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0">
          <img src="../../public/images/xbox.png" alt="Product Name" className="w-24 h-24" />
          <p className="font-semibold text-gray-200 tracking-wider group-hover:text-gray-700 text-xl">Consolas de juego</p>
          <p className="font-semibold text-gray-200 text-xs">Todas las consolas de juego de este último tiempo</p>
          <div className="flex flex-row justify-center items-center w-full">
            <p className="lg:inline-flex items-center gap-3 group-hover:bg-white/10 bg-blue-800 shadow-[10px_10px_150px_#ff9f0d] cursor-pointer py-2 px-4 text-sm font-semibold text-white rounded-full">Ordenar ahora</p>
          </div>
        </div>

        {/* Tarjeta 4 */}
        <div className="m-2 group px-10 py-5 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[rgba(37,99,235,0.7)] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0">
          <img src="../../public/images/pc-gamer.png" alt="Product Name" className="w-24 h-24" />
          <p className="font-semibold text-gray-200 tracking-wider group-hover:text-gray-700 text-xl">PC gamers</p>
          <p className="font-semibold text-gray-200 text-xs">Amplia gama de computadoras para gaming</p>
          <div className="flex flex-row justify-center items-center w-full">
            <p className="lg:inline-flex items-center gap-3 group-hover:bg-white/10 bg-blue-800 shadow-[10px_10px_150px_#ff9f0d] cursor-pointer py-2 px-4 text-sm font-semibold text-white rounded-full">Ordenar ahora</p>
          </div>
        </div>
      </section>

 {/* Sección de imagen y texto */}
<div className="flex my-10">
  <div className="w-1/2 flex justify-center">
    <img
      src="../../public/images/pngwing.com (5).png"
      alt="Descripción de la imagen"
      className="w-3/4 h-auto rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
    />
  </div>

  <div className="w-1/2 pl-6 flex flex-col justify-center">
    <h3 className="text-3xl font-semibold text-white text-center transition-opacity duration-500 hover:opacity-80">
      Líderes en Innovación Tecnológica
    </h3>
    <p className="mt-4 text-white text-lg text-center transition-opacity duration-500 hover:opacity-80">
      En el mundo dinámico de la tecnología, Megastore se posiciona como un líder indiscutible, ofreciendo soluciones innovadoras y personalizadas que satisfacen las necesidades de nuestros clientes. Con una trayectoria sólida y un equipo de expertos comprometidos, nos dedicamos a transformar ideas en realidades tecnológicas. Nuestra pasión por la excelencia y la mejora continua nos impulsa a mantenernos a la vanguardia de las tendencias del mercado, asegurando que nuestros productos y servicios no solo cumplan, sino que superen las expectativas de nuestros clientes. Elegir Megastore es optar por un socio estratégico que entiende el futuro y está listo para enfrentar cualquier desafío.
    </p>

    <div className="flex justify-center mt-6">
      {/* Nuevo botón */}
      <button className="bg-slate-950 text-slate-400 border border-slate-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
        <span className="bg-slate-400 shadow-slate-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
        Ver mas 
      </button>
    </div>
  </div>
</div>
     

 {/* Sección "Por qué elegirnos" */}
<section className="space-y-4 p-6">
  <h3 className="text-2xl font-bold ">¿Por qué elegirnos?</h3>
  <div className="space-y-2 p-4">
    <div
      role="alert"
      className="bg-gradient-to-r from-blue-700 to-purple-600 text-white border-l-4 border-purple-700 p-4 rounded-lg flex items-center transition duration-300 ease-in-out hover:scale-105"
    >
      <svg
        stroke="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6 text-white"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 7v10l9-5-9-5z"
        />
      </svg>
      <span className="ml-2">Innovación constante en tecnología.</span>
    </div>
    <div
      role="alert"
      className="bg-gradient-to-r from-blue-700 to-purple-600 text-white border-l-4 border-purple-700 p-4 rounded-lg flex items-center transition duration-300 ease-in-out hover:scale-105"
    >
      <svg
        stroke="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6 text-white"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 7v10l9-5-9-5z"
        />
      </svg>
      <span className="ml-2">Atención al cliente excepcional.</span>
    </div>
    <div
      role="alert"
      className="bg-gradient-to-r from-blue-700 to-purple-600 text-white border-l-4 border-purple-700 p-4 rounded-lg flex items-center transition duration-300 ease-in-out hover:scale-105"
    >
      <svg
        stroke="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6 text-white"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 7v10l9-5-9-5z"
        />
      </svg>
      <span className="ml-2">Soluciones personalizadas para cada cliente.</span>
    </div>
    <div
      role="alert"
      className="bg-gradient-to-r from-blue-700 to-purple-600 text-white border-l-4 border-purple-700 p-4 rounded-lg flex items-center transition duration-300 ease-in-out hover:scale-105"
    >
      <svg
        stroke="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6 text-white"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 7v10l9-5-9-5z"
        />
      </svg>
      <span className="ml-2">Precios competitivos en el mercado.</span>
    </div>
  </div>
</section>

      <div className="flex flex-col items-center my-10">
  <h3 className="text-2xl font-bold">Algunas de las marcas con las que trabajamos</h3>
  <div className="flex flex-wrap justify-center gap-4 mt-4">
    {/* Tarjeta 1 */}
    <div className="bg-sky-700 rounded-2xl shadow-sm shadow-sky-500 outline outline-slate-400 -outline-offset-8">
      <div className="group overflow-hidden relative after:duration-500 before:duration-500 duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12 before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12 hover:rotate-12 flex justify-center items-center h-56 w-80 bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
        <div className="z-10 flex flex-col items-center gap-2">
          <img src="../../public/images/pngwing.com (10).png" alt="Descripción de la imagen 1" className="w-24 h-24 rounded-full" /> {/* Imagen de la tarjeta 1 */}
        </div>
      </div>
    </div>

    {/* Tarjeta 2 */}
    <div className="bg-sky-700 rounded-2xl shadow-sm shadow-sky-500 outline outline-slate-400 -outline-offset-8">
      <div className="group overflow-hidden relative after:duration-500 before:duration-500 duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12 before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12 hover:rotate-12 flex justify-center items-center h-56 w-80 bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
        <div className="z-10 flex flex-col items-center gap-2">
          <img src="../../public/images/pngwing.com (9).png" alt="Descripción de la imagen 2" className="w-24 h-24 rounded-full" /> {/* Imagen de la tarjeta 2 */}
        </div>
      </div>
    </div>

    {/* Tarjeta 3 */}
    <div className="bg-sky-700 rounded-2xl shadow-sm shadow-sky-500 outline outline-slate-400 -outline-offset-8">
      <div className="group overflow-hidden relative after:duration-500 before:duration-500 duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12 before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12 hover:rotate-12 flex justify-center items-center h-56 w-80 bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
        <div className="z-10 flex flex-col items-center gap-2">
          <img src="../../public/images/pngwing.com (12).png" alt="Descripción de la imagen 3" className="w-24 h-24 rounded-full" /> {/* Imagen de la tarjeta 3 */}
        </div>
      </div>
    </div>

    {/* Tarjeta 4 */}
    <div className="bg-sky-700 rounded-2xl shadow-sm shadow-sky-500 outline outline-slate-400 -outline-offset-8">
      <div className="group overflow-hidden relative after:duration-500 before:duration-500 duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12 before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12 hover:rotate-12 flex justify-center items-center h-56 w-80 bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
        <div className="z-10 flex flex-col items-center gap-2">
          <img src="../../public/images/pngwing.com (11).png" alt="Descripción de la imagen 4" className="w-24 h-24 rounded-full" /> {/* Imagen de la tarjeta 4 */}
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  );
};

export default Home;