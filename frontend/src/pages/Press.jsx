import React, { useState } from 'react';
import DownloadAppModal from '../components/DownloadAppModal';
import Footer from '../components/Footer';
import Logo from '../assets/GenzoLogo-removebg-preview.png';
import PressImg1 from '../assets/press.jpg';
import PressImg2 from '../assets/press2.webp';
import PressImg3 from '../assets/press3.jpg';

const Press = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Press Data based on the image provided
    const pressReleases = [
        {
            image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2670&auto=format&fit=crop",
            text: "Genzo, India's largest bike taxi app, has introduced Genzo Box, a new on-demand delivery service where customers can request pick and drop of food, groceries, and medicines on the app, from or to another customer. The person-to-person (P2P) on-demand delivery service will enable users to exchange food, groceries, or medicines...",
            source: "GenzoBlog.com"
        },
        {
            image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2670&auto=format&fit=crop",
            text: "Bengaluru-based bike-hailing startup Genzo in its recent Registrar of Companies (RoC) filings has stated that it has acquired Mumbai-based startup Vahanalytics. The filings stated that the analytics startup has been allocated 55 equity shares worth Rs 49 lakh. Post-acquisition, the Mumbai startup's co-founders will be joining Genzo...",
            source: "YourStory"
        },
        {
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
            text: "Bengaluru-based bike taxi app Genzo has raised a funding of Rs 1.49 crore from investor Karina Choudhrie, according to RoC filings accessed by YourStory. As per the filing, the company issued 167 Series A3 Compulsorily Convertible Preference Shares on July 17 at a premium value...",
            source: "YourStory"
        },
        {
            image: PressImg2, // using local image
            text: "If you are a frequent Genzo user, we might have some good news in store! The Bengaluru-based bike taxi app, which has a fleet of over 60,000 active riders operating across major Indian cities, including Bengaluru, Gurugram, and Delhi, has introduced a brand new feature — called 'Power Pass'.",
            source: "YourStory"
        },
        {
            image: PressImg1, // From press.jpg
            text: "Kanta Chauhan's life has not been an easy one. Born in the district of Ropar, Punjab, her father passed away when she was young, and it was left to her mother to take care of her and her three siblings. After completing her higher secondary education from a government school...",
            source: "YourStory"
        },
        {
            image: PressImg2, // From press2.webp
            text: "HYDERABAD: Looks like the last-mile connectivity firms have changed their regular routes to join the Covid-19 ecosystem. Ride-sharing companies like Genzo partnered with e-commerce businesses for the last mile delivery. This enables easy scheduling of delivery and also helped in maintaining...",
            source: "New Indian Express"
        },
        {
            image: PressImg3, // From press3.jpg
            text: "Bike taxi service provider Genzo has resumed operations in close to 100 cities as of now, with a special focus on the health and well-being of captains (rider partners) and customers. The company is providing free cancellation if any captain or customer is without a mask...",
            source: "IndiaToday"
        },
        {
            image: PressImg1, // Repeating PressImg1 as there are only 3 images for 4 slots
            text: "Road transport and highways minister Nitin Gadkari on Tuesday suggested all state transport ministers to explore making app-based two-wheeler taxis operational, particularly in rural areas to help farming communities with smoother movement during the Covid-19 lockdown...",
            source: "Financial Express"
        }
    ];

    return (
        <div className="font-sans text-gray-800 bg-white min-h-screen relative overflow-hidden">
            {/* Header */}
            <header className="flex justify-between items-center px-4 md:px-24 py-2 bg-white sticky top-0 z-50 shadow-sm">
                <div className="flex items-center">
                    <img src={Logo} alt="Genzo Logo" className="h-24 md:h-28 w-auto object-contain" />
                </div>
                <nav className="hidden md:flex items-center space-x-10 text-sm font-semibold text-gray-800">
                    <a href="/" className="hover:text-black transition-colors">Home</a>
                    <a href="/about" className="hover:text-black transition-colors">About Us</a>
                    <a href="/safety" className="hover:text-black transition-colors">Safety</a>
                    <a href="/careers" className="hover:text-black transition-colors">Careers</a>
                    <a href="/blog" className="hover:text-black transition-colors">Blog</a>
                    <a href="/press" className="text-black border-b-2 border-yellow-400 pb-1 transition-colors">Press</a>
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
                        <a href="/" className="hover:text-yellow-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                        <a href="/about" className="hover:text-yellow-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
                        <a href="/safety" className="hover:text-yellow-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Safety</a>
                        <a href="/careers" className="hover:text-yellow-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Careers</a>
                        <a href="/blog" className="hover:text-yellow-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Blog</a>
                        <a href="/press" className="text-black border-b-2 border-yellow-400 pb-1 w-fit" onClick={() => setIsMobileMenuOpen(false)}>Press</a>
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
            <main className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-16 relative z-10 pb-20 md:pb-40">
                {/* Background Shape Left */}
                <div className="absolute top-0 left-0 w-1/3 h-screen bg-[#FFFBEB] -z-10 transform -skew-x-12 -translate-x-32 opacity-50"></div>

                {/* Decorative Dots - Right */}
                <div className="absolute top-24 right-0 opacity-20 -z-10">
                    <div className="grid grid-cols-12 gap-3">
                        {[...Array(84)].map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                        ))}
                    </div>
                </div>

                <h1 className="text-3xl md:text-6xl font-light mb-10 md:mb-20 text-gray-800">
                    Press and <span className="font-bold">Media</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10 md:gap-y-16">
                    {pressReleases.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            {/* Image Card */}
                            <div className="rounded-lg overflow-hidden mb-6 shadow-md w-full h-56 relative bg-gray-100 border border-gray-100">
                                <img src={item.image} alt="Press coverage" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
                            </div>

                            {/* Text Content */}
                            <div className="px-1 text-center font-light">
                                <p className="text-gray-500 text-xs leading-6 mb-4 line-clamp-6">
                                    {item.text}
                                </p>
                                <a href="#" className="text-blue-400 text-sm font-medium hover:underline">
                                    {item.source}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Footer - Black Version for Press Page */}
            {/* Footer */}
            <Footer />
            <DownloadAppModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default Press;
