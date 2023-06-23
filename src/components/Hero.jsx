import React from 'react';
import Typed from 'react-typed';
import Logo from "../assets/logo.png"

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#44ee77] font-bold p-2'>
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
        <img className='w-[400px] mx-auto my-4' src={Logo} alt='/'/>
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Easy, Fast and Pratical for
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['buy', 'sell', 'manage']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Em breve uma nova plataforma e oportunidade para o seu negócio</p>
        <button className='bg-[#44ee77] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Em breve!</button>
      </div>
    </div>
  );
};

export default Hero;
