import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CancellationPolicy = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            {/* Main Content */}
            <main className="flex-grow max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-20">
                <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                    Cancellation & Refund Policy
                    <div className="h-2 w-24 bg-[#FFBC00] mt-3 rounded-full"></div>
                </h1>
                <p className="text-gray-500 mb-12 text-lg">Last Updated: March 2026</p>

                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
                    <p className="text-justify font-medium">
                        This Cancellation Policy outlines the terms under which bookings made on the Genzo platform may be cancelled by Riders or Genzo Pilots (Drivers). By using the Genzo platform, you agree to the terms described below.
                    </p>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">1. General Overview</h2>
                        <p className="text-gray-700">
                            Genzo aims to ensure a fair and efficient experience for both Riders and Genzo Pilots. Cancellations impact availability, earnings, and service quality; therefore, certain cancellation conditions and charges may apply.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">2. Rider Cancellation Policy</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">2.1 Free Cancellation Window</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>Riders may cancel a booking within a limited time after confirmation without any cancellation charges.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">2.2 Cancellation Charges</h3>
                                <p className="text-gray-700">A cancellation fee may apply if:</p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
                                    <li>The booking is cancelled after the free cancellation window</li>
                                    <li>The Genzo Pilot has already started moving towards the pickup location</li>
                                    <li>The Genzo Pilot has reached the pickup location and the Rider does not show up</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">2.3 No-Show</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
                                    <li>If a Rider fails to arrive at the pickup location within a reasonable waiting time, the Genzo Pilot may cancel the ride.</li>
                                    <li>In such cases, a no-show fee may be charged.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">3. Genzo Pilot (Driver) Cancellation Policy</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">3.1 Accepting Bookings</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
                                    <li>Genzo Pilots are expected to accept bookings responsibly and avoid unnecessary cancellations.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">3.2 Cancellation by Pilot</h3>
                                <p className="text-gray-700">A Genzo Pilot may cancel a booking under reasonable circumstances, including:</p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
                                    <li>Incorrect or incomplete pickup details</li>
                                    <li>Rider is unreachable</li>
                                    <li>Safety concerns</li>
                                    <li>Vehicle-related issues</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">3.3 Excessive Cancellations</h3>
                                <p className="text-gray-700">Frequent or unjustified cancellations by a Genzo Pilot may result in:</p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
                                    <li>Temporary suspension</li>
                                    <li>Reduced booking allocation</li>
                                    <li>Permanent deactivation in severe cases</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">4. Cancellation Charges & Adjustments</h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
                            <li>Cancellation charges (if applicable) will be displayed in the app before confirmation or at the time of cancellation.</li>
                            <li>Charges may vary based on:
                                <ul className="list-[circle] pl-6 space-y-1 mt-2">
                                    <li>Time of cancellation</li>
                                    <li>Distance covered by the Genzo Pilot</li>
                                    <li>Type of service (bike, auto, cab, parcel)</li>
                                </ul>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">5. Special Scenarios</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">5.1 Driver Delay</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
                                    <li>If the Genzo Pilot is significantly delayed, Riders may cancel without penalty in certain cases.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">5.2 Emergency Situations</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
                                    <li>Cancellation charges may be waived in genuine emergencies, subject to review.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">5.3 Technical Errors</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
                                    <li>In case of app or system errors, cancellation charges may be reversed after verification.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">6. Parcel & Delivery Cancellations</h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
                            <li>Cancellation of parcel deliveries after pickup may attract full or partial charges.</li>
                            <li>If the parcel is not ready at pickup, the Genzo Pilot may cancel and applicable fees may be charged.</li>
                            <li>Riders must ensure parcel details are accurate and lawful.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">7. Refunds</h2>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
                            <li>Any applicable refunds will be processed through the original payment method or Genzo wallet, as applicable.</li>
                            <li>Refund timelines may vary depending on payment mode and banking partners.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">8. Fair Usage & Abuse Prevention</h2>
                        <p className="text-gray-700">Genzo reserves the right to:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
                            <li>Monitor cancellation patterns</li>
                            <li>Restrict accounts with excessive cancellations</li>
                            <li>Take action against misuse of the cancellation feature</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">9. Policy Updates</h2>
                        <p className="text-gray-700">Genzo may update this Cancellation Policy from time to time. Continued use of the platform constitutes acceptance of the updated terms.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">10. Contact & Support</h2>
                        <p className="text-gray-700">If you have any questions regarding this Cancellation Policy, please contact:</p>
                        <ul className="list-none pl-0 space-y-2 mt-4">
                            <li><strong>📧 Email:</strong> <a href="mailto:support@genzoride.com" className="text-[#FFBC00] hover:underline">support@genzoride.com</a></li>
                        </ul>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default CancellationPolicy;
