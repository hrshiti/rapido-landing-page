import { useState, useEffect } from 'react';

const GOOGLE_MAPS_SCRIPT_ID = 'google-maps-script';
const SCRIPT_URL = 'https://maps.googleapis.com/maps/api/js';

/**
 * Loads Google Maps JavaScript API with Places library.
 * @returns {{ isLoaded: boolean, error: string | null }}
 */
export function useGoogleMapsScript() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
        if (!apiKey) {
            setError('VITE_GOOGLE_MAPS_API_KEY is not set in .env');
            return;
        }

        if (window.google?.maps?.places) {
            setIsLoaded(true);
            return;
        }

        const existing = document.getElementById(GOOGLE_MAPS_SCRIPT_ID);
        if (existing) {
            if (window.google?.maps?.places) {
                setIsLoaded(true);
            } else {
                existing.addEventListener('load', () => setIsLoaded(true));
            }
            return;
        }

        const script = document.createElement('script');
        script.id = GOOGLE_MAPS_SCRIPT_ID;
        script.src = `${SCRIPT_URL}?key=${apiKey}&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = () => setIsLoaded(true);
        script.onerror = () => setError('Failed to load Google Maps script');
        document.head.appendChild(script);
    }, []);

    return { isLoaded, error };
}
