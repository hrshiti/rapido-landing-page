import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Contact() {
    return (
        <div className="font-sans text-gray-800 bg-white min-h-screen flex flex-col justify-between">
            <Header />

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-16 w-full flex-grow">

                <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">You can find us here</h1>
                <p className="text-gray-500 mb-12 text-lg">Find help for your queries here:</p>

                <div className="flex flex-col lg:flex-row gap-10 md:gap-20">
                    {/* Left Column: Form */}
                    <div className="flex-1">
                        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Form submitted!"); }}>
                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2">Name <span className="text-[#FF8C00]">*</span></label>
                                <input type="text" placeholder="Enter your name" className="w-full px-4 py-3 border border-gray-200 rounded text-gray-700 focus:outline-none focus:border-[#FFE755] bg-gray-50 text-sm placeholder-gray-400" />
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2">Email Address <span className="text-[#FF8C00]">*</span></label>
                                <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 border border-gray-200 rounded text-gray-700 focus:outline-none focus:border-[#FFE755] bg-gray-50 text-sm placeholder-gray-400" />
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2">Mobile Number <span className="text-[#FF8C00]">*</span></label>
                                <input type="tel" placeholder="Enter your mobile number" className="w-full px-4 py-3 border border-gray-200 rounded text-gray-700 focus:outline-none focus:border-[#FFE755] bg-gray-50 text-sm placeholder-gray-400" />
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2">You are a <span className="text-[#FF8C00]">*</span></label>
                                <div className="relative">
                                    <select className="w-full px-4 py-3 border border-gray-200 rounded text-gray-700 focus:outline-none focus:border-[#FFE755] bg-gray-50 appearance-none text-sm">
                                        <option value="" disabled selected>--select--</option>
                                        <option value="customer">Customer</option>
                                        <option value="pilot">Pilot</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2">Comment <span className="text-[#FF8C00]">*</span></label>
                                <textarea rows="4" placeholder="Enter your comment" className="w-full px-4 py-3 border border-gray-200 rounded text-gray-700 focus:outline-none focus:border-[#FFE755] bg-gray-50 text-sm placeholder-gray-400 resize-none"></textarea>
                            </div>

                            <button type="submit" className="w-full py-3 rounded font-bold text-black bg-[#FFBC00] transition-colors hover:bg-white border border-transparent hover:border-black mt-6 shadow-md">
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
                                    <div key={i} className="w-1 h-1 bg-[#FFBC00] rounded-full"></div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-12 mt-10 lg:mt-32 max-w-sm ml-auto">
                            <div>
                                <h3 className="font-bold text-black mb-3 text-lg">Registered Office Address:</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Genzo, Shimla Bypass Rd, Buddi Chowk, Dehradun, Uttarakhand 248007
                                </p>
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
        </div>
    );
}

export default Contact;
