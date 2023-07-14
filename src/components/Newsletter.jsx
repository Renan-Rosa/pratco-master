import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4" id="proposta">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            O que a Pratco propõe?
          </h1>
          <p>
            A plataforma é uma inovadora solução que ressignifica o valor dos
            alimentos próximos à data de vencimento. Conectando estabelecimentos
            e consumidores, ela oferece uma ampla variedade de produtos com
            descontos significativos, incentivando uma cultura de consumo
            consciente e evitando o desperdício. Com informações detalhadas
            sobre cada item e um processo de compra simples e seguro, a
            plataforma proporciona uma experiência acessível, econômica e
            sustentável para todos.
          </p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Coloque seu Email"
            />
            <button className="bg-[#44ee77] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
              Enviar
            </button>
          </div>
          <p>
            Nós podemos mudar o seu negócio. Leia nossos termos{" "}
            <button className="text-[#44ee77]">Política de Privacidade.</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
