"use client"

import Header from "@/components/header/Header";
import { useState } from "react";

export default function Appointments() {
    const [formData, setFormData] = useState({
        name: '',
        firstname: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-secondary-50">
            <Header />
            <div className="pt-20">
                <div className="hero py-16">
                    <div className="container text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Prendre Rendez-vous
                        </h1>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                            Planifiez votre visite pour découvrir nos véhicules d'exception
                        </p>
                    </div>
                </div>

                <div className="container py-16">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Form */}
                            <div className="card">
                                <div className="card-header">
                                    <h2 className="text-2xl font-bold text-secondary-900">
                                        Réservez votre créneau
                                    </h2>
                                    <p className="text-secondary-600 mt-2">
                                        Remplissez le formulaire ci-dessous et nous vous contacterons rapidement.
                                    </p>
                                </div>
                                
                                <div className="card-body">
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="form-group">
                                                <label className="form-label">Nom *</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="form-input"
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Prénom *</label>
                                                <input
                                                    type="text"
                                                    name="firstname"
                                                    value={formData.firstname}
                                                    onChange={handleChange}
                                                    className="form-input"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="form-label">Email *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="form-input"
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label className="form-label">Téléphone</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="form-input"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="form-group">
                                                <label className="form-label">Date souhaitée *</label>
                                                <input
                                                    type="date"
                                                    name="date"
                                                    value={formData.date}
                                                    onChange={handleChange}
                                                    className="form-input"
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Heure souhaitée</label>
                                                <input
                                                    type="time"
                                                    name="time"
                                                    value={formData.time}
                                                    onChange={handleChange}
                                                    className="form-input"
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="form-label">Message</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                rows={4}
                                                className="form-input resize-none"
                                                placeholder="Précisez le véhicule qui vous intéresse ou toute autre information..."
                                            />
                                        </div>

                                        <button type="submit" className="btn btn-primary w-full">
                                            Envoyer la demande
                                        </button>
                                    </form>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="space-y-8">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                                            Informations pratiques
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="flex items-start">
                                                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
                                                    <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-secondary-800">Horaires</h4>
                                                    <p className="text-secondary-600 text-sm">
                                                        Lun-Ven: 9h-18h<br />
                                                        Sam: 9h-17h<br />
                                                        Dim: Fermé
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start">
                                                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
                                                    <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-secondary-800">Adresse</h4>
                                                    <p className="text-secondary-600 text-sm">
                                                        123 Avenue des Champs-Élysées<br />
                                                        75008 Paris, France
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start">
                                                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3 mt-1">
                                                    <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-secondary-800">Contact</h4>
                                                    <p className="text-secondary-600 text-sm">
                                                        +33 1 23 45 67 89<br />
                                                        contact@scuderia.fr
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                                            Pourquoi prendre rendez-vous ?
                                        </h3>
                                        <ul className="space-y-3">
                                            <li className="flex items-start">
                                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-secondary-700 text-sm">Accueil personnalisé par nos experts</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-secondary-700 text-sm">Essai routier possible</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-secondary-700 text-sm">Conseil sur mesure selon vos besoins</span>
                                            </li>
                                            <li className="flex items-start">
                                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-secondary-700 text-sm">Financement et garanties expliqués</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}