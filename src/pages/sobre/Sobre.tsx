                                                                                                                                                                             import './Sobre.css';

import './Sobre.css';

function Sobre() {
  return (
    <div className="bg-indigo-900 h-screen flex justify-center items-center">
      <div className="container text-white text-center">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h1 className='text-6xl font-bold'>Sobre o nosso Projeto</h1>
            <p className='text-xl text-justify'>
              O "Desenvolvendo o Bem - DOB" é um projeto inovador voltado para a erradicação da pobreza, alinhado ao Objetivo de Desenvolvimento Sustentável 1 (ODS 1): Erradicação da Pobreza. O foco central está na criação de uma plataforma de comércio online para conectar comunidades carentes a oportunidades econômicas sustentáveis, promovendo inclusão econômica e negócios justos.
            </p>
            <div className="flex justify-around gap-4">
            </div>
          </div>
          <div className="flex justify-center ">
          </div>
        </div>
      </div>
    </div>
  )
} 

export default Sobre;
