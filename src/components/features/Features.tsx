import { FaCar, FaCalendarAlt, FaSearch, FaShieldAlt } from 'react-icons/fa'

export default function Features() {
    const features = [
        {
            icon: <FaCar className="w-8 h-8" />,
            title: "Collection Premium",
            description: "Une sélection rigoureuse de véhicules d'exception, inspectés et certifiés par nos experts."
        },
        {
            icon: <FaCalendarAlt className="w-8 h-8" />,
            title: "Rendez-vous Personnalisés",
            description: "Planifiez facilement vos visites et essais avec notre système de réservation en ligne."
        },
        {
            icon: <FaSearch className="w-8 h-8" />,
            title: "Recherche Avancée",
            description: "Trouvez le véhicule parfait grâce à nos filtres de recherche détaillés et intuitifs."
        },
        {
            icon: <FaShieldAlt className="w-8 h-8" />,
            title: "Garantie Qualité",
            description: "Tous nos véhicules sont accompagnés d'une garantie complète pour votre tranquillité d'esprit."
        }
    ]

    return (
        <section className="py-20 bg-gradient-to-br from-secondary-50 to-white">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 gradient-text">
                        Pourquoi Choisir Scuderia ?
                    </h2>
                    <p className="text-lg text-muted max-w-2xl mx-auto">
                        Nous nous engageons à vous offrir une expérience d'achat automobile exceptionnelle, 
                        alliant expertise, qualité et service personnalisé.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index} 
                            className="card hover-lift text-center group"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="card-body">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-4 text-secondary-900">
                                    {feature.title}
                                </h3>
                                <p className="text-muted leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}