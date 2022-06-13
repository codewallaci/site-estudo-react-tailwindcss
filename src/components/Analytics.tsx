import React from "react";

import Laptop from "../assets/laptop.jpg";

export const Analytics = () => {
  return (
    <div className="w-full py-16 px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="laptop" />
        <div className="flex flex-col justify-center">
          <p className="font-bold text-[#009bd6]">PAINEL DE ANÁLISE DE DADOS</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Gerencie a análise de dados de forma centralizada
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button
            className="w-[200px] my-6 mx-auto py-2 bg-[#009bd6]
           text-white font-medium rounded-md md:mx-0"
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};
