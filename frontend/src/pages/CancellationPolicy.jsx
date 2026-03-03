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
                        Welcome to Genzo Ride. We value both our Riders and Captains and aim to maintain a fair and transparent system. This Cancellation & Refund Policy explains the rules applicable when a ride is cancelled by either party.
                    </p>

                    <p className="text-justify">
                        By booking a ride on Genzo Ride, you agree to the terms mentioned below.
                    </p>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">1. Ride Cancellation by Rider</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">1.1 Before Captain Assignment</h3>
                                <p>Riders may cancel a ride request before a Captain (Driver) is assigned without any cancellation charges.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">1.2 After Captain Assignment</h3>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                    <li>If the ride is cancelled within 2 minutes of Captain assignment → No cancellation fee will be charged.</li>
                                    <li>If the ride is cancelled after 2 minutes of Captain assignment → A cancellation fee may apply.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">1.3 After Captain Arrives at Pickup Location</h3>
                                <p>If the Captain reaches the pickup point and the Rider cancels, cancellation charges will apply. Charges may include:</p>
                                <ul className="list-disc pl-6 space-y-2 mt-2">
                                    <li>Base fare</li>
                                    <li>Distance travelled by Captain towards pickup</li>
                                    <li>Waiting time charges (if applicable)</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">2. Ride Cancellation by Captain</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>If a Captain cancels the ride after accepting it, the Rider will not be charged.</li>
                            <li>Frequent or unjustified cancellations by Captains may result in penalties, temporary suspension, or permanent removal from the Genzo Ride platform.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">3. No-Show Policy</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Captains are required to wait at the pickup location for a reasonable waiting period (typically 5 minutes unless otherwise specified).</li>
                            <li>If the Rider does not arrive within the waiting time, the Captain may cancel the ride.</li>
                            <li>In such cases, a cancellation or no-show fee may be charged to the Rider.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">4. Cancellation Charges</h2>
                        <p>Cancellation charges are calculated based on:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Time of cancellation</li>
                            <li>Distance travelled by Captain</li>
                            <li>Waiting time</li>
                            <li>Applicable city or service type</li>
                        </ul>
                        <p className="mt-4">The exact cancellation amount will be displayed to the Rider within the app or website. Genzo Ride reserves the right to modify cancellation charges at any time without prior notice.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">5. Refund Policy</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">5.1 Online Payments</h3>
                                <p>If a cancellation fee is applicable, it may be deducted from the prepaid amount. Any eligible refund will be processed within 5–7 working days, depending on the payment method and banking partner.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">5.2 Wallet Payments (If Applicable)</h3>
                                <p>Refunds will be credited to the Genzo Ride Wallet.</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">5.3 Cash Payments</h3>
                                <p>If payment is cash-based and cancellation charges apply, the amount may be added to the Rider’s next ride fare.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">6. Exceptional Circumstances</h2>
                        <p>Genzo Ride may waive cancellation charges in cases such as:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Technical or system errors</li>
                            <li>Incorrect Captain assignment</li>
                            <li>Safety concerns</li>
                            <li>Medical emergencies</li>
                            <li>Natural disasters or unforeseen circumstances</li>
                        </ul>
                        <p className="mt-4">All such cases will be reviewed individually, and Genzo Ride’s decision shall be final and binding.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">7. Abuse & Misuse</h2>
                        <p>Any attempt to misuse the cancellation system, including repeated cancellations without valid reasons, may lead to:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Account warning</li>
                            <li>Temporary suspension</li>
                            <li>Permanent account termination</li>
                        </ul>
                        <p className="mt-4">Genzo Ride reserves the right to take appropriate action to protect platform integrity.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">8. Policy Updates</h2>
                        <p>Genzo Ride may update or revise this Cancellation & Refund Policy at any time. Users are encouraged to review this page periodically for updates. Continued use of the platform after changes implies acceptance of the revised policy.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">9. Contact Us</h2>
                        <p>If you have any questions regarding this Cancellation Policy, please contact:</p>
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
