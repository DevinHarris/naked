import Link from 'next/link';

export default function Nav() {
    return (
        <nav className='text-black w-screen flex justify-center items-center p-5'>
           <Link href="/" className='font-bold uppercase tracking-wider text-md'>n/ked.</Link> 
        </nav>
    )
}