import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CareersPageImg from "../assets/Images for Website with Titles/Careers Page.png";

const Careers = () => {
    return (
        <div className="font-sans text-gray-800 bg-white min-h-screen relative overflow-x-hidden">
            <Header />

            {/* Main Content - Full Width Image */}
            <main className="w-full flex flex-col items-center justify-center py-12 md:py-24 bg-white min-h-[70vh] md:min-h-[calc(100vh-80px)]">
                <div className="w-full px-4 md:px-6 flex justify-center items-center">
                    <img
                        src={CareersPageImg}
                        alt="Careers at Genzo"
                        className="w-full max-w-xl md:max-w-6xl h-auto object-contain scale-110 md:scale-100"
                    />
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Careers;
