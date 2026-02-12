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
                    <div className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-wider mb-6" style={{ backgroundColor: '#FFE755' }}>Genzo</div>

                    <h1 className="text-3xl md:text-6xl font-extrabold mb-10 text-gray-900 leading-tight">
                        India’s Beloved<br />
                        Bike Taxi Service
                    </h1>

                    <div className="space-y-8 max-w-lg">
                        <div>
                            <h3 className="text-xl font-bold text-gray-600 mb-2">We are not an option, we are a choice</h3>
                            <p className="text-gray-500 leading-relaxed text-lg">
                                We're #1 choice of 10 Million people because we're the solution of India's intra-city commuting problems. With assured safety, we also provide economically priced rides.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">What makes us different?</h3>
                            <p className="text-gray-500 leading-relaxed text-lg">
                                Our bike taxis can dodge the traffic during peak hours and get you to the destination in a jiffy! So when you think travel, think Genzo.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 relative h-[400px] md:h-[600px] w-full flex items-center justify-center">
                    {/* Organic Background Shape - Creamy Yellow */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-[#FFFBEB] rounded-[4rem] -z-10 rotate-12"></div>

                    {/* Image 1: Woman on Bike (Top Left) */}
                    <div className="absolute top-0 left-0 w-72 h-72 rounded-[3rem] overflow-hidden border-4 border-white shadow-xl z-10 transform -rotate-3">
                        <img src={AboutImg1} alt="Rider" className="w-full h-full object-cover" />
                    </div>

                    {/* Image 2: Man with Phone (Bottom Right) */}
                    <div className="absolute bottom-10 right-10 w-72 h-96 rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl z-20">
                        <img src={AboutImg2} alt="Customer" className="w-full h-full object-cover" />
                    </div>

                    {/* Small yellow decorative pill/shape */}
                    <div className="absolute bottom-20 left-20 w-16 h-48 rounded-full z-0" style={{ backgroundColor: '#FFE755' }}></div>
                    <div className="absolute top-20 right-20 w-32 h-16 rounded-full bg-white z-0"></div>
                </div>
            </main>

            {/* Champions Section */}
            <section className="py-12 md:py-24 bg-white relative overflow-hidden">
                {/* Background Large Blob - Left Side */}
                <div className="absolute top-1/2 left-0 w-1/2 h-full bg-[#FFFBEB] -z-10 rounded-r-[15rem] -translate-y-1/2 -translate-x-1/4 scale-125"></div>

                <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">

                    {/* Text Content */}
                    <div className="w-full text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-gray-900 leading-tight">
                            Champions of our<br /> success story
                        </h2>
                        <div className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed space-y-6">
                            <p>
                                Genzo has come a long way ever since its inception in 2026. With a lot of hardwork and perseverance we have made a place for ourselves in the market.
                            </p>
                            <p>
                                As a brand and as a service, it is our constant endeavour to redefine ourselves.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Jobs Section */}
            <section className="relative py-16 md:py-32 bg-[#FFE755] overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img src={JobsBgImg} alt="Office" className="w-full h-full object-cover grayscale opacity-20" />
                    <div className="absolute inset-0 bg-[#FFE755] opacity-90 mix-blend-multiply"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-3xl md:text-6xl font-light text-black mb-6 tracking-wide">
                        Jobs @ Genzo
                    </h2>
                    <p className="text-black text-xl mb-10 font-light">
                        Join us in exploring a world of endless opportunities. Let's find a spot for you.
                    </p>
                    <Link to="/careers" className="bg-[#FFBC00] text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-transform transform hover:scale-105 shadow-xl inline-block">
                        Work with us
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default About;
