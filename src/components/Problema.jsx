import React from "react";
import fome from "../assets/fome.jpg";

const Problema = () => {
  return (
    <div className="w-full bg-white py-16 px-4" id="problema">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={fome} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">Problema</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            O Desperdício e a Fome
          </h1>
          <p>
            O desperdício de comida no Brasil é um problema significativo, com
            aproximadamente 30% da produção de alimentos perdida ao longo da
            cadeia, devido a problemas como manejo inadequado, transporte,
            armazenamento precário e descarte desnecessário. O desperdício
            também ocorre nas residências, por má gestão e falta de
            planejamento. Isso tem consequências econômicas, ambientais e
            sociais, incluindo impactos nos recursos naturais e aumento das
            emissões de gases de efeito estufa. Para combater esse problema, são
            necessárias medidas como investimentos em infraestrutura, educação,
            incentivos para doações e práticas de gestão sustentável.
          </p>
          <button className="bg-black text-[#44ee77] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Saiba mais
          </button>
        </div>
      </div>
    </div>
  );
};

export default Problema;
