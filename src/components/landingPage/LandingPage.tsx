import CarShow from '../carShow/CarShow'
import Hero from '../hero/Hero'
import Features from '../features/Features'
import './landing.css'

export default function LandingPage() {
    return (
        <div className="landing-page">
            <Hero />
            <Features />
            <section className="py-16 bg-white">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold gradient-text mb-4">
                            Découvrez Notre Collection
                        </h2>
                        <p className="text-lg text-muted max-w-2xl mx-auto">
                            Explorez notre sélection exceptionnelle de véhicules de prestige, 
                            chacun choisi pour son excellence et son caractère unique.
                        </p>
                    </div>
                    <CarShow />
                </div>
            </section>
        </div>
    )
}