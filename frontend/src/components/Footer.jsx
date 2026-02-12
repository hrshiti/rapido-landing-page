import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-16 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-10 text-sm">

                    {/* Column 1: Customer App */}
                    <div>
                        <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-sm">Customer app</h4>
                        <div className="flex flex-col gap-4">
                            <a href="#" className="w-36 opacity-100 hover:opacity-80 transition-opacity">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                    alt="Get it on Google Play"
                                    className="w-full h-auto"
                                />
                            </a>
                            <a href="#" className="w-36 opacity-100 hover:opacity-80 transition-opacity">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                                    alt="Download on the App Store"
                                    className="w-full h-auto"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Pilot App */}
                    <div>
                        <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-sm">Pilot app</h4>
                        <div className="flex flex-col gap-4">
                            <a href="#" className="w-36 opacity-100 hover:opacity-80 transition-opacity">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                    alt="Get it on Google Play"
                                    className="w-full h-auto"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Column 3: Navigation */}
                    <div>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link to="/" className="hover:text-[#FFBC00] transition-colors">Home</Link></li>
                            <li><Link to="/about" className="hover:text-[#FFBC00] transition-colors">About Us</Link></li>
                            <li><Link to="/careers" className="hover:text-[#FFBC00] transition-colors">Careers</Link></li>
                            <li><Link to="/contact" className="hover:text-[#FFBC00] transition-colors">Contact Us</Link></li>
                            <li><Link to="/terms" className="hover:text-[#FFBC00] transition-colors">Terms & Conditions</Link></li>
                            <li><Link to="/privacy" className="hover:text-[#FFBC00] transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Customer Terms */}
                    <div>
                        <ul className="space-y-3 text-gray-400">
                            <li className="font-bold text-white mb-2 block md:hidden">Customer Terms</li>
                            <li><a href="#" className="hover:text-white transition-colors">Customer Terms - Bike Taxi</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Customer Terms - Auto</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Corporate Affairs</a></li>
                        </ul>
                    </div>

                    {/* Column 5: Pilot Terms & Follow Us */}
                    <div>
                        <ul className="space-y-3 text-gray-400 mb-8">
                            <li className="font-bold text-white mb-2 block md:hidden">Pilot Terms</li>
                            <li><a href="#" className="hover:text-white transition-colors">Pilot Terms - Bike Taxi</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Pilot Terms - Cabs and Auto</a></li>
                        </ul>

                        <h4 className="font-bold mb-4 text-white uppercase tracking-wider text-sm">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-gray-300 transform hover:scale-110 transition-transform">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a href="#" className="text-white hover:text-gray-300 transform hover:scale-110 transition-transform">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a href="#" className="text-white hover:text-gray-300 transform hover:scale-110 transition-transform">
                                <svg fill="currentColor" stroke="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a href="#" className="text-white hover:text-gray-300 transform hover:scale-110 transition-transform">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-xs">
                    © 2026 Genzo Transportation. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
