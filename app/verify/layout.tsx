import Nav from '../components/Nav'

export default function AboutLayout({ 
    children 
}: {
    children: React.ReactNode
}) {
    return (
        <main>
            <Nav />
            <div className='w-screen h-screen text-center overflow-hidden'>
                {children}
            </div>
        </main>
    )
}