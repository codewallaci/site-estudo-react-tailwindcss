import React from "react";
import Typed from "react-typed";

export const Hero = () => {
  return (
    <div className="text-white">
      <div className="mt-[-96px] w-full h-screen max-auto text-center flex flex-col justify-center items-center">
        <p className="text-[#009bd6] uppercase font-bold p-2">
          Somos apaixonados por tecnologia
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-3xl font-bold md:py-6">
          MOVIDOS A INOVAÇÃO
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Uma paixão inexplicável por
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#00b8ff]"
            strings={["React", "TypeScript", "JavaScript", "Python"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4"> .</p>
        </div>
        <p className="md:text-lg text-xs pl-3 pr-3 text-zinc-200">
          Usamos tecnologia o dia inteiro, mas por que não buscamos aprender a
          ler e escrever esses códigos de programação?
        </p>
        <button
          className="w-[200px] my-6 mx-auto py-2 bg-[#00b8ff]
             text-white font-medium rounded-md"
        >
          Comprar
        </button>
      </div>
    </div>
  );
};
