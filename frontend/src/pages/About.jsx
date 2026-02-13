import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../App.css';

// Import images
import AboutImg1 from "../assets/Images for Website with Titles/1_Quick Rides, Easy on the Pocket.jpg";
import AboutImg2 from "../assets/Images for Website with Titles/2_Quick Rides, Easy on the Pocket.jpg";
import JobsBgImg from "../assets/Images for Website with Titles/Careers Page.png";

function About() {
    return (
        <div className="font-sans text-gray-800 bg-white">
            <Header />

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-20 flex flex-col md:flex-row items-center gap-10 md:gap-16 relative overflow-hidden">

                {/* Background Blob - Absolute positioned loosely to match the feel */}
                <div className="absolute top-0 right-0 w-2/3 h-full bg-[#FFFBEB] -z-10 rounded-l-[10rem] translate-x-1/4 scale-110"></div>

                {/* Text Section */}
                <div className="md:w-1/2 z-10">
                    <div className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-wider mb-6" style={{ backgroundColor: '#FFBC00' }}>Genzo</div>

                    <h1 className="text-3xl md:text-6xl font-extrabold mb-10 text-gray-900 leading-tight">
                        India Loves<br />
                        Riding with Us
                    </h1>

                    <div className="space-y-8 max-w-lg">
                        <div>
                            <h3 className="text-xl font-bold text-gray-600 mb-2">We're not just an option — we're a reliable way to move.</h3>
                            <p className="text-gray-500 leading-relaxed text-lg">
                                Genzo exists to solve everyday intra-city commuting challenges with safe, affordable rides designed for real city life. With assured safety and pocket-friendly pricing, we make daily travel simpler and smarter.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">What sets us apart?</h3>
                            <p className="text-gray-500 leading-relaxed text-lg">
                                Our bike taxis cut through peak-hour traffic to get you where you need to be, fast and hassle-free. When it comes to city travel, think practical. Think Genzo.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 relative min-h-[500px] md:h-[600px] w-full flex flex-col md:block items-center justify-center gap-6 md:gap-0 mt-10 md:mt-0">
                    {/* Organic Background Shape - Creamy Yellow */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-[#FFFBEB] rounded-[4rem] -z-10 rotate-12 hidden md:block"></div>

                    {/* Image 1: Woman on Bike (Top Left) */}
                    <div className="relative md:absolute top-auto left-auto md:top-0 md:left-0 w-64 h-64 md:w-72 md:h-72 rounded-[2rem] md:rounded-[3rem] overflow-hidden border-4 border-white shadow-xl z-10 transform md:-rotate-3 mx-auto">
                        <img src={AboutImg1} alt="Rider" className="w-full h-full object-cover" />
                    </div>

                    {/* Image 2: Man with Phone (Bottom Right) */}
                    <div className="relative md:absolute bottom-auto right-auto md:bottom-10 md:right-10 w-64 h-80 md:w-72 md:h-96 rounded-[2rem] md:rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl z-20 mx-auto">
                        <img src={AboutImg2} alt="Customer" className="w-full h-full object-cover" />
                    </div>

                    {/* Small yellow decorative pill/shape */}
                    <div className="absolute bottom-20 left-20 w-16 h-48 rounded-full z-0 hidden md:block" style={{ backgroundColor: '#FFE755' }}></div>
                    <div className="absolute top-20 right-20 w-32 h-16 rounded-full bg-white z-0 hidden md:block"></div>
                </div>
            </main>


            {/* Footer */}
            <Footer />
        </div>
    );
}

export default About;
