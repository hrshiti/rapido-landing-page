
import React from 'react';
import GenzoLogo from '../assets/GenzoLogo-removebg-preview.png'; // Adjust path if needed

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
                    {/* Captain Section */}
                    <div className="flex flex-col items-center">
                        <h3 className="text-2xl font-semibold mb-6">Captain App Download</h3>
                        <div className="w-32 h-32 border-4 border-yellow-400 rounded-full flex items-center justify-center mb-4 p-2">
                            <img src={GenzoLogo} alt="Genzo Captain" className="w-full h-full object-contain rounded-full mix-blend-multiply" />
                        </div>
                        <p className="text-gray-500 font-medium">Android</p>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-px h-64 bg-gray-300"></div>

                    {/* Customer Section */}
                    <div className="flex flex-col items-center">
                        <h3 className="text-2xl font-semibold mb-6">Customer App Download</h3>
                        <div className="w-32 h-32 bg-yellow-400 rounded-2xl flex items-center justify-center mb-4 p-2 shadow-sm">
                            <img src={GenzoLogo} alt="Genzo Customer" className="w-full h-full object-contain mix-blend-multiply" />
                        </div>
                        <p className="text-gray-500 font-medium">Android/iOS</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownloadAppModal;
