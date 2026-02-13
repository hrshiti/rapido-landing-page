import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DownloadAppModal from './DownloadAppModal';

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <footer className="bg-black text-white py-16 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">

                    {/* Column 1: Customer App */}
                    <div>
                        <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-base">Customer app</h4>
                        <div className="flex flex-col gap-4">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="w-40 opacity-100 hover:opacity-80 transition-opacity text-left"
                            >
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                    alt="Get it on Google Play"
                                    className="w-full h-auto"
                                />
                            </button>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="w-40 opacity-100 hover:opacity-80 transition-opacity text-left"
                            >
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                                    alt="Download on the App Store"
                                    className="w-full h-auto"
                                />
                            </button>
                        </div>
                    </div>

                    {/* Column 2: Pilot App */}
                    <div>
                        <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-base">Pilot app</h4>
                        <div className="flex flex-col gap-4">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="w-40 opacity-100 hover:opacity-80 transition-opacity text-left"
                            >
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                    alt="Get it on Google Play"
                                    className="w-full h-auto"
                                />
                            </button>
                        </div>
                    </div>

                    {/* Column 3: Navigation */}
                    <div>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link to="/" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#FFBC00] transition-colors text-base">Home</Link></li>
                            <li><Link to="/about" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#FFBC00] transition-colors text-base">About Us</Link></li>
                            <li><Link to="/careers" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#FFBC00] transition-colors text-base">Careers</Link></li>
                            <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#FFBC00] transition-colors text-base">Contact Us</Link></li>
                            <li><Link to="/terms" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#FFBC00] transition-colors text-base">Terms & Conditions</Link></li>
                            <li><Link to="/privacy" onClick={() => window.scrollTo(0, 0)} className="hover:text-[#FFBC00] transition-colors text-base">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Follow Us */}
                    <div>
                        <h4 className="font-bold mb-4 text-white uppercase tracking-wider text-base">Follow Us</h4>
                        <div className="flex space-x-5">
                            {/* Instagram */}
                            <a href="#" className="text-white hover:text-[#FFBC00] transform hover:scale-110 transition-all">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-7 h-7" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            {/* Facebook */}
                            <a href="#" className="text-white hover:text-[#FFBC00] transform hover:scale-110 transition-all">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-7 h-7" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            {/* YouTube */}
                            <a href="#" className="text-white hover:text-[#FFBC00] transform hover:scale-110 transition-all">
                                <svg fill="currentColor" className="w-7 h-7" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-xs">
                    © 2026 Premium Traders. All rights reserved.
                </div>
            </div>

            {/* Download App Modal */}
            <DownloadAppModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </footer>
    );
};

export default Footer;

