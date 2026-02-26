import React, { useState, useRef, useEffect } from 'react';
import DownloadAppModal from '../components/DownloadAppModal';
import Header from '../components/Header';
import '../App.css';
import { useGoogleMapsScript } from '../hooks/useGoogleMapsScript';
import { submitWebbookingStore } from '../services/webbookingApi';

// Importing assets
import Footer from '../components/Footer';
import Logo from '../assets/Genzo Logo.png';
import PilotLogo from '../assets/Genzo Pilot Logo.png';
import BikeIcon from '../assets/Updated Icons/1_Bike.png';
import AutoIcon from '../assets/Updated Icons/2_AutoRickshaw.png';
import ERickshawIcon from '../assets/Updated Icons/3_E-Rickshaw.png';
import TaxiIcon from '../assets/Updated Icons/4_Taxi.png';
import ParcelIcon from '../assets/Updated Icons/5_Parcel.png';

// Import downloaded images
import Ride1 from "../assets/Images for Website with Titles/1_Quick Rides, Easy on the Pocket.jpg";
import Ride2 from "../assets/Images for Website with Titles/2_Quick Rides, Easy on the Pocket.jpg";
import Ride3 from "../assets/Images for Website with Titles/3_Quick Rides, Easy on the Pocket.jpg";
import Ride4 from "../assets/Images for Website with Titles/4_Quick Rides, Easy on the Pocket.jpg";
import Driver1 from "../assets/Images for Website with Titles/1_Log In Anytime. Earn Anytime.jpg";
import Driver2 from "../assets/Images for Website with Titles/2_Log In Anytime. Earn Anytime.jpg";
import SafetyImg from "../assets/Images for Website with Titles/Everyones Safety Matters.jpg";

/** Format YYYY-MM-DD to DD-MM-YYYY for API */
function formatDateForApi(dateStr) {
    if (!dateStr) return '';
    const [y, m, d] = dateStr.split('-');
    return d && m && y ? `${d}-${m}-${y}` : dateStr;
}

function Home() {
    const [pickupLocation, setPickupLocation] = useState('');
    const [pickupLat, setPickupLat] = useState('');
    const [pickupLng, setPickupLng] = useState('');
    const [dropoffLocation, setDropoffLocation] = useState('');
    const [dropoffLat, setDropoffLat] = useState('');
    const [dropoffLng, setDropoffLng] = useState('');
    const [pickupDate, setPickupDate] = useState('');
    const [pickupTime, setPickupTime] = useState('');
    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const pickupInputRef = useRef(null);
    const dropInputRef = useRef(null);
    const { isLoaded: mapsLoaded, error: mapsError } = useGoogleMapsScript();

    useEffect(() => {
        if (!mapsLoaded || !window.google?.maps?.places) return;
        const pickupEl = pickupInputRef.current;
        const dropEl = dropInputRef.current;
        if (!pickupEl || !dropEl) return;

        const options = { types: ['establishment', 'geocode'] };
        const pickupAutocomplete = new window.google.maps.places.Autocomplete(pickupEl, options);
        const dropAutocomplete = new window.google.maps.places.Autocomplete(dropEl, options);

        const onPickupPlace = () => {
            const place = pickupAutocomplete.getPlace();
            if (place?.formatted_address) setPickupLocation(place.formatted_address);
            else if (place?.name) setPickupLocation(place.name);
            if (place?.geometry?.location) {
                setPickupLat(String(place.geometry.location.lat()));
                setPickupLng(String(place.geometry.location.lng()));
            }
        };
        const onDropPlace = () => {
            const place = dropAutocomplete.getPlace();
            if (place?.formatted_address) setDropoffLocation(place.formatted_address);
            else if (place?.name) setDropoffLocation(place.name);
            if (place?.geometry?.location) {
                setDropoffLat(String(place.geometry.location.lat()));
                setDropoffLng(String(place.geometry.location.lng()));
            }
        };

        pickupAutocomplete.addListener('place_changed', onPickupPlace);
        dropAutocomplete.addListener('place_changed', onDropPlace);
        return () => {
            window.google.maps.event.clearInstanceListeners(pickupAutocomplete);
            window.google.maps.event.clearInstanceListeners(dropAutocomplete);
        };
    }, [mapsLoaded]);

    const handleSubmit = async (e) => {
        e?.preventDefault?.();
        setSubmitError('');
        setSubmitSuccess(false);

        const trimmedName = name.trim();
        const trimmedMobile = mobileNumber.trim();
        if (!pickupLocation.trim()) {
            setSubmitError('Please enter pickup location.');
            return;
        }
        if (!dropoffLocation.trim()) {
            setSubmitError('Please enter drop location.');
            return;
        }
        if (!pickupDate) {
            setSubmitError('Please select pickup date.');
            return;
        }
        if (!pickupTime) {
            setSubmitError('Please select pickup time.');
            return;
        }
        if (!trimmedName) {
            setSubmitError('Please enter your name.');
            return;
        }
        if (!trimmedMobile) {
            setSubmitError('Please enter your mobile number.');
            return;
        }

        setIsSubmitting(true);
        const payload = {
            pickup_location: pickupLocation.trim(),
            dropoff_location: dropoffLocation.trim(),
            pickup_date: formatDateForApi(pickupDate),
            pickup_time: pickupTime,
            name: trimmedName,
            mobile_number: trimmedMobile,
            pickup_lat: pickupLat || '',
            pickup_lang: pickupLng || '',
            dropoff_lat: dropoffLat || '',
            dropoff_lang: dropoffLng || '',
        };
        const result = await submitWebbookingStore(payload);
        setIsSubmitting(false);

        if (result.ok) {
            setSubmitSuccess(true);
        } else {
            setSubmitError(result.error || 'Booking request failed. Please try again.');
        }
    };

    const services = [
        { name: 'Bike', icon: BikeIcon },
        { name: 'Auto', icon: AutoIcon },
        { name: 'E-rickshaw', icon: ERickshawIcon },
        { name: 'Taxi', icon: TaxiIcon },
        { name: 'Parcel', icon: ParcelIcon },
    ];

    return (
        <div className="font-sans text-gray-800">
            {/* Header */}
            {/* Header */}
            <Header />

            {/* Hero Section */}
            <section className="relative flex flex-col pt-16 items-center bg-gray-50 overflow-hidden" style={{ minHeight: '80vh' }}>
                {/* Background Map */}
                <div className="absolute inset-0 z-0">
                    <div className="w-full h-full bg-cover bg-center opacity-30" style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg")' }}></div>
                </div>

                <div className="relative z-10 w-full max-w-3xl text-center px-4 mt-8">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-gray-900 tracking-tight">
                        Ride Anywhere. Genzo Everywhere.
                    </h1>

                    <form onSubmit={handleSubmit} className="w-full mx-auto flex flex-col gap-5 max-w-2xl">
                        {mapsError && (
                            <p className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-4 py-2">
                                {mapsError} Location suggestions may not work.
                            </p>
                        )}
                        {submitError && (
                            <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-2" role="alert">
                                {submitError}
                            </p>
                        )}
                        {submitSuccess && (
                            <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-2" role="status">
                                Booking request sent. We will contact you shortly.
                            </p>
                        )}

                        {/* Pickup */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 flex items-center px-6 py-4 hover:shadow-md transition-shadow">
                            <div className="text-gray-900 text-xl mr-5 shrink-0">
                                <div className="w-2 h-2 rounded-full bg-black"></div>
                            </div>
                            <input
                                ref={pickupInputRef}
                                type="text"
                                placeholder="Enter Pickup Location"
                                className="w-full text-lg text-gray-700 outline-none placeholder-gray-400 font-normal bg-transparent"
                                value={pickupLocation}
                                onChange={(e) => setPickupLocation(e.target.value)}
                                autoComplete="off"
                                aria-label="Pickup location"
                            />
                        </div>

                        {/* Drop */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 flex items-center px-6 py-4 hover:shadow-md transition-shadow">
                            <div className="text-gray-900 text-xl mr-5 shrink-0">
                                <div className="w-2 h-2 rounded-full border-2 border-black"></div>
                            </div>
                            <input
                                ref={dropInputRef}
                                type="text"
                                placeholder="Enter Drop Location"
                                className="w-full text-lg text-gray-700 outline-none placeholder-gray-400 font-normal bg-transparent"
                                value={dropoffLocation}
                                onChange={(e) => setDropoffLocation(e.target.value)}
                                autoComplete="off"
                                aria-label="Drop location"
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200 px-4 py-3">
                                <label htmlFor="pickup-date" className="block text-xs text-gray-500 mb-1">Pickup Date</label>
                                <input
                                    id="pickup-date"
                                    type="date"
                                    className="w-full text-gray-700 outline-none font-normal min-h-8"
                                    value={pickupDate}
                                    onChange={(e) => setPickupDate(e.target.value)}
                                    min={new Date().toISOString().split('T')[0]}
                                    aria-label="Pickup date"
                                />
                            </div>
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200 px-4 py-3">
                                <label htmlFor="pickup-time" className="block text-xs text-gray-500 mb-1">Pickup Time</label>
                                <input
                                    id="pickup-time"
                                    type="time"
                                    className="w-full text-gray-700 outline-none font-normal min-h-8"
                                    value={pickupTime}
                                    onChange={(e) => setPickupTime(e.target.value)}
                                    aria-label="Pickup time"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200 px-4 py-3">
                                <label htmlFor="booking-name" className="block text-xs text-gray-500 mb-1">Your Name</label>
                                <input
                                    id="booking-name"
                                    type="text"
                                    placeholder="Name"
                                    className="w-full text-gray-700 outline-none placeholder-gray-400 font-normal"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    aria-label="Your name"
                                />
                            </div>
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200 px-4 py-3">
                                <label htmlFor="booking-mobile" className="block text-xs text-gray-500 mb-1">Mobile Number</label>
                                <input
                                    id="booking-mobile"
                                    type="tel"
                                    placeholder="10-digit mobile"
                                    className="w-full text-gray-700 outline-none placeholder-gray-400 font-normal"
                                    value={mobileNumber}
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                    maxLength={15}
                                    aria-label="Mobile number"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full mt-4 py-4 rounded-lg font-bold text-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-black bg-[#FFBC00] hover:bg-white disabled:opacity-70 disabled:pointer-events-none"
                        >
                            {isSubmitting ? 'Submitting…' : 'Book Ride'}
                        </button>
                    </form>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-10 md:py-20 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16 text-gray-900 leading-tight">
                        Our Services
                        {/* Orange Underline */}
                        <div className="h-2 w-16 mt-2 bg-[#FFBC00] rounded-full"></div>
                    </h2>

                    {/* 5 columns layout */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
                        {services.map((service, index) => (
                            <div key={index} className="flex flex-col items-center group cursor-pointer transition-all hover:-translate-y-1">
                                <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-50 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-center mb-6 group-hover:shadow-md transition-all p-1 hover:border-[#FFBC00] overflow-hidden">
                                    <img src={service.icon} alt={service.name} className="w-full h-full object-contain filter drop-shadow-sm mix-blend-multiply transform scale-125" />
                                </div>
                                <span className="text-xl font-bold text-gray-900 text-center">{service.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Info Section 1: Quick Rides */}
            <section className="py-16 md:py-32 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10 md:gap-16">
                    {/* Text Content */}
                    <div className="md:w-1/2 text-left">
                        <h2 className="text-3xl md:text-6xl font-extrabold mb-8 leading-tight text-gray-900">Quick Rides,<br />Easy on the Pocket</h2>
                        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-lg leading-relaxed">
                            At Genzo, we make sure you get quick rides without worrying about high fares, so every trip stays easy on your pocket.
                        </p>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-10 py-4 rounded-full font-bold text-lg text-black transition-all transform hover:scale-105 hover:bg-white shadow-xl bg-[#FFBC00]"
                        >
                            Book a ride &rarr;
                        </button>
                    </div>

                    {/* Image Grid */}
                    <div className="md:w-1/2 w-full grid grid-cols-2 gap-6">
                        <div className="rounded-[2.5rem] overflow-hidden bg-gray-200 transform hover:scale-[1.02] transition-transform shadow-lg" style={{ aspectRatio: '3/4' }}>
                            <img src={Ride1} alt="Quick Ride 1" className="w-full h-full object-cover" />
                        </div>
                        <div className="rounded-[2.5rem] overflow-hidden bg-gray-200 mt-12 transform hover:scale-[1.02] transition-transform shadow-lg" style={{ aspectRatio: '3/4' }}>
                            <img src={Ride2} alt="Quick Ride 2" className="w-full h-full object-cover" />
                        </div>
                        <div className="rounded-[2.5rem] overflow-hidden bg-gray-200 -mt-12 transform hover:scale-[1.02] transition-transform shadow-lg" style={{ aspectRatio: '3/4' }}>
                            <img src={Ride3} alt="Quick Ride 3" className="w-full h-full object-cover" />
                        </div>
                        <div className="rounded-[2.5rem] overflow-hidden bg-gray-200 transform hover:scale-[1.02] transition-transform shadow-lg" style={{ aspectRatio: '3/4' }}>
                            <img src={Ride4} alt="Quick Ride 4" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Info Section 2: Flexible Hours */}
            <section className="py-16 md:py-32 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
                    {/* Text Content */}
                    <div className="md:w-1/2 text-left">
                        <h2 className="text-3xl md:text-6xl font-extrabold mb-8 leading-tight text-gray-900">Log In Anytime.<br />Earn Anytime.</h2>
                        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-lg leading-relaxed">
                            Join Genzo as a Pilot and enjoy flexible work with earnings based on availability.
                        </p>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-10 py-4 rounded-full font-bold text-lg text-black transition-all transform hover:scale-105 shadow-xl bg-[#FFBC00] hover:bg-white"
                        >
                            Join as Pilot &rarr;
                        </button>
                    </div>

                    {/* Image Grid */}
                    <div className="md:w-1/2 w-full grid grid-cols-2 gap-6">
                        <div className="rounded-[2.5rem] overflow-hidden bg-gray-200 transform hover:scale-[1.02] transition-transform shadow-lg" style={{ aspectRatio: '3/4' }}>
                            <img src={Driver1} alt="Flexible Hours 1" className="w-full h-full object-cover" />
                        </div>
                        <div className="rounded-[2.5rem] overflow-hidden bg-gray-200 mt-12 transform hover:scale-[1.02] transition-transform shadow-lg" style={{ aspectRatio: '3/4' }}>
                            <img src={Driver2} alt="Flexible Hours 2" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Safety For All Section (New) */}
            <section className="py-12 md:py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10 md:gap-16">
                    <div className="md:w-1/2 text-left">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                            Everyone's Safety Matters
                            <div className="h-2 w-20 bg-[#FFBC00] mt-3 rounded-full"></div>
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
                            At Genzo, everyone's safety matters, and we continuously work to ensure safe, reliable, and comfortable rides.
                        </p>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <div className="rounded-[2.5rem] overflow-hidden shadow-lg h-[400px]">
                            <img src={SafetyImg} alt="Safety" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Download Now Section (New) */}
            <section className="bg-gray-100 py-10 md:py-20 text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
                        Download Now
                        <div className="h-2 w-20 bg-[#FFBC00] mx-auto mt-4 rounded-full"></div>
                    </h2>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                        {/* App Card 1 */}
                        <div className="flex flex-col items-center">
                            <div className="w-28 h-28 border-4 border-black rounded-3xl flex items-center justify-center mb-4 overflow-hidden bg-black">
                                <img src={Logo} alt="Genzo User App" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-gray-900 text-lg font-bold">Genzo: Bike, Auto,<br />Cabs & Parcel</p>
                        </div>
                        {/* App Card 2 */}
                        <div className="flex flex-col items-center">
                            <div className="w-28 h-28 border-4 border-black rounded-3xl flex items-center justify-center mb-4 overflow-hidden bg-black">
                                <img src={PilotLogo} alt="Genzo Pilot App" className="w-full h-full object-cover" />
                            </div>
                            <p className="text-gray-900 text-lg font-bold">Genzo Pilot:<br />Drive & Earn</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            {/* Footer */}
            {/* Footer */}
            <Footer />

            {/* Download App Modal */}
            <DownloadAppModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        </div>
    );
}

export default Home;
