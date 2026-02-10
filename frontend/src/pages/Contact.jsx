import React, { useState } from 'react';
import DownloadAppModal from '../components/DownloadAppModal';
import Footer from '../components/Footer';
import GenzoLogo from '../assets/GenzoLogo-removebg-preview.png';

function Contact() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="font-sans text-gray-800 bg-white min-h-screen flex flex-col justify-between">
            {/* Header */}
            <header className="flex justify-between items-center px-4 md:px-24 py-2 bg-white sticky top-0 z-50">
                <div className="flex items-center">
                    {/* Logo Image */}
                    <img src={GenzoLogo} alt="Genzo Logo" className="h-24 md:h-28 w-auto object-contain" />
                </div>
                <nav className="hidden md:flex items-center space-x-10 text-base font-medium text-gray-800">
                    <a href="/" className="hover:text-black transition-colors">Home</a>
                    <a href="/about" className="hover:text-black transition-colors">About Us</a>
                    <a href="/safety" className="hover:text-black transition-colors">Safety</a>
                    <a href="/careers" className="hover:text-black transition-colors">Careers</a>
                    <a href="/blog" className="hover:text-black transition-colors">Blog</a>
                    <a href="/press" className="hover:text-black transition-colors">Press</a>
                    <a href="/contact" className="text-black font-bold border-b-2 border-black pb-1">Contact Us</a>
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
                        <a href="/about" className="hover:text-yellow-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
                        <a href="/safety" className="hover:text-yellow-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Safety</a>
                        <a href="/careers" className="hover:text-yellow-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Careers</a>
                        <a href="/blog" className="hover:text-yellow-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Blog</a>
                        <a href="/press" className="hover:text-yellow-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Press</a>
                        <a href="/contact" className="text-black font-bold border-b-2 border-black pb-1 w-fit" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
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
            <main className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-16 w-full flex-grow">

                <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">You can find us here</h1>
                <p className="text-gray-500 mb-12 text-lg">Find help for your queries here:</p>

                <div className="flex flex-col lg:flex-row gap-10 md:gap-20">
                    {/* Left Column: Form */}
                    <div className="flex-1">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2">Name <span className="text-yellow-400">*</span></label>
                                <input type="text" placeholder="Enter your name" className="w-full px-4 py-3 border border-gray-200 rounded text-gray-700 focus:outline-none focus:border-yellow-400 bg-gray-50 text-sm placeholder-gray-400" />
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2">Email Address <span className="text-yellow-400">*</span></label>
                                <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 border border-gray-200 rounded text-gray-700 focus:outline-none focus:border-yellow-400 bg-gray-50 text-sm placeholder-gray-400" />
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2">Mobile Number <span className="text-yellow-400">*</span></label>
                                <input type="tel" placeholder="Enter your mobile number" className="w-full px-4 py-3 border border-gray-200 rounded text-gray-700 focus:outline-none focus:border-yellow-400 bg-gray-50 text-sm placeholder-gray-400" />
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2">You are a <span className="text-yellow-400">*</span></label>
                                <div className="relative">
                                    <select className="w-full px-4 py-3 border border-gray-200 rounded text-gray-700 focus:outline-none focus:border-yellow-400 bg-gray-50 appearance-none text-sm">
                                        <option value="" disabled selected>--select--</option>
                                        <option value="customer">Customer</option>
                                        <option value="captain">Captain</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2">Comment <span className="text-yellow-400">*</span></label>
                                <textarea rows="4" placeholder="Enter your comment" className="w-full px-4 py-3 border border-gray-200 rounded text-gray-700 focus:outline-none focus:border-yellow-400 bg-gray-50 text-sm placeholder-gray-400 resize-none"></textarea>
                            </div>

                            <button type="submit" className="w-full py-3 rounded font-bold text-black transition-colors hover:bg-yellow-500 mt-6" style={{ backgroundColor: '#F9D423' }}>
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* Right Column: Address Info */}
                    <div className="flex-1 relative">
                        {/* Decorative Dots */}
                        <div className="absolute -top-10 right-0 opacity-40">
                            <div className="grid grid-cols-12 gap-2">
                                {[...Array(72)].map((_, i) => (
                                    <div key={i} className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-12 mt-10 lg:mt-32 max-w-sm ml-auto">
                            <div>
                                <h3 className="font-bold text-black mb-3 text-lg">Registered Office Address:</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Genzo Transportation Services Pvt Ltd, 3rd Floor, Sai Prithvi Arcade, Megha Hills, Sri Rama Colony, Madhapur, Hyderabad - 500081.
                                </p>
                                <p className="text-gray-600 text-sm mt-2">CIN:U52210TG2015PTC097115</p>
                            </div>

                            <div>
                                <h3 className="font-bold text-black mb-3 text-lg">City Office:</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Genzo Transportation Services Pvt Ltd, #148, 1st Floor, SLV Nilaya, 5th Main 80ft road, HSR Layout 7th Sector, Bangalore 560102.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-black mb-3 text-lg">Corporate Office:</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Mantri Commercio - Spatium Tower A, Sy No 51/2, 51/3, 51/4, Of Devarabeesanahalli Village And Hjem 39/5 Of Kariyammana Agrahara Village Varthur Hobli, Bangalore East Taluk, Bangalore.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Black Footer */}
            {/* Footer */}
            <Footer />

            <DownloadAppModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}

export default Contact;
