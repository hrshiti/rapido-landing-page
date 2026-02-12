import React, { useState } from 'react';
import Logo from '../assets/Genzo Logo.png';
import DownloadAppModal from './DownloadAppModal';

const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Header */}
            <header className="flex justify-between items-center px-4 md:px-24 py-2 bg-black sticky top-0 z-50 shadow-sm">
                <div className="flex items-center -my-2">
                    <a href="/">
                        <img src={Logo} alt="Genzo Logo" className="h-24 md:h-24 w-auto object-contain" />
                    </a>
                </div>

                {/* Centered Navigation */}
                <nav className="hidden md:flex items-center justify-center flex-1 space-x-10 text-base font-medium text-white">
                    <a href="/" className="hover:text-[#FFBC00] transition-colors">Home</a>
                    <a href="/about" className="hover:text-[#FFBC00] transition-colors">About Us</a>
                    <a href="/careers" className="hover:text-[#FFBC00] transition-colors">Careers</a>
                    <a href="/contact" className="hover:text-[#FFBC00] transition-colors">Contact Us</a>
                </nav>

                {/* Download Button */}
                <div className="hidden md:block">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-[#FFBC00] text-black px-6 py-2 rounded-full font-bold hover:bg-white transition-colors shadow-lg"
                    >
                        Download App
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl p-2 text-white focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span role="img" aria-label="menu">{isMobileMenuOpen ? '✕' : '☰'}</span>
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-black pt-20 px-6 md:hidden">
                    <nav className="flex flex-col space-y-6 text-xl font-medium text-white">
                        <a href="/" className="hover:text-[#FFBC00] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                        <a href="/about" className="hover:text-[#FFBC00] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
                        <a href="/careers" className="hover:text-[#FFBC00] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Careers</a>
                        <a href="/contact" className="hover:text-[#FFBC00] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
                        <button
                            onClick={() => {
                                setIsModalOpen(true);
                                setIsMobileMenuOpen(false);
                            }}
                            className="bg-[#FFBC00] text-black px-6 py-3 rounded-full font-bold hover:bg-white transition-colors shadow-lg w-full"
                        >
                            Download App
                        </button>
                    </nav>
                </div>
            )}

            {/* Download App Modal */}
            <DownloadAppModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default Header;
