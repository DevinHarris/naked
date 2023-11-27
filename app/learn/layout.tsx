import Nav from '../components/Nav'

export default function AboutLayout({ 
    children 
}: {
    children: React.ReactNode
}) {
    return (
        <main>
            <Nav />
            <div className='px-16 py-12 text-center'>
                {children}
            </div>
        </main>
    )
}