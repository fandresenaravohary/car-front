import Link from 'next/link'

export default function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content text-center">
                    <div className="fade-in-up">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Bienvenue chez{' '}
                            <span className="block text-yellow-400">Scuderia</span>
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                            Découvrez l'excellence automobile avec notre collection exclusive 
                            de véhicules de prestige et nos services personnalisés.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/cars" className="btn btn-primary text-lg px-8 py-4">
                                Voir nos véhicules
                            </Link>
                            <Link href="/appointments" className="btn btn-secondary text-lg px-8 py-4 bg-white/10 border-white/20 text-white hover:bg-white/20">
                                Prendre rendez-vous
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}