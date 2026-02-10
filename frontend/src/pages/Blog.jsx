import React, { useState } from 'react';
import DownloadAppModal from '../components/DownloadAppModal';
import Footer from '../components/Footer';
import Logo from '../assets/GenzoLogo-removebg-preview.png';

// Import blog images
import BlogCar1 from '../assets/images/blog/blog_car1.jpg';
import BlogCar2 from '../assets/images/blog/blog_car2.jpg';
import BlogBusinessMeeting from '../assets/images/blog/blog_business_meeting.jpg';
import BlogProductivity from '../assets/images/blog/blog_productivity.jpg';
import BlogTravel from '../assets/images/blog/blog_travel.jpg';
import BlogCommute from '../assets/images/blog/blog_commute.jpg';
import BlogCustomers from '../assets/images/blog/blog_customers.jpg';
import BlogGrowth from '../assets/images/blog/blog_growth.jpg';
import BlogHelmet from '../assets/images/blog/blog_helmet.jpg';

const Blog = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const posts = [
        {
            date: 'January, 14th, 2025',
            title: 'Jaw dropping prices on Brand new cars',
            image: BlogCar1, // Red car dark background
            description: null
        },
        {
            date: 'January, 14th, 2025',
            title: 'Find your dream car at price you won\'t believe',
            image: BlogCar2, // Silver/Blue car
            description: null
        },
        {
            date: 'January, 8th, 2021',
            title: 'Business Travel Show reports a win-win solution for travel managers and employees',
            image: BlogBusinessMeeting, // Illustration-like city or business
            description: 'A survey published by the Business Travel Show found that 58 percent of business travel buyers agree that alternative transport providers such as Genzo...'
        },
        {
            date: 'January, 7th, 2021',
            title: 'Boost Business Productivity with these Tips',
            image: BlogProductivity, // Person with mask on bike
            description: 'Here are 5 ways to boost business productivity: 1. Get rid of clutter and take care of your workplace environment. The most straightforward way is to tidy up the office space. Studies...'
        },
        {
            date: 'January, 5th, 2021',
            title: 'Traveler first Business Travel Program',
            image: BlogTravel, // Bike riding
            description: 'When your employees travel for work, do they find your company\'s travel program more of a help or a hindrance? If it\'s the latter, it\'s time you considered some adjustments that can make a...'
        },
        {
            date: 'December, 17th, 2020',
            title: 'Make Commute Hassle Free',
            image: BlogCommute, // Typing on laptop
            description: 'Customise your commute program to address your employees travel needs If time is money, then wasted time is wasted money. The kind of time-wasting activities we\'re talking about here...'
        },
        {
            date: 'December, 10th, 2020',
            title: 'Delight your Customers with this',
            image: BlogCustomers, // Group of people illustration placeholder
            description: 'Delight your customers with this! It\'s time to reach the new customers and give them the importance they deserve. Keeping convenience at the core, we came up with Genzo Coupon...'
        },
        {
            date: 'December, 7th, 2020',
            title: 'Help your Business Grow and Travel Faster',
            image: BlogGrowth, // Infographic style placeholder
            description: 'We built Genzo Corporate to help organisations perfect the way they move the people that matter to them. And while our initial focus was on driving business travel efficiency through features like monthly billing...'
        },
        {
            date: 'June, 15th, 2020',
            title: 'HELMET AWARENESS CAMPAIGN BY GENZO',
            image: BlogHelmet, // Police helmet safety
            description: 'Research shows that two-wheeler riders reduce their risk of head injuries by 80 percent when they wear helmets. Most of the deaths and critical injuries reported in two-wheeler accidents...'
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
                    <a href="/safety" className="hover:text-[#FF8C00] transition-colors">Safety</a>
                    <a href="/careers" className="hover:text-[#FF8C00] transition-colors">Careers</a>
                    <a href="/blog" className="text-black border-b-2 border-[#FFE755] pb-1 transition-colors">Blog</a>
                    <a href="/press" className="hover:text-[#FF8C00] transition-colors">Press</a>
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
                        <a href="/careers" className="hover:text-[#FF8C00] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Careers</a>
                        <a href="/blog" className="text-black border-b-2 border-[#FFE755] pb-1 w-fit" onClick={() => setIsMobileMenuOpen(false)}>Blog</a>
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

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-16 relative z-10 pb-20 md:pb-40">
                {/* Background Shape Left */}
                <div className="absolute top-0 left-0 w-1/3 h-screen bg-[#FFFBEB] -z-10 transform -skew-x-12 -translate-x-32 opacity-50"></div>

                {/* Decorative Dots - Right */}
                <div className="absolute top-20 right-0 opacity-20 -z-10">
                    <div className="grid grid-cols-12 gap-3">
                        {[...Array(96)].map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 bg-[#FFE755] rounded-full"></div>
                        ))}
                    </div>
                </div>

                <h1 className="text-4xl md:text-6xl font-light mb-10 md:mb-20 text-gray-800">Blog</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {posts.map((post, index) => (
                        <div key={index} className="flex flex-col group cursor-pointer">
                            <div className="rounded-2xl overflow-hidden mb-6 shadow-md hover:shadow-xl transition-all duration-300 h-64 relative bg-gray-100">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                                {index < 2 && (
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                                        <span className="text-white bg-blue-600 px-2 py-0.5 text-xs font-bold w-fit mb-2">ACKO DRIVE</span>
                                        <h3 className="text-white font-bold text-lg uppercase leading-tight selection:bg-[#FFE755]">{post.title}</h3>
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-col">
                                <span className="text-gray-400 text-xs mb-3">{post.date}</span>
                                {index >= 2 ? (
                                    <>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-[#FF8C00] transition-colors">{post.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4 font-light">
                                            {post.description}
                                        </p>
                                    </>
                                ) : (
                                    // First two items have title inside image overlay mostly, but design shows title below too? 
                                    // Image shows text below for all cards. "Jaw dropping prices..." is below the image in the screenshot.
                                    // Wait, let's look closer at the image.
                                    // Row 1, Card 1: Text IS below the image. "Jaw dropping prices on Brand new cars".
                                    // So I should render title below for ALL items.
                                    // The "ACKO DRIVE" overlay is inside the image.
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-[#FF8C00] transition-colors">{post.title}</h3>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center mt-20 space-x-4">
                    <button className="w-10 h-10 rounded-full bg-[#FFE755] flex items-center justify-center text-white font-bold shadow-md hover:bg-[#FF8C00] transition-colors">
                        1
                    </button>
                    <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold hover:bg-gray-200 transition-colors">
                        2
                    </button>
                    <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold hover:bg-gray-200 transition-colors">
                        &gt;&gt;
                    </button>
                </div>

            </main>

            {/* Footer - Black Version */}
            {/* Footer */}
            <Footer />

            <DownloadAppModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default Blog;
