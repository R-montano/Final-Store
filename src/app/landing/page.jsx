"use client";
import React, { useEffect, useState } from "react";

const LandingPage = () => {
  const [categorias, setCategorias] = useState({});

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const catImages = {};
        data.forEach((producto) => {
          if (!catImages[producto.category]) {
            catImages[producto.category] = producto.image;
          }
        });
        setCategorias(catImages);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="font-sans text-gray-900">
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-violet-900 via-violet-700 to-violet-600 text-white">
        <div className="relative z-10 px-6">
          <h1 className="text-5xl font-bold mb-4">
            Bienvenido a Tu Tienda EstiloYa!!!
          </h1>
          <p className="text-xl mb-6 max-w-2xl">
            Encuentra los mejores productos en un solo lugar: moda, tecnología y
            accesorios únicos para cada estilo.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-6 py-3 bg-teal-400 text-white font-semibold rounded-xl shadow hover:bg-teal-500 transition">
              Explorar Productos
            </button>
            <button className="px-6 py-3 border border-white text-white rounded-xl hover:bg-white hover:text-violet-900 transition">
              Ofertas Especiales
            </button>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-violet-700 mb-4">
          Sobre Nosotros
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Somos una tienda dedicada a ofrecer productos variados de calidad:
          desde ropa y calzado hasta tecnología y accesorios. Nuestro objetivo
          es que encuentres todo lo que necesitas en un solo lugar, con estilo y
          confianza.
        </p>
      </section>

      {/* Productos por Categoría */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-violet-700 mb-12">
          Nuestros Productos
        </h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Ropa */}
          {categorias["men's clothing"] && (
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition text-center">
              <div className="w-full h-40 flex items-center justify-center mb-4">
                <img
                  src={categorias["men's clothing"]}
                  alt="Ropa"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-teal-500 mb-2">Ropa</h3>
              <p className="text-gray-600">
                Camisetas, pantalones, chaquetas y más.
              </p>
            </div>
          )}

          {/* Tecnología */}
          {categorias["electronics"] && (
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition text-center">
              <div className="w-full h-40 flex items-center justify-center mb-4">
                <img
                  src={categorias["electronics"]}
                  alt="Tecnología"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-teal-500 mb-2">
                Tecnología
              </h3>
              <p className="text-gray-600">Accesorios y gadgets modernos.</p>
            </div>
          )}

          {/* Joyas / Accesorios */}
          {categorias["jewelery"] && (
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition text-center">
              <div className="w-full h-40 flex items-center justify-center mb-4">
                <img
                  src={categorias["jewelery"]}
                  alt="Joyas y Accesorios"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-teal-500 mb-2">
                Joyas y Accesorios
              </h3>
              <p className="text-gray-600">
                Anillos, aretes y collares únicos.
              </p>
            </div>
          )}

          {/* Bolsos y Mochilas */}
          {categorias["women's clothing"] && (
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition text-center">
              <div className="w-full h-40 flex items-center justify-center mb-4">
                <img
                  src={categorias["women's clothing"]}
                  alt="Bolsos y Mochilas"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-teal-500 mb-2">
                Bolsos y Mochilas
              </h3>
              <p className="text-gray-600">
                Desde bolsos elegantes hasta mochilas prácticas.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA final con degradado morado intenso */}
      <section className="py-20 px-6 bg-gradient-to-br from-violet-700 via-violet-600 to-violet-500 text-center text-white rounded-t-3xl">
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-6">
            ¡Descubre nuestros productos hoy mismo!
          </h2>
          <button className="px-8 py-4 bg-teal-500 text-white font-semibold rounded-xl shadow hover:bg-teal-600 transition">
            Comprar Ahora
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-violet-900 text-center text-violet-100">
        <p>
          © {new Date().getFullYear()} Tu Tienda EstiloYa!!!. Todos los derechos
          reservados.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
