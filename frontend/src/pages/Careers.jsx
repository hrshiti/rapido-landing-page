import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CareersPageImg from "../assets/Images for Website with Titles/Careers Page.png";

const Careers = () => {
    return (
        <div className="font-sans text-gray-800 bg-white min-h-screen relative overflow-x-hidden">
            <Header />

            {/* Main Content - Full Width Image */}
            <main className="w-full">
                <img
                    src={CareersPageImg}
                    alt="Careers at Genzo"
                    className="w-full h-screen object-cover"
                />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Careers;
