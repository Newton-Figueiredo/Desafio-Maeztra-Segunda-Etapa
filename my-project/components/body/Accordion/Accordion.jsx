
import React, { useState } from 'react';
import { PlusIcon } from "../../Icons/index"

export default function AccordionSection() {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }
    setClicked(index);
  };
  return (
    <>
      <div className="accordion lg:hidden" id="accordionExample5">

        <div className="accordion-item bg-white border-0">
          <h2 className="accordion-header mb-0" id="headingOne5">
            <button onClick={() => toggle(1)} key={1} className="
        accordion-button
        relative
        flex justify-between
        items-center
        w-full
        py-4
        px-5
        text-base text-[#353535] text-left font-semibold
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne5" aria-expanded="true"
              aria-controls="collapseOne5">
              Informações
              {PlusIcon}
            </button>

          </h2>
          <div id="collapseOne5" className="accordion-collapse collapse show" aria-labelledby="headingOne5">
            {clicked === 1 ? (
              <div className="accordion-body py-4 px-5">
                <ul>
                  <li className='py-3'>Quem Somos </li>
                  <li className='py-3'>Prazo de Envio </li>
                  <li className='py-3'> Trocas e Devoluções </li>
                  <li className='py-3'> Promoções e Cupons</li>
                </ul>
              </div>) : null}

          </div>
        </div>

        <div className="accordion-item bg-white border-0 border-gray-200">
          <h2 className="accordion-header mb-0" id="headingOne5">
            <button onClick={() => toggle(2)} key={2} className="
        accordion-button
        relative
        flex justify-between
        items-center
        w-full
        py-4
        px-5
        text-base text-[#353535] text-left font-semibold
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne5" aria-expanded="true"
              aria-controls="collapseOne5">
              Minha Conta
              {PlusIcon}
            </button>
          </h2>
          <div id="collapseOne5" className="accordion-collapse collapse show" aria-labelledby="headingOne5">
            {clicked === 2 ? (
              <div className="accordion-body py-4 px-5">
                <ul>
                  <li className='py-3'>Minha Conta </li>
                  <li className='py-3'>Meus Pedidos </li>
                  <li className='py-3'> Cadastre-se </li>
                </ul>
              </div>)
              : null}

          </div>
        </div>
        <div className="accordion-item bg-white border-0 border-gray-200">
          <h2 className="accordion-header mb-0" id="headingOne5">
            <button onClick={() => toggle(3)} key={3} className="
        accordion-button
        relative
        flex justify-between
        items-center
        w-full
        py-4
        px-5
        text-base text-[#353535] text-left font-semibold
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne5" aria-expanded="true"
              aria-controls="collapseOne5">
              Onde nos Encontrar
              {PlusIcon}
            </button>
          </h2>
          <div id="collapseOne5" className="accordion-collapse collapse show" aria-labelledby="headingOne5">
            {clicked === 3 ? (
              <div className="accordion-body py-4 px-5">
                <ul>
                  <li className='py-3'> Lojas</li>
                  <li className='py-3'> Endereço </li>
                </ul>
              </div>) : null}
          </div>
        </div>
      </div>

      <div className="accordion-desk hidden lg:flex flex-row justify-center items-center" id="accordionExample5">
        <div className='max-w-screen-2xl flex flex-row items-start py-6'>
          <div className='px-20' >
            <ul>
              <li className='py-3 text-[#353535] text-base font-semibold'>Informações </li>
              <li className='py-3 text-xs'> Quem Somos </li>
              <li className='py-3 text-xs'> Prazo de Envio </li>
              <li className='py-3 text-xs'> Trocas e Devoluções </li>
              <li className='py-3 text-xs'> Promoções e Cupons</li>
            </ul>
          </div >
          <div className='px-20'> 
            <ul>
              <li className='py-3 text-[#353535] text-base font-semibold'>Minha Conta </li>
              <li className='py-3 text-xs'> Minha Conta </li>
              <li className='py-3 text-xs'> Meus Pedidos </li>
              <li className='py-3 text-xs'> Cadastre-se </li>
            </ul>
          </div>
          <div className='px-20'>
            <ul>
              <li className='py-3 text-[#353535] text-base font-semibold'> Onde nos Encontrar </li>
              <li className='py-3 text-xs'> Lojas</li>
              <li className='py-3 text-xs'> Endereço </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}