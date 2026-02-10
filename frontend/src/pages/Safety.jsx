import React, { useState } from 'react';
import DownloadAppModal from '../components/DownloadAppModal';
import Footer from '../components/Footer';
import '../App.css';
import GenzoLogo from '../assets/GenzoLogo-removebg-preview.png';

// Import images
import CaptainImg from '../assets/img1.jpg';
import CustomerWomanImg from '../assets/img4.avif';
import RideImg from '../assets/img3.jpeg';
import CustomerAppImg from '../assets/img2.webp';
import CaptainFeatureImg from '../assets/img5.jpg';

function Safety() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('overviews');

    return (
        <div className="font-sans text-gray-800 bg-white">
            {/* Header - Consistent with other pages but Safety active */}
            <header className="flex justify-between items-center px-4 md:px-24 py-2 bg-white sticky top-0 z-50">
                <div className="flex items-center">
                    {/* Logo Image */}
                    <img src={GenzoLogo} alt="Genzo Logo" className="h-24 md:h-28 w-auto object-contain" />
                </div>
                <nav className="hidden md:flex items-center space-x-12 text-base font-medium text-gray-800">
                    <a href="/" className="hover:text-[#FF8C00] transition-colors">Home</a>
                    <a href="/about" className="hover:text-[#FF8C00] transition-colors">About Us</a>
                    <a href="/safety" className="text-black font-bold border-b-2 border-[#FFE755] pb-1">Safety</a>
                    <a href="/careers" className="hover:text-[#FF8C00] transition-colors">Careers</a>
                    <a href="/blog" className="hover:text-[#FF8C00] transition-colors">Blog</a>
                    <a href="/press" className="hover:text-[#FF8C00] transition-colors">Press</a>
                    <a href="/contact" className="hover:text-[#FF8C00] transition-colors">Contact Us</a>
                </nav>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="hidden md:block bg-black text-white px-6 py-2 rounded-full font-bold hover:bg-[#333] transition-colors border border-transparent hover:border-[#FFE755]"
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
                        <a href="/safety" className="text-black font-bold border-b-2 border-black pb-1 w-fit" onClick={() => setIsMobileMenuOpen(false)}>Safety</a>
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

            {/* Sub-Navigation */}
            <div className="bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-10 md:px-24 py-6 flex space-x-8 text-gray-500 font-medium overflow-x-auto">
                    <button
                        onClick={() => setActiveTab('overviews')}
                        className={`transition-colors whitespace-nowrap ${activeTab === 'overviews' ? 'text-black font-bold border-b-2 border-yellow-400 pb-1' : 'hover:text-black'}`}
                    >
                        Overviews
                    </button>
                    <button
                        onClick={() => setActiveTab('customers')}
                        className={`transition-colors whitespace-nowrap ${activeTab === 'customers' ? 'text-black font-bold border-b-2 border-yellow-400 pb-1' : 'hover:text-black'}`}
                    >
                        Customers
                    </button>
                    <button
                        onClick={() => setActiveTab('captains')}
                        className={`transition-colors whitespace-nowrap ${activeTab === 'captains' ? 'text-black font-bold border-b-2 border-yellow-400 pb-1' : 'hover:text-black'}`}
                    >
                        Captains
                    </button>
                </div>
            </div>

            {/* Main Content - Overviews */}
            {activeTab === 'overviews' && (
                <>
                    <main className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-20 flex flex-col md:flex-row items-center gap-10 md:gap-16">

                        {/* Text Section */}
                        <div className="md:w-1/2 z-10">
                            <h1 className="text-3xl md:text-6xl font-extrabold mb-8 text-black leading-tight">
                                Safety for all.
                            </h1>

                            <p className="text-gray-600 leading-relaxed text-lg max-w-lg font-medium">
                                At Genzo, the well-being of our customers is above everything else. We are constantly in pursuit of enhancing our safety measures to ensure every Genzo ride is a pleasant and comfortable experience.
                            </p>
                        </div>

                        {/* Image Collage Section */}
                        <div className="md:w-1/2 relative h-[350px] md:h-[500px] w-full">

                            {/* Image 1: Captain (Left Center) */}
                            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-64 h-80 z-20 hover:scale-105 transition-transform duration-300">
                                <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-white shadow-xl relative bg-white">
                                    <img src={CaptainImg} alt="Captain" className="w-full h-full object-cover" />
                                </div>
                                {/* Yellow background card effect behind img 1 */}
                                <div className="absolute top-4 -left-4 w-full h-full rounded-2xl -z-10" style={{ backgroundColor: '#FFE755' }}></div>
                            </div>

                            {/* Image 2: Woman (Top Right) */}
                            <div className="absolute top-0 right-10 w-56 h-72 z-10 hover:scale-105 transition-transform duration-300">
                                <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-white shadow-xl relative bg-white">
                                    <img src={CustomerWomanImg} alt="Customer" className="w-full h-full object-cover" />
                                </div>
                                {/* Light background blob effect behind img 2 */}
                                <div className="absolute top-4 -right-4 w-full h-full rounded-2xl bg-gray-100 -z-10"></div>
                            </div>

                            {/* Image 3: Two people (Bottom Right) */}
                            <div className="absolute bottom-0 right-0 w-64 h-72 z-30 hover:scale-105 transition-transform duration-300">
                                <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-white shadow-xl relative bg-white">
                                    <img src={RideImg} alt="Ride" className="w-full h-full object-cover" />
                                </div>
                                {/* Yellow background card effect behind img 3 */}
                                <div className="absolute bottom-4 -right-4 w-full h-full rounded-2xl -z-10" style={{ backgroundColor: '#FFE755' }}></div>
                            </div>

                        </div>
                    </main>

                    {/* Covers Everyone Section */}
                    <section className="py-12 md:py-24 bg-white">
                        <div className="max-w-7xl mx-auto px-6 md:px-12">
                            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-black">
                                Covers Everyone
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                                {/* Card 1: For Customers */}
                                <div className="bg-white rounded-3xl p-0"> {/* Removed padding/shadow if purely image based top, but assuming card style */}
                                    <div className="rounded-[2.5rem] overflow-hidden mb-8 h-[300px] md:h-[500px] w-full bg-gray-100">
                                        <img src={CustomerAppImg} alt="Customer using app" className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-black mb-4">For Customers</h3>
                                    <p className="text-gray-600 text-lg mb-4 max-w-md">
                                        Every ride is tracked by Genzo, with access to granular latitudinal and longitudinal data.
                                    </p>
                                    <a href="#" className="text-black font-bold text-lg hover:underline inline-block">Know More</a>
                                </div>

                                {/* Card 2: For Captains */}
                                <div className="bg-white rounded-3xl p-0">
                                    <div className="rounded-[2.5rem] overflow-hidden mb-8 h-[300px] md:h-[500px] w-full bg-gray-100">
                                        <img src={CaptainFeatureImg} alt="Captain riding" className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-black mb-4">For Captains</h3>
                                    <p className="text-gray-600 text-lg mb-4 max-w-md">
                                        From hiring to training to monitoring to ongoing checks, we take all necessary steps to ensure our Captains safety
                                    </p>
                                    <a href="#" className="text-black font-bold text-lg hover:underline inline-block">Know More</a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Safety Measures Section */}
                    <section className="bg-[#FFE755] py-12 md:py-24 text-black">
                        <div className="max-w-7xl mx-auto px-6 md:px-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                                {/* Top Left: Main Header */}
                                <div>
                                    <div className="mb-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                            <path d="M8 11h8" />
                                            <path d="M12 15V7" />
                                        </svg>
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-8">
                                        Measures to ensure the well-being of both, our Captains and Customers.
                                    </h2>
                                </div>

                                {/* Top Right: Insurance */}
                                <div>
                                    <div className="mb-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                                            <path d="M12 2L1 7v6c0 5.55 3.84 10.74 9 12h4c5.16-1.26 9-6.45 9-12V7l-11-5z" opacity="0.3" /> {/* Placeholder style for umbrella essentially shield coverage */}
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Insurance</h3>
                                    <p className="text-lg leading-relaxed font-medium">
                                        Insurance can be claimed for any accident that occurs during the ride covering OPD treatment, hospitalization, and accidental benefit with a maximum sum insured of ₹5 Lakh. It can be claimed as soon as the ride starts.
                                    </p>
                                </div>

                                {/* Bottom Left: Support */}
                                <div>
                                    <div className="mb-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                                            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">24 x 7 Customer Support</h3>
                                    <p className="text-lg leading-relaxed font-medium">
                                        Both, our captains and customers can report any kind of issues to Genzo through the 24*7 support feature on the app post & during the ride.
                                    </p>
                                </div>

                                {/* Bottom Right: Rating System */}
                                <div>
                                    <div className="mb-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Two-way Rating System</h3>
                                    <p className="text-lg leading-relaxed font-medium">
                                        Post the ride, both parties can give a rating to each other and any rating below 3 is flagged from Genzo's end. Genzo reaches out to them in 10 minutes to address their concern. The Captain is terminated immediately in case of any misconduct.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Way Forward Section */}
                    <section className="py-12 md:py-24 bg-white">
                        <div className="max-w-4xl mx-auto px-6 text-center md:text-left">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">
                                Way forward on Safety
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                To further substantiate our commitment to Safety First towards customers & captains, we will be incorporating new features on our platform very soon.
                            </p>
                            <a href="#" className="font-bold text-lg hover:underline inline-flex items-center gap-2 text-black">
                                Know More
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </a>
                        </div>
                    </section>

                </>
            )}

            {/* Customers Tab Content */}
            {activeTab === 'customers' && (
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 min-h-[50vh]">
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 text-black">Safety for <span className="text-[#FF8C00]">Customers</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-3xl bg-gray-50 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#FFE755]">
                            <div className="w-12 h-12 bg-[#FFE755] rounded-full flex items-center justify-center mb-6 text-2xl">📍</div>
                            <h3 className="text-2xl font-bold mb-4">Live Ride Tracking</h3>
                            <p className="text-gray-600 leading-relaxed">Share your real-time ride status with family and friends. They can track your movement on the map and ensure you reach your destination safely.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-gray-50 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#FFE755]">
                            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6 text-2xl">📞</div>
                            <h3 className="text-2xl font-bold mb-4">Number Masking</h3>
                            <p className="text-gray-600 leading-relaxed">Your privacy is important. We mask your phone number so that the captain cannot see your personal contact details when you call them via the app.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-gray-50 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#FFE755]">
                            <div className="w-12 h-12 bg-[#EF4444] rounded-full flex items-center justify-center mb-6 text-2xl text-white">🆘</div>
                            <h3 className="text-2xl font-bold mb-4">SOS Emergency Button</h3>
                            <p className="text-gray-600 leading-relaxed">In case of any emergency, press the SOS button to immediately alert our safety team and your trusted contacts with your live location.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-gray-50 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#FFE755]">
                            <div className="w-12 h-12 bg-[#3B82F6] rounded-full flex items-center justify-center mb-6 text-2xl text-white">🎧</div>
                            <h3 className="text-2xl font-bold mb-4">24/7 Safety Support</h3>
                            <p className="text-gray-600 leading-relaxed">Our dedicated safety response team is available round-the-clock to assist you with any safety-related concerns during or after your ride.</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Captains Tab Content */}
            {activeTab === 'captains' && (
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 min-h-[50vh]">
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 text-black">Safety for <span className="text-[#FF8C00]">Captains</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-3xl bg-[#FFFBEB] hover:shadow-lg transition-all duration-300 border border-[#FFE755]/30">
                            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6 text-2xl text-white">🏥</div>
                            <h3 className="text-2xl font-bold mb-4">Accidental Insurance</h3>
                            <p className="text-gray-600 leading-relaxed">We provide comprehensive accidental insurance coverage for all our captains, covering medical expenses and hospitalization in case of mishaps during a ride.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-[#FFFBEB] hover:shadow-lg transition-all duration-300 border border-[#FFE755]/30">
                            <div className="w-12 h-12 bg-[#FFE755] rounded-full flex items-center justify-center mb-6 text-2xl">⛑️</div>
                            <h3 className="text-2xl font-bold mb-4">Helmet Enforcement</h3>
                            <p className="text-gray-600 leading-relaxed">We strictly enforce helmet usage and provide assistance in procuring high-quality helmets to ensure you are always protected on the road.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-[#FFFBEB] hover:shadow-lg transition-all duration-300 border border-[#FFE755]/30">
                            <div className="w-12 h-12 bg-[#EF4444] rounded-full flex items-center justify-center mb-6 text-2xl text-white">🚫</div>
                            <h3 className="text-2xl font-bold mb-4">Zero Tolerance Policy</h3>
                            <p className="text-gray-600 leading-relaxed">Your dignity matters. We have a zero-tolerance policy against any form of harassment or misconduct from customers, ensuring a respectful working environment.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-[#FFFBEB] hover:shadow-lg transition-all duration-300 border border-[#FFE755]/30">
                            <div className="w-12 h-12 bg-[#2563EB] rounded-full flex items-center justify-center mb-6 text-2xl text-white">🚨</div>
                            <h3 className="text-2xl font-bold mb-4">Captain Helpline</h3>
                            <p className="text-gray-600 leading-relaxed">A dedicated helpline exists solely for our captains to report legitimate grievances or safety issues, with priority resolution.</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Footer - Standard White Footer */}
            {/* Footer */}
            <Footer />

            <DownloadAppModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}

export default Safety;
