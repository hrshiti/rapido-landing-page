import React, { useState } from 'react';
import DownloadAppModal from '../components/DownloadAppModal';
import Footer from '../components/Footer';
import Logo from '../assets/GenzoLogo-removebg-preview.png';

// Import images
import CareersImg1 from '../assets/img1.jpg';
import CareersImg2 from '../assets/img2.webp';
import CareersImg3 from '../assets/img3.jpeg';
import CareersImg4 from '../assets/img4.avif';
import CareersImg5 from '../assets/img5.jpg';

const Careers = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Testimonial Data
    const testimonials = [
        {
            quote: "Simple yet inspiring working culture! The experience speaks for itself. Hardworking and goal oriented team as well as Manager. Everyday I learn something new.",
            name: "Priya Sharma",
            role: "Cluster Manager"
        },
        {
            quote: "Working with Genzo is filled with enthusiasm which everyone around carries. Is infectious. Proud to be a part of Genzo.",
            name: "Rahul Veritas",
            role: "Operations Lead"
        }
    ];

    // Office Life Images
    const officeImages = [
        CareersImg4, // Desk/Office feel
        CareersImg5, // Team/Office feel
        CareersImg2  // Person/Office feel
    ];

    return (
        <div className="font-sans text-gray-800 bg-white min-h-screen relative overflow-x-hidden">
            {/* Header */}
            <header className="flex justify-between items-center px-4 md:px-24 py-2 bg-white sticky top-0 z-50 shadow-sm">
                <div className="flex items-center">
                    <img src={Logo} alt="Genzo Logo" className="h-24 md:h-28 w-auto object-contain" />
                </div>
                <nav className="hidden md:flex items-center space-x-10 text-sm font-semibold text-gray-800">
                    <a href="/" className="hover:text-black transition-colors">Home</a>
                    <a href="/about" className="hover:text-black transition-colors">About Us</a>
                    <a href="/safety" className="hover:text-[#FF8C00] transition-colors">Safety</a>
                    <a href="/careers" className="text-black border-b-2 border-[#FFE755] pb-1 transition-colors">Careers</a>
                    <a href="/blog" className="hover:text-[#FF8C00] transition-colors">Blog</a>
                    <a href="/press" className="hover:text-black transition-colors">Press</a>
                    <a href="/contact" className="hover:text-black transition-colors">Contact Us</a>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-black text-white px-6 py-2.5 rounded shadow-lg hover:bg-gray-800 transition-colors text-sm font-bold tracking-wide"
                    >
                        Download App
                    </button>
                </nav>
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
                        <a href="/" className="hover:text-[#FF8C00] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                        <a href="/about" className="hover:text-[#FF8C00] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
                        <a href="/safety" className="hover:text-[#FF8C00] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Safety</a>
                        <a href="/careers" className="text-black border-b-2 border-[#FFE755] pb-1 w-fit" onClick={() => setIsMobileMenuOpen(false)}>Careers</a>
                        <a href="/blog" className="hover:text-[#FF8C00] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Blog</a>
                        <a href="/press" className="hover:text-[#FF8C00] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Press</a>
                        <a href="/contact" className="hover:text-[#FF8C00] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
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

            {/* Hero Section */}
            <main className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-16 flex flex-col md:flex-row items-center relative z-10">
                {/* Left Content */}
                <div className="md:w-5/12 text-left z-20">
                    <h1 className="text-3xl md:text-6xl font-extrabold mb-6 text-black tracking-tight">
                        Be a part of our team.
                    </h1>
                    <p className="text-lg text-gray-500 mb-10 leading-relaxed font-normal">
                        We are so glad you want to join us in exploring a world of endless opportunities at Genzo. Let's find a spot for you.
                    </p>
                    <button className="px-10 py-3 rounded-full font-bold text-sm text-black transition-all transform hover:scale-105 shadow-md flex items-center justify-center" style={{ backgroundColor: '#FFE755' }}>
                        View Jobs
                    </button>
                </div>

                {/* Right Visuals - Collage */}
                <div className="md:w-7/12 relative mt-16 md:mt-0 h-[400px] md:h-[600px] w-full flex justify-center items-center">
                    {/* Background blob */}
                    <div className="absolute top-0 right-[-100px] w-[800px] h-[700px] bg-[#FFFBEB] rounded-[40%] transform -rotate-12 -z-10"></div>

                    {/* Images Container */}
                    <div className="relative w-full h-full">
                        {/* Circle Image Top Left (Small) */}
                        <div className="absolute top-10 left-10 w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg z-10 hidden md:block">
                            <img src={CareersImg1} className="w-full h-full object-cover" alt="Team 1" />
                        </div>

                        {/* Main Large Image (Right) */}
                        <div className="absolute top-20 right-10 w-64 h-96 rounded-[50px] overflow-hidden border-4 border-white shadow-xl z-20">
                            <img src={CareersImg3} className="w-full h-full object-cover" alt="Team 2" />
                        </div>

                        {/* Rectangle Pill Image (Bottom Left) */}
                        <div className="absolute bottom-20 left-20 w-56 h-72 rounded-[40px] overflow-hidden border-4 border-white shadow-xl z-30">
                            <img src={CareersImg5} className="w-full h-full object-cover" alt="Team 3" />
                        </div>

                        {/* Yellow Pill Element */}
                        <div className="absolute bottom-40 right-[45%] w-16 h-40 rounded-full bg-[#FFE755] z-0"></div>
                    </div>
                </div>
            </main>

            {/* Why work with us */}
            <section className="bg-white py-10 md:py-16">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-16 text-black">
                        Why work with us
                        <div className="h-1 w-16 mt-2 rounded-full" style={{ backgroundColor: '#FFE755' }}></div>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Feature 1 */}
                        <div className="flex flex-col items-start">
                            <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 relative" style={{ backgroundColor: '#FFE755' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                            </div>
                            <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-xs">
                                We pride ourselves on rewarding great work with great compensation.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex flex-col items-start">
                            <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 relative" style={{ backgroundColor: '#FFE755' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-xs">
                                Flexible hours and vacation. Night owls welcome.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex flex-col items-start">
                            <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 relative" style={{ backgroundColor: '#FFE755' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-xs">
                                Meet new cultures and enjoy our crew from all over the world.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="bg-white py-10 mb-10 md:mb-20">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {officeImages.map((img, idx) => (
                            <div key={idx} className="h-64 rounded-none overflow-hidden hover:opacity-90 transition-opacity">
                                <img src={img} alt={`Office ${idx + 1}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                    {/* Dots / Navigation Placeholder */}
                    <div className="flex justify-center mt-6 space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FFE755]"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-gray-50 py-12 md:py-24 relative overflow-hidden">
                {/* Dot Pattern 1 */}
                <div className="absolute top-10 left-10 md:left-40 z-0 opacity-20">
                    <div className="grid grid-cols-8 gap-2">
                        {[...Array(64)].map((_, i) => (
                            <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
                        ))}
                    </div>
                </div>

                {/* Curved Background Shape */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10 opacity-50">
                    <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full text-purple-50 preserve-3d" style={{ transform: 'scale(1.5)' }}>
                        <path fill="#F3F4F6" fillOpacity="1" d="M0,160L80,170.7C160,181,320,203,480,197.3C640,192,800,160,960,149.3C1120,139,1280,149,1360,154.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
                    <h2 className="text-3xl font-bold mb-16 text-black inline-block">
                        What our employees say
                        <div className="h-1 w-full mt-2 rounded-full" style={{ backgroundColor: '#FFE755' }}></div>
                    </h2>

                    <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
                        {testimonials.map((t, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-left flex-1 max-w-lg hover:shadow-md transition-shadow relative">
                                <div className="absolute top-8 left-8 text-4xl text-yellow-400 font-serif opacity-30">“</div>
                                <p className="text-gray-600 mb-8 mt-6 relative z-10 text-sm leading-relaxed">
                                    {t.quote}
                                </p>
                                <div>
                                    <h4 className="font-bold text-black text-sm">{t.name}</h4>
                                    <p className="text-gray-400 text-xs uppercase tracking-wide">{t.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center mt-12 space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FFE755]"></div>
                    </div>
                </div>

                {/* Bottom Dot Pattern */}
                <div className="absolute bottom-10 right-10 md:right-40 z-0 opacity-20">
                    <div className="grid grid-cols-10 gap-2">
                        {[...Array(100)].map((_, i) => (
                            <div key={i} className="w-1 h-1 bg-[#FFE755] rounded-full"></div>
                        ))}
                    </div>
                </div>

                {/* Bottom small yellow dash */}
                <div className="w-10 h-1 bg-[#FFE755] mx-auto mt-20 mb-10"></div>
            </section>

            {/* Footer - Black Version */}
            {/* Footer */}
            <Footer />

            <DownloadAppModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default Careers;
