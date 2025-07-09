"use client"

import { CarList } from "@/components/CarList";
import CarInfo from "@/components/carInfo/CarInfo";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "@/components/header/Header";
import styles from "./cars.module.css";

type Car = {
    name: string,
    model: string,
    price: number,
    color: string,
    power: number,
    placeNumber: number,
    images: {
        imageId: number,
        url: string
    },
    brand: {
        brandId: number, name: string
    },
    carTypes: {carTypeId: number, name: string},
    motorTypes: {motorTypeId: number, name: string}
} 

export default function Car() {
    const [carList, setCarList] = useState<Car[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await axios.get("http://localhost:8080/car_show/car");
                setCarList(response.data);
            } catch (error) {
                console.error("Error fetching car data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCars();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-secondary-50">
                <Header />
                <div className="container py-20">
                    <div className="flex items-center justify-center">
                        <div className="loading"></div>
                        <span className="ml-3 text-secondary-600">Chargement des véhicules...</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-secondary-50">
            <Header />
            <div className="pt-20">
                <div className="hero py-16">
                    <div className="container text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Notre Collection
                        </h1>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                            Découvrez notre sélection exceptionnelle de véhicules de prestige
                        </p>
                    </div>
                </div>

                <div className="container py-16">
                    {carList.length === 0 ? (
                        <div className="text-center py-20">
                            <div className="text-6xl mb-4">🚗</div>
                            <h3 className="text-2xl font-semibold text-secondary-700 mb-2">
                                Aucun véhicule disponible
                            </h3>
                            <p className="text-secondary-500">
                                Notre collection sera bientôt mise à jour avec de nouveaux véhicules.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {carList.map((car, index) => (
                                <div key={index} className="card hover-lift group">
                                    <div className="relative h-64 overflow-hidden rounded-t-xl">
                                        <Image 
                                            src={car.images.url} 
                                            alt={`${car.brand.name} ${car.model}`}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 right-4">
                                            <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                                {car.brand.name}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div className="card-body">
                                        <h3 className="text-xl font-bold text-secondary-900 mb-2">
                                            {car.model}
                                        </h3>
                                        
                                        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                                            <div className="flex items-center text-secondary-600">
                                                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                                                {car.color}
                                            </div>
                                            <div className="flex items-center text-secondary-600">
                                                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                                                {car.power} CV
                                            </div>
                                            <div className="flex items-center text-secondary-600">
                                                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                                                {car.placeNumber} places
                                            </div>
                                            <div className="flex items-center text-secondary-600">
                                                <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                                                {car.motorTypes.name}
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <span className="text-2xl font-bold text-primary-600">
                                                    {car.price.toLocaleString()} €
                                                </span>
                                            </div>
                                            <button className="btn btn-primary">
                                                Voir détails
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}