'use client'

import { useState, useEffect } from 'react';
import UseAnimations from 'react-useanimations';
import infinity from 'react-useanimations/lib/infinity';
import loading2 from 'react-useanimations/lib/loading2'
import { useParams } from 'next/navigation'
import { supabase } from '@/supabase';

export default function VerifyPage() {
    const { id } = useParams();
    const [user, setUser] = useState([]);
    const [verified, setVerified] = useState(true)

    useEffect(() => {
        handleGetUser();

    }, [user])

    
    const handleGetUser = async () => {

        try {
            const { data, error } = await supabase.from('users')
                .select()
                .eq('id', id)

                if (error) { throw error };

                // if (data) {
                //     setTimeout(() => {
                //         setUser(data);
                //         setVerified(data[0].verified)
                //     }, 4000)
                // }
        } catch (error) {
            console.log(error);
        }
    }

    const handleVerify = async () => {
        console.log('clicked')

        try {
            const { data, error } = await supabase.from('users')
                .update({
                    verified: true
                }).eq('id', id).select();

                if (error) { throw error }

                if (data) {
                    setVerified(data[0].verified);
                }
                
        } catch(error) {
            console.log(error);
        }
    }

    

    return (
       <>
        {
            user.length ? (
                <div className='flex flex-col w-full h-full items-center py-10'>
                    <h1>Hi, <span className='font-bold'>{user[0].name.split(" ")[0]}.</span></h1>
                    <p className='my-2'>We're ready to kick off your <span className="font-bold uppercase tracking-wide">n/ked</span> journey.</p>
                    <p>Click the button to get started.</p>
                    <button className='p-3 rounded-full bg-black items-center my-36 text-white' onClick={handleVerify}>
                        <UseAnimations animation={loading2} fillColor='#ffffff' strokeColor='#c7c7c7' />
                    </button>
                </div>
            ) : 
                <div className='flex flex-col w-full h-full items-center py-10'>
                    <h1 className=''>Hang tight, we're fine-tuning the details...</h1>
                    <div className='p-3 my-3 rounded-full bg-black'>
                        <UseAnimations fillColor='#c7c7c7' strokeColor='white' animation={infinity} />
                    </div>
                </div>
        }

        {
            verified ? (
                <div className='flex flex-col w-full h-full items-center py-10'>
                    <h1 className=''>Fantastic! You're now officially part of the n/ked community.</h1>
                    <p>Ready to unlock innovation, transparency, and a personalized experience? Let's get started, what's the best way to contact you?</p>
                    <div className='p-3 my-3 '>
                        <form>
                            <div>
                            <label className='block text-xs  font-medium text-gray-400' htmlFor='name'>Email</label>
                            <input type="text" className='form-input' name="name"  id="name" />
                        </div>
                        <div>
                                <label className='block text-xs font-medium text-gray-400' htmlFor='handle'>Phone</label>
                                <input type="text" className='form-input' name="handle" id="handle"   />
                        </div>

                        </form>
                    </div>
                </div>
            ) : null 
        }
       </>
    )
}