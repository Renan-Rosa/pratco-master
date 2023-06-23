import React from 'react';
import Logo from '../assets/logo.png'
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300' id='contato'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'><img className='w-[100px] my-4' src={Logo} alt='/'/></h1>
        <p className='py-4'>Valorizamos a sua confiança em nós como seu fornecedor de confiança para uma alimentação saudável e gostosa. Descubra o prazer de comer bem com os produtos da nossa empresa</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <button><FaFacebookSquare size={30} /></button>
            <button><FaInstagram size={30} /></button>
            <button><FaTwitterSquare size={30} /></button>
            <button><FaGithubSquare size={30} /></button>
            <button><FaDribbbleSquare size={30} /></button>
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'>Soluções</h6>
        <ul>
            <li className='py-2 text-sm'>Analises</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Comércio</li>
            <li className='py-2 text-sm'>Logística</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Suporte</h6>
        <ul>
            <li className='py-2 text-sm'>Preço</li>
            <li className='py-2 text-sm'>Documentação</li>
            <li className='py-2 text-sm'>Guias</li>
            <li className='py-2 text-sm'>API status</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Pratco.</h6>
        <ul>
            <li className='py-2 text-sm'>Sobre</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Trabalhos</li>
            <li className='py-2 text-sm'>Colaboradores</li>
            <li className='py-2 text-sm'>Serviços</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Legal</h6>
        <ul>
            <li className='py-2 text-sm'>Alegações</li>
            <li className='py-2 text-sm'>Politícas</li>
            <li className='py-2 text-sm'>Termos</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;
