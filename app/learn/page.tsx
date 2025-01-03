import styles from './LearnPage.module.scss';

export default function Learn() {
    return (
        <main className={styles.learnPageCont}>
            <h1>about <span className="font-bold tracking-wide">N/KED. <sup className={styles.pronunciation}>(naked)</sup></span></h1>
            <div className="about-content">
            <p>Welcome to <span className="font-bold uppercase tracking-wide">n/ked</span>,where we're rewriting the rules of the tech game with a laser focus on transparency. Our mission is clear: to bridge the gap between users and technology. Tired of convoluted pricing models and obscure tech specs? We've got your back. Whether you're a tech enthusiast or a casual user, we're committed to making technology accessible, understandable, and, most importantly, yours.</p>
            <p>In a landscape cluttered with complexity, <span className="font-bold uppercase tracking-wide">n/ked</span> is your beacon of clarity. We believe in a future where every user has a clear understanding of the tech they're using. No more hidden fees, no more cryptic algorithms. From our sleek hardware designs to our sophisticated software solutions, we're pulling back the curtain to empower you with knowledge. It's tech, unmasked.</p>
            <p>But we're not just about transparency; we're also on a mission to close the communication gap. At <span className="font-bold uppercase tracking-wide">n/ked</span>, we're developing technologies, software, and hardware that are not only easy to set up but also intuitively work with modular features. These features are seamlessly integrated, hidden away for the less experienced users, yet right at the fingertips of power users. We're creating a tech experience where simplicity meets sophistication, ensuring that every user, regardless of their tech prowess, can harness the full potential of our products.</p>
            <p>Join us on this journey to redefine the tech landscape. At <span className="font-bold uppercase tracking-wide">n/ked</span>, transparency is not just a trend; it's the backbone of our philosophy. Let's break down barriers, demystify the digital, and redefine what it means to be plugged in. Welcome to the new era of n/ked – where transparency meets innovation, and technology is as accessible as it is powerful. #TechRevolution #ClarityInTech #UnveilTheFuture</p>
            </div>
        </main>
    )
}