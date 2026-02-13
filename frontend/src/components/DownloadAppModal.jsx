
import React from 'react';
import GenzoLogo from '../assets/Genzo Logo.png';
import GenzoPilotLogo from '../assets/Genzo Pilot Logo.png';

const DownloadAppModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-8 max-w-4xl w-full relative shadow-2xl animate-fade-in-up">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-black text-3xl font-bold leading-none"
                >
                    &times;
                </button>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 py-8">
                    {/* Pilot Section */}
                    <div className="flex flex-col items-center">
                        <h3 className="text-2xl font-semibold mb-6">Pilot App Download</h3>
                        <div className="w-32 h-32 border-4 border-black rounded-3xl flex items-center justify-center mb-4 overflow-hidden bg-black">
                            <img src={GenzoPilotLogo} alt="Genzo Pilot" className="w-full h-full object-cover" />
                        </div>
                        <p className="text-gray-500 font-medium">Android</p>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-px h-64 bg-gray-300"></div>

                    {/* Customer Section */}
                    <div className="flex flex-col items-center">
                        <h3 className="text-2xl font-semibold mb-6">Customer App Download</h3>
                        <div className="w-32 h-32 border-4 border-black rounded-3xl flex items-center justify-center mb-4 overflow-hidden bg-black">
                            <img src={GenzoLogo} alt="Genzo Customer" className="w-full h-full object-cover" />
                        </div>
                        <p className="text-gray-500 font-medium">Android/iOS</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownloadAppModal;
