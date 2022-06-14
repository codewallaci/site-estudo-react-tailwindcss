import React from "react";

import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

export const Cards = () => {
  return (
    <div className="w-full py-[10rem] bg-white">
      <div
        id="price"
        className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8"
      >
        <div className="w-[90%] shadow-xl hover:shadow-blue-500 flex flex-col p-4 m-4 mx-[20px] rounded-lg hover:scale-105 duration-300 border border-blue-900 hover:border-blue-300">
          <img
            className="w-20 mx-auto mt-1 bg-transparent"
            src={Single}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8">Único usuário</h2>
          <p className="text-center text-4xl font-bold">R$99,99</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB de armazenamento</p>
            <p className="py-2 border-b mx-8 ">1 usuário</p>
            <p className="py-2 border-b mx-8 ">Velocidade de 2 GB</p>
          </div>
          <button
            className="w-[200px] my-6 mx-auto py-2 bg-[#00b8ff]
             text-white font-medium rounded-md"
          >
            Iniciar avaliação
          </button>
        </div>
        <div className="w-[90%] shadow-xl hover:shadow-blue-500 flex flex-col p-4 m-4 mx-[20px]  rounded-lg hover:scale-105 duration-300 border border-blue-900 hover:border-blue-300">
          <img
            className="w-20 mx-auto mt-1 bg-transparent"
            src={Double}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-8">Dois usuário</h2>
          <p className="text-center text-4xl font-bold">R$150,00</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">800 GB de armazenamento</p>
            <p className="py-2 border-b mx-8 ">2 usuário</p>
            <p className="py-2 border-b mx-8 ">Velocidade de 5 GB</p>
          </div>
          <button
            className="w-[200px] my-6 mx-auto py-2 bg-[#009bd6]
             text-white font-medium rounded-md"
          >
            Iniciar avaliação
          </button>
        </div>
        <div className="w-[90%] shadow-xl hover:shadow-blue-500 flex flex-col p-4 m-4 mx-[20px] rounded-lg hover:scale-105 duration-300 border border-blue-900 hover:border-blue-300">
          <img
            className="w-20 mx-auto mt-1 bg-transparent"
            src={Triple}
            alt=""
          />
          <h2 className="text-2xl font-bold text-center py-4">Três usuário</h2>
          <div className="flex justify-center items-center">
            <div className=" bg-blue-700 w-[70%] rounded-md py-2">
              <p className="text-center text-white font-bold">MELHOR PLANO</p>
            </div>
          </div>
          <p className="text-center text-4xl font-bold">R$199,99</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1000 GB de armazenamento</p>
            <p className="py-2 border-b mx-8 ">3 usuário</p>
            <p className="py-2 border-b mx-8 ">Velocidade de 10 GB</p>
          </div>
          <button
            className="w-[200px] my-6 mx-auto py-2 bg-[#00b8ff]
             text-white font-medium rounded-md"
          >
            Iniciar avaliação
          </button>
        </div>
      </div>
    </div>
  );
};
