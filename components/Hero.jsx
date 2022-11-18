import Image from "next/image";
import { global } from "styled-jsx/css";

export function Hero({heading, message}) {
  return (
    <div className='flex items-center justify-center h-screen mb-6 bg-fixed bg-center bg-cover'>
      {/* Overlay */}
      <Image src={'/alex-perez-NLUkAA-nDdE-unsplash.jpg'} alt="beach view" loading="eager" fill className="-z-1 relative"/>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-10rem]'>
        <h2 className='text-5xl font-bold'>{heading}</h2>
        <p className='py-5 text-xl'>{message}</p>
        <button className='px-8 py-2 border'>Book</button>
      </div>
    </div>
  );
}
