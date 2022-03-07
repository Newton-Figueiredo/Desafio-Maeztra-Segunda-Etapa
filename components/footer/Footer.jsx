import Image from 'next/image'
import React from "react";

export default function Footer() {
  return (
    <div className=' bg-[#353535] h-[240px] lg:h-[85px] py-5 flex flex-col lg:flex-row justify-evenly' >
      <div className='flex flex-row justify-evenly lg:w-1/6  lg:items-center '>
        <Image src="/facebook.png" width={32} height={32} alt="Facebook icon" />
        <Image src="/linkedin.png" width={32} height={32} alt="Facebook icon" />
        <Image src="/instagram.png" width={32} height={32} alt="Facebook icon" />
        <Image src="/youtube.png" width={32} height={22} alt="Facebook icon" />

      </div>

      <div className='flex flex-row justify-evenly lg:w-1/6 lg:items-center '>
        <Image src="/visa.png" width={32} height={25} alt="Facebook icon" />
        <Image src="/mastercard.png" width={32} height={25} alt="Facebook icon" />
        <Image src="/visa.png" width={32} height={25} alt="Facebook icon" />
        <Image src="/mastercard.png" width={32} height={25} alt="Facebook icon" />
      </div>

      <div className='flex flex-row justify-evenly lg:w-1/6 lg:items-center '>
        <div className="vtex flex flex-col">
          <span className=' text-[10px] text-white'>Powered by</span>
          <Image src="/vtex.png" width={68} height={25} alt="Facebook icon" />
        </div>

        <div className="maeztra flex flex-col">
          <span className=' text-[10px] text-white'>Developed by</span>
          <Image src="/maeztra-logo-white.png" width={120} height={28} alt="Facebook icon" />
        </div>
      </div>
    </div>
  );
};