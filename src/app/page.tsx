import React from 'react'
import Header from '@/components/Header';
import {Libre_Bodoni} from 'next/font/google';
import Image from 'next/image';

const libre = Libre_Bodoni ({
  subsets: ['latin'],
  display: 'swap',
});



const HomePage = () => {
  return (
    
    <div>

      <Header />
      <div className='w-[1366px] h-[825.56px] flex'>
        <div className='w-[891px] h-[573.59px]  ml-[60.49px] mt-[80.82px]'>
          <p className={`${libre.className} pt-10 text-[37.84px] font-bold px-5`}>IMPECCABLE <br/> CRAFTSMANSHIP AND <br /> FINESSE
          </p>
          <p className={`${libre.className} text-justify text-[29.24px] pt-10 px-5 font-medium text-[#787054] `}>An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.</p>
          <button className={`${libre.className} w-[247.67px] h-[49.02px] bg-[#787054] text-[25.8px] text-white mx-5 mt-10 rounded-md`  }>Explore Now</button>
        </div>
        <div className='w-[380.01px] h-[573.59px] mt-[60.82px] pt-7'>
          

          <Image src="/pic.png" height={573.59} width={421.38} alt='Pic' />
          
        </div>
      </div>
      
    </div>
  )
}

export default HomePage;