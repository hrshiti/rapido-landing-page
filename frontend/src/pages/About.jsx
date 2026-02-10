import React, { useState } from 'react';
import DownloadAppModal from '../components/DownloadAppModal';
import Footer from '../components/Footer';
import '../App.css';

// Import images
import AboutImg1 from '../assets/img1.jpg';
import AboutImg2 from '../assets/img2.webp';
import JobsBgImg from '../assets/img5.jpg';

import GenzoLogo from '../assets/GenzoLogo-removebg-preview.png';

function About() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="font-sans text-gray-800 bg-white">
            {/* Header - Specific to About Page */}
            <header className="flex justify-between items-center px-4 md:px-24 py-2 bg-white sticky top-0 z-50">
                <div className="flex items-center">
                    {/* Logo Image */}
                    <img src={GenzoLogo} alt="Genzo Logo" className="h-24 md:h-28 w-auto object-contain" />
                </div>
                <nav className="hidden md:flex items-center space-x-12 text-base font-medium text-gray-800">
                    <a href="/" className="hover:text-black transition-colors">Home</a>
                    <a href="/about" className="text-black font-bold border-b-2 border-black pb-1">About Us</a>
                    <a href="/safety" className="hover:text-black transition-colors">Safety</a>
                    <a href="/careers" className="hover:text-black transition-colors">Careers</a>
                    <a href="/blog" className="hover:text-black transition-colors">Blog</a>
                    <a href="/press" className="hover:text-black transition-colors">Press</a>
                    <a href="/contact" className="hover:text-black transition-colors">Contact Us</a>
                </nav>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="hidden md:block bg-black text-white px-6 py-2 rounded-full font-bold hover:bg-gray-800 transition-colors"
                >
                    Download App
                </button>
                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl p-2 text-gray-800 focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span role="img" aria-label="menu">{isMobileMenuOpen ? '✕' : '☰'}</span>
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-white pt-36 px-6 md:hidden">
                    <nav className="flex flex-col space-y-6 text-xl font-medium text-gray-800">
                        <a href="/" className="hover:text-yellow-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                        <a href="/about" className="text-black font-bold border-b-2 border-black pb-1 w-fit" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
                        <a href="/safety" className="hover:text-yellow-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Safety</a>
                        <a href="/careers" className="hover:text-yellow-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Careers</a>
                        <a href="/blog" className="hover:text-yellow-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Blog</a>
                        <a href="/press" className="hover:text-yellow-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Press</a>
                        <a href="/contact" className="hover:text-yellow-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
                        <button
                            onClick={() => {
                                setIsModalOpen(true);
                                setIsMobileMenuOpen(false);
                            }}
                            className="bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors shadow-lg w-full"
                        >
                            Download App
                        </button>
                    </nav>
                </div>
            )}

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

                <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10 md:gap-16">

                    {/* Text Content */}
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-gray-900 leading-tight">
                            Champions of our<br /> success story
                        </h2>
                        <div className="max-w-xl text-gray-600 text-lg leading-relaxed space-y-6">
                            <p>
                                Genzo has come a long way ever since its inception in 2015. With a lot of hardwork and perseverance we have made a place for ourselves in the market.
                            </p>
                            <p>
                                As a brand and as a service, it is our constant endeavour to redefine ourselves.
                            </p>
                        </div>
                    </div>

                    {/* Founders Grid */}
                    <div className="md:w-1/2 flex justify-center md:justify-end gap-6 md:gap-10 mt-10 md:mt-0">
                        {/* Founder 1 */}
                        <div className="flex flex-col items-center">
                            <div className="relative mb-4">
                                <div className="w-32 h-32 md:w-36 md:h-36 rounded-[2rem] overflow-hidden border-4 border-white shadow-lg relative z-10 bg-gray-200">
                                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop" alt="Rishikesh S R" className="w-full h-full object-cover" />
                                </div>
                                {/* Yellow background shape */}
                                <div className="absolute top-2 -right-2 w-full h-full rounded-[2rem] bg-[#F9D423] -z-0"></div>
                            </div>
                            <h3 className="font-bold text-gray-900 text-lg">Rishikesh S R</h3>
                            <p className="text-gray-500 text-sm">Founder</p>
                        </div>

                        {/* Founder 2 */}
                        <div className="flex flex-col items-center mt-12 md:mt-24">
                            <div className="relative mb-4">
                                <div className="w-32 h-32 md:w-36 md:h-36 rounded-[2rem] overflow-hidden border-4 border-white shadow-lg relative z-10 bg-gray-200">
                                    <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop" alt="Pavan Guntupalli" className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute top-2 -right-2 w-full h-full rounded-[2rem] bg-[#F9D423] -z-0"></div>
                            </div>
                            <h3 className="font-bold text-gray-900 text-lg">Pavan Guntupalli</h3>
                            <p className="text-gray-500 text-sm">Founder</p>
                        </div>

                        {/* Founder 3 */}
                        <div className="flex flex-col items-center">
                            <div className="relative mb-4">
                                <div className="w-32 h-32 md:w-36 md:h-36 rounded-[2rem] overflow-hidden border-4 border-white shadow-lg relative z-10 bg-gray-200">
                                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop" alt="Aravind Sanka" className="w-full h-full object-cover" />
                                </div>
                                <div className="absolute top-2 -right-2 w-full h-full rounded-[2rem] bg-[#F9D423] -z-0"></div>
                            </div>
                            <h3 className="font-bold text-gray-900 text-lg">Aravind Sanka</h3>
                            <p className="text-gray-500 text-sm">Founder</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Jobs Section */}
            <section className="relative py-16 md:py-32 bg-yellow-400 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img src={JobsBgImg} alt="Office" className="w-full h-full object-cover grayscale opacity-20" />
                    <div className="absolute inset-0 bg-[#F9D423] opacity-90 mix-blend-multiply"></div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-3xl md:text-6xl font-light text-white mb-6 tracking-wide">
                        Jobs @ Genzo
                    </h2>
                    <p className="text-white text-xl mb-10 font-light">
                        Join us in exploring a world of endless opportunities. Let's find a spot for you.
                    </p>
                    <button className="bg-black text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-transform transform hover:scale-105">
                        Work with us
                    </button>
                </div>
            </section>

            {/* Footer */}
            <Footer />

            <DownloadAppModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}

export default About;
