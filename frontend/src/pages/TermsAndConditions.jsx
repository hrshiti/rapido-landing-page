import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsAndConditions = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            {/* Main Content */}
            <main className="flex-grow max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-20">
                <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                    Genzo Terms & Conditions
                    <div className="h-2 w-24 bg-[#FFBC00] mt-3 rounded-full"></div>
                </h1>
                <p className="text-gray-500 mb-12 text-lg">Last Updated: February 2026</p>

                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
                    <p className="text-justify">
                        These Terms and Conditions ("Terms") govern your use of the Genzo Platform, including the mobile application, website <a href="https://www.genzoride.com" className="text-[#FFBC00] hover:underline">www.genzoride.com</a> and any services offered by Genzo ("Genzo", "we", "us" or "our"), whether as a rider/passenger ("Rider") or as a driver/partner ("Driver/Pilot") (collectively, "User(s)"). By accessing or using the Genzo Platform or services, you agree to be bound by these Terms.
                    </p>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">1. Definitions</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>"Platform"</strong> means the Genzo mobile app, website www.genzoride.com or any interface designed by Genzo to enable Riders and Drivers to access services.</li>
                            <li><strong>"Services"</strong> means any ride-hailing (bike, taxi, auto), delivery, parcel transport or related services facilitated by the Platform.</li>
                            <li><strong>"Driver/Pilot"</strong> means an independent third-party service provider who has registered with Genzo to provide Services using a vehicle.</li>
                            <li><strong>"Rider"</strong> means a person who books Services on the Genzo Platform.</li>
                            <li><strong>"Booking"</strong> means a request placed by a Rider for an available Driver to provide Services.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">2. Acceptance of Terms</h2>
                        <p>By registering for or using the Platform or Services, you agree to these Terms and to Genzo's Privacy Policy, including any updates we may make from time to time. If you do not agree to the Terms, you must not access or use the Platform.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">3. Eligibility and Registration</h2>
                        <h3 className="text-xl font-semibold text-black mb-3">3.1 Rider Eligibility</h3>
                        <ul className="list-disc pl-6 space-y-2 mb-4">
                            <li>Riders must be at least 18 years old.</li>
                            <li>Riders must provide accurate personal information.</li>
                            <li>Riders are responsible for maintaining account confidentiality.</li>
                        </ul>
                        <h3 className="text-xl font-semibold text-black mb-3">3.2 Driver/Pilot Eligibility</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Drivers must be at least 18 years old.</li>
                            <li>Drivers must provide accurate personal, vehicle and licence information.</li>
                            <li>Drivers must comply with applicable local laws and possess valid licences, registration, insurance, permits and any certifications as required for the Services.</li>
                            <li>Drivers must undergo any verification or onboarding process required by Genzo, including background checks or document validation.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">4. Use of the Platform</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Genzo provides a technology platform to connect Riders with Drivers; Genzo does not directly provide transportation or delivery services.</li>
                            <li>Acceptance of a Booking by a Driver creates a direct engagement between the Rider and the Driver, subject to these Terms.</li>
                            <li>Drivers have discretion to accept or reject Booking requests.</li>
                            <li>Genzo may provide trip details, including Driver identity and contact information, to Riders once a Booking is accepted.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">5. Rider Responsibilities</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Riders agree to treat Drivers with respect.</li>
                            <li>Riders shall not request Services to transport illegal, hazardous or prohibited items.</li>
                            <li>Riders shall pay the fare, taxes, tolls, surcharges and any applicable fees associated with the Service as shown on the Platform.</li>
                            <li>Riders must arrive at the designated pickup point on time.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">6. Driver/Pilot Responsibilities</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Drivers must comply with all road and traffic laws.</li>
                            <li>Drivers shall maintain their vehicles in safe operating condition.</li>
                            <li>Drivers shall not consume alcohol or drugs before or while providing Services.</li>
                            <li>Drivers must comply with any training or verification requirements that Genzo may specify.</li>
                            <li>Drivers shall not use the Platform for unlawful purposes.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">7. Fares and Payments</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Fare rates, including base fare, per-kilometre charges, surge pricing and additional charges, will be displayed on the Platform.</li>
                            <li>Riders may pay through available payment methods in the app or as permitted by Genzo.</li>
                            <li>Drivers agree that fares may be collected by Genzo on their behalf, and payouts shall be made in accordance with the payout terms displayed on the Platform.</li>
                            <li>Genzo may charge service fees, convenience fees or commissions in accordance with pricing displayed on the Platform.</li>
                            <li>All payments are final unless otherwise refunded under Genzo's refund policies.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">8. Cancellation and No-Show Policies</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Riders may cancel a Booking subject to the cancellation terms shown in the app.</li>
                            <li>Drivers may cancel accepted bookings under conditions permitted by Genzo.</li>
                            <li>Cancelled services may attract cancellation fees as indicated in the Platform.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">9. Insurance and Liability</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Genzo may provide limited insurance coverage, where required by law or displayed on the Platform. Terms of such coverage (including eligibility, claims, limits and exclusions) will be provided separately.</li>
                            <li>Genzo is not responsible for personal injuries or property damage arising from a ride or delivery, except to the extent required under applicable law.</li>
                            <li>Genzo is not liable for loss, theft, or damage to items in a Rider's possession during a service.</li>
                            <li>Drivers and Riders agree to indemnify Genzo against claims arising from their misuse of the Platform or violation of these Terms.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">10. Ratings and Reviews</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Genzo may use ratings and feedback to evaluate Drivers and Riders.</li>
                            <li>Users agree not to post defamatory, abusive or false reviews.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">11. Intellectual Property</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Genzo owns all rights to the Platform, trademarks, content, images, text and software.</li>
                            <li>Users are granted a limited licence to use the Platform solely to access services.</li>
                            <li>Users shall not copy, distribute, reverse engineer, create derivative works or otherwise misuse Genzo intellectual property.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">12. Safety, Security and Conduct</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Users agree to conduct themselves respectfully and lawfully.</li>
                            <li>Genzo may suspend or deactivate accounts that violate these Terms or engage in harmful conduct.</li>
                            <li>Drivers and Riders must comply with applicable safety practices.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">13. Third-Party Content</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>The Platform may contain links to third-party services; Genzo is not responsible for third-party content, policies or practices.</li>
                            <li>Riders and Drivers use third-party services at their own risk.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">14. Term and Termination</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>These Terms remain in effect until terminated.</li>
                            <li>Genzo may suspend, restrict or terminate access to the Platform or Services at any time, without notice, for violation of these Terms or for other business reasons.</li>
                            <li>Riders and Drivers may deactivate their accounts at any time through the app.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">15. Governing Law and Dispute Resolution</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>These Terms are governed by the laws of India.</li>
                            <li>Any disputes shall be resolved amicably in good faith, and failing that, through arbitration in Dehradun, Uttarakhand, India, under the Arbitration and Conciliation Act, 1996.</li>
                            <li>The seat of arbitration shall be Dehradun, the language shall be English.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">16. Amendments</h2>
                        <p>Genzo may update or modify these Terms from time to time. Updates will be effective upon posting on the Platform. Continued use of the Platform constitutes acceptance of updated Terms.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">17. Contact Information</h2>
                        <p>For questions about these Terms, please contact us at:</p>
                        <ul className="list-none pl-0 space-y-2 mt-4">
                            <li><strong>Email:</strong> <a href="mailto:support@genzoride.com" className="text-[#FFBC00] hover:underline">support@genzoride.com</a></li>
                            <li><strong>Address:</strong> Genzo, Shimla Bypass Rd, Buddi Chowk, Dehradun, Uttarakhand 248007</li>
                        </ul>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default TermsAndConditions;
