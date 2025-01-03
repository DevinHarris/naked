'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {

  const [status, setStatus] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div>
      <main className="flex flex-col w-screen h-screen justify-center items-center bg-black">
        <div className='text-white'>
          {
            status && (
              <TypeAnimation 
            sequence={[
              'be change.',
              1000,
              'be open.',
              1000,
              "hi. we're naked.",
              200,
              "hi. we're n(opps.)ked.",
              200,
              "hi. we're n/ked.",
              3000,
              () => setStatus((prevState) => !prevState)
            ]}
            wrapper='h1'
            speed={50}
            style={{
              fontSize: '4.5em', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em'
            }}
            />
            ) 
            
            
          }

          {

            !status &&(
              <div>
                
                <h1 className='font-bold uppercase tracking-wider' style={{ fontSize: '11rem' }}>be n/ked.</h1>
                <div className='flex justify-between text-slate-700'>
                  <div>
                    <span className='text-xs block'>ATL - GA</span>
                    <span className='text-xs'>(33.7833° N, 84.3831° W)</span>
                  </div>
                  
                    <Link href="/join" className='text-xs font-bold text-slate-400'>GET N/KED.</Link>
                    <Link href="/products" className='text-xs font-bold text-slate-400'>OUR PRODUCTS</Link>
                    <Link href="/learn" className='text-xs'>BRAND</Link>
                </div>
              </div>
            )
          }
        </div>
    </main>
    </div>
  )
}
