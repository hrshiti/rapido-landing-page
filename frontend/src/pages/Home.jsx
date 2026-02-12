import React, { useState } from 'react';
import DownloadAppModal from '../components/DownloadAppModal';
import Header from '../components/Header';
import '../App.css';

// Importing assets
import Footer from '../components/Footer';
import Logo from '../assets/Genzo Logo.png';
import PilotLogo from '../assets/Genzo Pilot Logo.png';
import BikeIcon from '../assets/Icons-20260210T052952Z-3-001/Icons/Bike.png';
import AutoIcon from '../assets/Icons-20260210T052952Z-3-001/Icons/Auto Rickshaw.png';
import ERickshawIcon from '../assets/Icons-20260210T052952Z-3-001/Icons/eRickshaw.png';
import ParcelIcon from '../assets/Icons-20260210T052952Z-3-001/Icons/Parcel.png';
import TaxiIcon from '../assets/Icons-20260210T052952Z-3-001/Icons/Taxi.png';

// Import downloaded images
import Ride1 from "../assets/Images for Website with Titles/1_Quick Rides, Easy on the Pocket.jpg";
import Ride2 from "../assets/Images for Website with Titles/2_Quick Rides, Easy on the Pocket.jpg";
import Ride3 from "../assets/Images for Website with Titles/3_Quick Rides, Easy on the Pocket.jpg";
import Ride4 from "../assets/Images for Website with Titles/4_Quick Rides, Easy on the Pocket.jpg";
import Driver1 from "../assets/Images for Website with Titles/1_Log In Anytime. Earn Anytime.jpg";
import Driver2 from "../assets/Images for Website with Titles/2_Log In Anytime. Earn Anytime.jpg";
import SafetyImg from "../assets/Images for Website with Titles/Everyones Safety Matters.jpg";

function Home() {
    const [pickup, setPickup] = useState('');
    const [drop, setDrop] = useState('');

    const services = [
        { name: 'Bike', icon: BikeIcon },
        { name: 'Auto', icon: AutoIcon },
        { name: 'eRickshaw', icon: ERickshawIcon },
        { name: 'Parcel', icon: ParcelIcon },
        { name: 'Taxi', icon: TaxiIcon },
    ];

    return (
        <div className="font-sans text-gray-800">
            {/* Header */}
            {/* Header */}
            <Header />

            {/* Hero Section */}
            <section className="relative flex flex-col pt-16 items-center bg-gray-50 overflow-hidden" style={{ minHeight: '80vh' }}>
                {/* Background Map */}
                <div className="absolute inset-0 z-0">
                    <div className="w-full h-full bg-cover bg-center opacity-30" style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg")' }}></div>
                </div>

                <div className="relative z-10 w-full max-w-3xl text-center px-4 mt-8">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-gray-900 tracking-tight">
                        Ride Anywhere. Genzo Everywhere.
                    </h1>

                    <div className="w-full mx-auto flex flex-col gap-5 max-w-2xl">
                        {/* Pickup Input Card */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 flex items-center px-6 py-4 hover:shadow-md transition-shadow">
                            <div className="text-gray-900 text-xl mr-5">
                                <div className="w-2 h-2 rounded-full bg-black"></div>
                            </div>
                            <input
                                type="text"
                                placeholder="Enter Pickup Location"
                                className="w-full text-lg text-gray-700 outline-none placeholder-gray-400 font-normal"
                                value={pickup}
                                onChange={(e) => setPickup(e.target.value)}
                            />
                        </div>

                        {/* Drop Input Card */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 flex items-center px-6 py-4 hover:shadow-md transition-shadow">
                            <div className="text-gray-900 text-xl mr-5">
                                <div className="w-2 h-2 rounded-full border-2 border-black"></div>
                            </div>
                            <input
                                type="text"
                                placeholder="Enter Drop Location"
                                className="w-full text-lg text-gray-700 outline-none placeholder-gray-400 font-normal"
                                value={drop}
                                onChange={(e) => setDrop(e.target.value)}
                            />
                        </div>

                        <button className="w-full mt-4 py-4 rounded-lg font-bold text-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-black bg-[#FFBC00] hover:bg-white">
                            Book Ride
                        </button>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-10 md:py-20 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-gray-900 leading-tight">
                        Our Services
                        {/* Orange Underline */}
                        <div className="h-2 w-16 mt-2 bg-[#FFBC00]"></div>
                    </h2>

                    {/* 5 columns layout */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
                        {services.map((service, index) => (
                            <div key={index} className="flex flex-col items-center group cursor-pointer transition-all hover:-translate-y-1">
                                <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-50 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-center mb-6 group-hover:shadow-md transition-all p-3 hover:border-[#FFBC00]">
                                    <img src={service.icon} alt={service.name} className="w-full h-full object-contain filter drop-shadow-sm mix-blend-multiply" />
                                </div>
                                <span className="text-xl font-bold text-gray-900 text-center">{service.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Info Section 1: Quick Rides */}
            <section className="py-16 md:py-32 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10 md:gap-16">
                    {/* Text Content */}
                    <div className="md:w-1/2 text-left">
                        <h2 className="text-3xl md:text-6xl font-extrabold mb-8 leading-tight text-gray-900">Quick Rides,<br />Easy on the Pocket</h2>
                        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-lg leading-relaxed">
                            At Genzo, we make sure you get quick rides without worrying about high fares, so every trip stays easy on your pocket.
                        </p>
                        <button className="px-10 py-4 rounded-full font-bold text-lg text-black transition-all transform hover:scale-105 hover:bg-white shadow-xl bg-[#FFBC00]">
                            Book a ride &rarr;
                        </button>
                    </div>

                    {/* Image Grid */}
                    <div className="md:w-1/2 w-full grid grid-cols-2 gap-6">
                        <div className="rounded-[2.5rem] overflow-hidden bg-gray-200 transform hover:scale-[1.02] transition-transform shadow-lg" style={{ aspectRatio: '3/4' }}>
                            <img src={Ride1} alt="Quick Ride 1" className="w-full h-full object-cover" />
                        </div>
                        <div className="rounded-[2.5rem] overflow-hidden bg-gray-200 mt-12 transform hover:scale-[1.02] transition-transform shadow-lg" style={{ aspectRatio: '3/4' }}>
                            <img src={Ride2} alt="Quick Ride 2" className="w-full h-full object-cover" />
                        </div>
                        <div className="rounded-[2.5rem] overflow-hidden bg-gray-200 -mt-12 transform hover:scale-[1.02] transition-transform shadow-lg" style={{ aspectRatio: '3/4' }}>
                            <img src={Ride3} alt="Quick Ride 3" className="w-full h-full object-cover" />
                        </div>
                        <div className="rounded-[2.5rem] overflow-hidden bg-gray-200 transform hover:scale-[1.02] transition-transform shadow-lg" style={{ aspectRatio: '3/4' }}>
                            <img src={Ride4} alt="Quick Ride 4" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Info Section 2: Flexible Hours */}
            <section className="py-16 md:py-32 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
                    {/* Text Content */}
                    <div className="md:w-1/2 text-left">
                        <h2 className="text-3xl md:text-6xl font-extrabold mb-8 leading-tight text-gray-900">Log In Anytime.<br />Earn Anytime.</h2>
                        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-lg leading-relaxed">
                            Join Genzo as a Pilot and enjoy flexible work with earnings based on availability.
                        </p>
                        <button className="px-10 py-4 rounded-full font-bold text-lg text-black transition-all transform hover:scale-105 shadow-xl bg-[#FFBC00] hover:bg-white">
                            Join as Pilot &rarr;
                        </button>
                    </div>

                    {/* Image Grid */}
                    <div className="md:w-1/2 w-full grid grid-cols-2 gap-6">
                        <div className="rounded-[2.5rem] overflow-hidden bg-gray-200 transform hover:scale-[1.02] transition-transform shadow-lg" style={{ aspectRatio: '3/4' }}>
                            <img src={Driver1} alt="Flexible Hours 1" className="w-full h-full object-cover" />
                        </div>
                        <div className="rounded-[2.5rem] overflow-hidden bg-gray-200 mt-12 transform hover:scale-[1.02] transition-transform shadow-lg" style={{ aspectRatio: '3/4' }}>
                            <img src={Driver2} alt="Flexible Hours 2" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Safety For All Section (New) */}
            <section className="py-12 md:py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10 md:gap-16">
                    <div className="md:w-1/2 text-left">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                            Everyone's Safety Matters
                            <div className="h-2 w-20 bg-[#FFBC00] mt-3 rounded-full"></div>
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                            At Genzo, everyone's safety matters, and we continuously work to ensure safe, reliable, and comfortable rides.
                        </p>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <div className="rounded-[2.5rem] overflow-hidden shadow-lg h-[400px]">
                            <img src={SafetyImg} alt="Safety" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Download Now Section (New) */}
            <section className="bg-black py-10 md:py-20 text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
                        Download Now
                        <div className="h-1 w-20 bg-[#FFE755] mx-auto mt-4 rounded-full"></div>
                    </h2>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                        {/* App Card 1 */}
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 rounded-2xl bg-[#FFE755] flex items-center justify-center mb-4">
                                <img src={Logo} alt="Genzo User App" className="w-16 h-16 object-contain rounded-full" />
                            </div>
                            <p className="text-white text-lg font-bold">Genzo: Bike-Taxi,<br />Auto & Cabs</p>
                        </div>
                        {/* App Card 2 */}
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 rounded-2xl bg-white flex items-center justify-center mb-4 p-2">
                                <img src={PilotLogo} alt="Genzo Pilot App" className="w-full h-full object-contain" />
                            </div>
                            <p className="text-white text-lg font-bold">Genzo Pilot:<br />Drive & Earn</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            {/* Footer */}
            <Footer />

        </div>
    );
}

export default Home;
