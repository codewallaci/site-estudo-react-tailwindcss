import React from "react";

export const Newsletter = () => {
  return (
    <div id="contact" className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Quer dicas e truques para otimizar seu fluxo?
          </h1>
          <p>Inscreva-se nossa newsletter e fique por dentro das novidades.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="px-3 mx-1 py-2 flex w-[80%] md:w-[100%] rounded-md text-black"
              type="email"
              placeholder="Digite seu email"
            />
            <button
              className="w-[200px] my-6 mx-auto py-2 bg-[#009bd6]
           text-white font-medium rounded-md md:mx-0 md:ml-4"
            >
              Notifique-me
            </button>
          </div>
          <p>
            Preocupamo-nos com a proteção dos seus dados. Leia nossa
            <a href="/" className="text-[#00b8ff]">
              {" "}
              Política de Privacidade.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
