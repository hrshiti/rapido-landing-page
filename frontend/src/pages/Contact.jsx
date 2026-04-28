import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactUsImg from '../assets/Contact Us.jpg';
import { submitContactForm } from '../services/webbookingApi';

function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [role, setRole] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const result = await submitContactForm({
            name,
            email,
            mobile,
            role,
            message,
        });

        if (!result.ok) {
            alert(result.error || 'Failed to send message. Please try again later.');
            setIsSubmitting(false);
            return;
        }

        alert('Thank you! Your message has been sent to support@genzoride.com.');
        setName('');
        setEmail('');
        setMobile('');
        setRole('');
        setMessage('');
        setIsSubmitting(false);
    };

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
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2">Name <span className="text-[#FF8C00]">*</span></label>
                                <input type="text" name="name" required value={name} placeholder="Enter your name" onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded text-gray-700 focus:outline-none focus:border-[#FFE755] bg-gray-50 text-sm placeholder-gray-400" />
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2">Email Address <span className="text-[#FF8C00]">*</span></label>
                                <input type="email" name="email" required value={email} placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded text-gray-700 focus:outline-none focus:border-[#FFE755] bg-gray-50 text-sm placeholder-gray-400" />
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2">Mobile Number <span className="text-[#FF8C00]">*</span></label>
                                <input type="tel" name="mobile" required value={mobile} placeholder="Enter your mobile number" onChange={(e) => setMobile(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded text-gray-700 focus:outline-none focus:border-[#FFE755] bg-gray-50 text-sm placeholder-gray-400" />
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2">You are a <span className="text-[#FF8C00]">*</span></label>
                                <div className="relative">
                                    <select name="role" required value={role} onChange={(e) => setRole(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded text-gray-700 focus:outline-none focus:border-[#FFE755] bg-gray-50 appearance-none text-sm">
                                        <option value="" disabled>--select--</option>
                                        <option value="Customer">Customer</option>
                                        <option value="Pilot">Pilot</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2">Comment <span className="text-[#FF8C00]">*</span></label>
                                <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} required rows="4" placeholder="Enter your comment" className="w-full px-4 py-3 border border-gray-200 rounded text-gray-700 focus:outline-none focus:border-[#FFE755] bg-gray-50 text-sm placeholder-gray-400 resize-none"></textarea>
                            </div>

                            <button type="submit" disabled={isSubmitting} className={`w-full py-3 rounded font-bold text-black bg-[#FFBC00] transition-colors border border-transparent shadow-md ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-white hover:border-black'}`}>
                                {isSubmitting ? 'Sending...' : 'Submit'}
                            </button>
                        </form>
                    </div>

                    {/* Right Column: Address Info */}
                    <div className="flex-1 relative">
                        <div className="space-y-8 mt-6 lg:mt-10 max-w-sm ml-auto">
                            <div>
                                <h3 className="font-bold text-black mb-3 text-lg">Registered Office Address:</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Genzo, Shimla Bypass Rd, Buddi Chowk, Dehradun, Uttarakhand 248007
                                </p>
                            </div>

                            <div>
                                <h3 className="font-bold text-black mb-3 text-lg">Contact Email:</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    <a href="mailto:support@genzoride.com" className="text-[#FFBC00] hover:underline font-medium">
                                        support@genzoride.com
                                    </a>
                                </p>
                            </div>

                            {/* Contact Us Image */}
                            <div className="rounded-3xl overflow-hidden shadow-lg">
                                <img src={ContactUsImg} alt="Contact Us" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Contact;
