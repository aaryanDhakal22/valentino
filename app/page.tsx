'use client';
import { useState } from 'react';
import GIFComponent from '../components/gif.component';
import Buttons from '@/components/buttons.component';

export default function Home() {

  const [counter, setCounter] = useState<number>(1)
  
  return (
    <div className='w-screen h-screen'>
      <div className='flex flex-col h-screen items-center '>
          <GIFComponent counter={counter} />
          <Buttons counter={counter} setCounter={setCounter}/>
      </div>
    </div>
  );
}
