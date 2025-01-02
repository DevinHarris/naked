"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import UseAnimations from 'react-useanimations';
import infinity from 'react-useanimations/lib/infinity';
import QRCode from 'react-qr-code';

import { supabase } from '@/supabase';


export default function JoinPage() {
    // const [name, setName] = useState('');
    // const [handle, setHandle] = useState('');
    // const [email, setEmail] = useState('');
    // const [user, setUser] = useState([]);
    // const [submitted, setSubmitted] = useState(false);


    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setSubmitted(true);

    //     try {
    //         const { data, error } = await supabase.from('users')
    //             .insert({
    //                 name,
    //                 email,
    //                 handle,
    //                 verified: false

    //             }).select();

    //         if (error) { throw error }

    //         if (data) {
    //             setUser(data)
    //         };

    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    // const SubmitButton = () => {

    //     return (
    //         submitted ? (
    //             <div>
    //                 <p style={{ fontSize: '0.6rem' }} className='my-3'>Scan your personal QR to continue verification on your phone.</p>
    //                 <button className='rounded-full bg-black font-bold text-white px-3 drop-shadow-md' 
    //         style={{ fontSize: '0.5rem' }}>
    //                     <UseAnimations fillColor='#c7c7c7' strokeColor='white' animation={infinity} />
    //         </button>
    //             </div>
    //         ) : <button className='rounded-full bg-black font-bold text-white px-3 py-2 drop-shadow-md' 
    //         style={{ fontSize: '0.5rem' }}>
    //                     Generate QR Code
    //         </button>
    //     )
    // }


    // return (
    //     <main className='flex w-screen h-screen text-white'>
    //         <aside className='w-1/3 bg-black flex flex-col justify-center items-center'>
    //             <Link href="/" className='font-bold uppercase tracking-wider text-xl'>get n/ked.</Link>
    //             <span style={{ fontSize: '0.4em' }} className='tracking-wider'>"honest techology"</span>
    //         </aside>
    //         <div className='w-2/3 px-32 text-black flex flex-col justify-center items-center'>
    //             <h1 className='font-bold'>Sign up for updates</h1>
    //             <p style={{ fontSize: '0.6rem' }} className='text-gray-400 font-medium m-3 text-center'>Welcome to <span className="font-bold uppercase tracking-wide">n/ked</span>, where your tech journey begins. Ready to personalize your experience? Enter your name and choose a handle that defines you in the digital realm.</p>
    //             <p style={{ fontSize: '0.6rem' }} className='text-gray-400 font-medium my-2 text-center'>Your QR code is your passport to the <span className="font-bold uppercase tracking-wide">n/ked</span> universe. It connects you seamlessly to our products and software. It's your key to unlocking a world of transparency, innovation, and tech tailored just for you. Let's get started on this exciting journey together.</p>


    //             <form className='w-full my-5' onSubmit={handleSubmit}>
    //                <div>
    //                     <label style={{ fontSize: '0.6rem' }} className='block font-medium text-gray-400' htmlFor='name'>{`${ name ? `Welcome, ${name}.` : 'Hello.' }`}</label>
    //                     <input type="text" className='form-input' name="name" required id="name" onChange={(e) => setName(e.target.value)} placeholder='What should we call you?' />
    //                </div>
    //                <div className='my-2'>
    //                     <label style={{ fontSize: '0.6rem' }} className='block font-medium text-gray-400' htmlFor='handle'>Your <span className="font-bold uppercase tracking-wide">n/ked.</span> handle</label>
    //                     <input type="text" className='form-input' name="handle" id="handle" required onChange={(e) => setHandle(e.target.value)} placeholder='Example: verify.nked.com/jackdonaghy' />
    //                </div>

                   
                   
    //             <SubmitButton />

    //             <Link href="/learn" className='font-medium mx-5 text-gray-400' 
    //         style={{ fontSize: '0.7rem' }}>
    //                     <span>Learn</span>
    //         </Link>
    //             </form>
    //             {
    //                 user.length ? (
    //                     <div className="w-1/5">
    //                         <QRCode title={`Welcome to nked. ${name}`} value={`<a href=".http://192.168.50.159:3000/verify/${user[0].id}">Welcome to n/ked, ${name}</a>`} style={{ maxWidth: '100%', height: 'auto', width: '100%' }} />
    //                     </div>
    //                 ) : null
    //             }
    //         </div>

    //     </main>
    // )


    return (
        <div>Join</div>
    )
} 