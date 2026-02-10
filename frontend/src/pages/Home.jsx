import React, { useState } from 'react';
import DownloadAppModal from '../components/DownloadAppModal';
import '../App.css';

// Importing assets
import Footer from '../components/Footer';
import Logo from '../assets/GenzoLogo-removebg-preview.png';
import BikeIcon from '../assets/Icons-20260210T052952Z-3-001/Icons/Bike.png';
import AutoIcon from '../assets/Icons-20260210T052952Z-3-001/Icons/Auto Rickshaw.png';
import ERickshawIcon from '../assets/Icons-20260210T052952Z-3-001/Icons/eRickshaw.png';
import ParcelIcon from '../assets/Icons-20260210T052952Z-3-001/Icons/Parcel.png';
import TaxiIcon from '../assets/Icons-20260210T052952Z-3-001/Icons/Taxi.png';

// Import downloaded images
import Ride1 from '../assets/img1.jpg';
import Ride2 from '../assets/img4.avif'; // Using img4
import Ride3 from '../assets/img2.webp'; // Reusing img2
import Ride4 from '../assets/img3.jpeg'; // Reusing img3
import Driver1 from '../assets/img5.jpg'; // Using img5
import Driver2 from '../assets/img2.webp';
import SafetyImg from '../assets/img3.jpeg'; // Renamed back to SafetyImg to match usage

function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pickup, setPickup] = useState('');
    const [drop, setDrop] = useState('');

    const services = [
        { name: 'Bike', icon: BikeIcon },
        { name: 'Auto', icon: AutoIcon },
        { name: 'Auto Share', icon: ERickshawIcon }, // Using eRickshaw for Auto Share
        { name: 'Parcel', icon: ParcelIcon },
        { name: 'Cab Economy', icon: TaxiIcon },
        { name: 'Cab Premium', icon: TaxiIcon }, // Using Taxi for both Cab options
    ];

    return (
        <div className="font-sans text-gray-800">
            {/* Header */}
            <header className="flex justify-between items-center px-10 md:px-24 py-2 bg-white sticky top-0 z-50 shadow-sm">
                <div className="flex items-center">
                    <img src={Logo} alt="Genzo Logo" className="h-24 md:h-28 w-auto object-contain" />
                </div>
                <nav className="hidden md:flex items-center space-x-12 text-base font-medium text-gray-800">
                    <a href="/about" className="hover:text-black transition-colors">About Us</a>
                    <a href="/careers" className="hover:text-black transition-colors">Careers</a>
                    <a href="#" className="hover:text-black transition-colors">Genzo Ads</a>
                    <a href="/safety" className="hover:text-black transition-colors">Safety</a>
                    <a href="/blog" className="hover:text-black transition-colors">Blog</a>
                    <a href="/press" className="hover:text-black transition-colors">Press</a>
                    <a href="/contact" className="hover:text-black transition-colors">Contact Us</a>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-black text-white px-6 py-2 rounded-full font-bold hover:bg-gray-800 transition-colors shadow-lg"
                    >
                        Download App
                    </button>
                </nav>
                {/* Mobile Menu Button */}
                <button className="md:hidden text-2xl p-2 text-gray-800">
                    <span role="img" aria-label="menu">☰</span>
                </button>
            </header>

            {/* Hero Section */}
            <section className="relative flex flex-col pt-16 items-center bg-gray-50 overflow-hidden" style={{ minHeight: '80vh' }}>
                {/* Background Map */}
                <div className="absolute inset-0 z-0">
                    <div className="w-full h-full bg-cover bg-center opacity-30" style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg")' }}></div>
                </div>

                <div className="relative z-10 w-full max-w-3xl text-center px-4 mt-8">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-gray-900 tracking-tight">
                        Bharat Moves On Genzo!
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

                        <button className="w-full mt-4 py-4 rounded-lg font-bold text-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-black" style={{ backgroundColor: '#FFE755' }}>
                            Book Ride
                        </button>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900 leading-tight">
                        Our Services
                        {/* Yellow Underline */}
                        <div className="h-2 w-16 mt-2" style={{ backgroundColor: '#FFE755' }}></div>
                    </h2>

                    {/* 4 columns layout */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                        {services.map((service, index) => (
                            <div key={index} className="flex flex-col items-center md:items-start group cursor-pointer transition-all hover:-translate-y-1">
                                <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-50 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-center mb-6 group-hover:shadow-md transition-all p-5 hover:border-yellow-400">
                                    <img src={service.icon} alt={service.name} className="w-full h-full object-contain filter drop-shadow-sm mix-blend-multiply" />
                                </div>
                                <span className="text-xl font-bold text-gray-900 pl-2">{service.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Info Section 1: Quick Rides */}
            <section className="py-32 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
                    {/* Text Content */}
                    <div className="md:w-1/2 text-left">
                        <h2 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight text-gray-900">Get Quick Rides,<br />Low Fares</h2>
                        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-lg leading-relaxed">
                            In Genzo we ensure our customers get rides quickly at the most affordable prices.
                        </p>
                        <button className="px-10 py-4 rounded-full font-bold text-lg text-white transition-all transform hover:scale-105 hover:bg-gray-800 shadow-xl bg-black">
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
            <section className="py-32 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row-reverse items-center gap-16">
                    {/* Text Content */}
                    <div className="md:w-1/2 text-left">
                        <h2 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight text-gray-900">Flexible Hours &<br />High Earnings</h2>
                        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-lg leading-relaxed">
                            Join as a Genzo captain and earn on your schedule. Be your own boss.
                        </p>
                        <button className="px-10 py-4 rounded-full font-bold text-lg text-white transition-all transform hover:scale-105 hover:bg-gray-800 shadow-xl bg-black">
                            Join as Captain &rarr;
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
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2 text-left">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                            Safety for all
                            <div className="h-2 w-20 bg-yellow-400 mt-3 rounded-full"></div>
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                            At Genzo, your safety is our priority. We’re dedicated to making every ride safe and comfortable.
                        </p>
                        <a href="#" className="text-blue-600 font-bold text-lg hover:underline">Know More &gt;</a>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <div className="rounded-[2.5rem] overflow-hidden shadow-lg h-[400px]">
                            <img src={SafetyImg} alt="Safety" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Download Now Section (New) */}
            <section className="bg-black py-20 text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-white mb-10">
                        Download Now
                        <div className="h-1 w-20 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
                    </h2>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                        {/* App Card 1 */}
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 rounded-2xl bg-yellow-400 flex items-center justify-center mb-4">
                                <img src={Logo} alt="Genzo User App" className="w-16 h-16 object-contain rounded-full" />
                            </div>
                            <p className="text-white text-lg font-bold">Genzo: Bike-Taxi,<br />Auto & Cabs</p>
                        </div>
                        {/* App Card 2 */}
                        <div className="flex flex-col items-center">
                            <div className="w-24 h-24 rounded-2xl bg-white flex items-center justify-center mb-4">
                                <span className="text-black font-extrabold text-xs text-center leading-tight">genzo<br /><span className="text-yellow-500">Captain</span></span>
                            </div>
                            <p className="text-white text-lg font-bold">Genzo Captain:<br />Drive & Earn</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            {/* Footer */}
            <Footer />

            <DownloadAppModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        </div>
    );
}

export default Home;
