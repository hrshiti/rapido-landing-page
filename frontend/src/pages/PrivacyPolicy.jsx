import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            {/* Main Content */}
            <main className="flex-grow max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-20">
                <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
                    Genzo Privacy Policy
                    <div className="h-2 w-24 bg-[#FFBC00] mt-3 rounded-full"></div>
                </h1>
                <p className="text-gray-500 mb-12 text-lg">Last Updated: February 2026</p>

                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
                    <p className="text-justify">
                        Genzo ("Genzo", "we", "us", or "our") is committed to protecting the privacy of its users and service partners. This Privacy Policy explains how we collect, use, share, and protect information when you use the Genzo mobile application, website <a href="https://www.genzoride.com" className="text-[#FFBC00] hover:underline">www.genzoride.com</a>, and related services (collectively, the "Platform"). This Policy applies to Riders/Users, Drivers/Pilots, and anyone who accesses or uses the Platform.
                    </p>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">1. Information We Collect</h2>
                        <p>We collect information necessary to provide reliable, efficient, and secure mobility and delivery services.</p>

                        <h3 className="text-xl font-semibold text-black mb-3 mt-6">1.1 Information You Provide</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Name, phone number, email address</li>
                            <li>Profile photograph</li>
                            <li>Payment-related information (processed through third-party payment gateways)</li>
                            <li>Government-issued identification (for Drivers/Pilots)</li>
                            <li>Vehicle, license, and permit details (for Drivers/Pilots)</li>
                            <li>Communications with Genzo customer support</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-black mb-3 mt-6">1.2 Information Collected Automatically</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Location data, including pickup and drop-off points, routes, and trip status</li>
                            <li>Device information such as IP address, device type, operating system, and app version</li>
                            <li>App usage data, logs, and diagnostic information</li>
                            <li>Date, time, and duration of rides or deliveries</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-black mb-3 mt-6">1.3 Information from Third Parties</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Identity and background verification partners</li>
                            <li>Payment service providers</li>
                            <li>Technology partners supporting platform functionality</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">2. How We Use Your Information</h2>
                        <p>Genzo uses personal information to:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Provide, operate, and improve the Platform</li>
                            <li>Match Riders with Drivers/Pilots</li>
                            <li>Process payments, refunds, and incentives</li>
                            <li>Monitor service quality and prevent fraud or misuse</li>
                            <li>Provide customer support and respond to queries</li>
                            <li>Communicate important service-related updates</li>
                            <li>Comply with legal, regulatory, and governmental requirements</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">3. Location Information & Background Location Access</h2>
                        <p>Genzo collects real-time location data to enable ride bookings, navigation, delivery tracking, pricing, and service optimization.</p>
                        <p className="mt-4">Location data may be collected even when the app is running in the background, subject to the permissions you grant on your device. This allows features such as live trip tracking, route accuracy, and service availability.</p>
                        <p className="mt-4">You may manage or revoke location permissions through your device settings; however, limiting location access may affect Platform functionality.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">4. Cookies and Similar Technologies</h2>
                        <p>Genzo uses cookies and similar technologies on its website <a href="https://www.genzoride.com" className="text-[#FFBC00] hover:underline">www.genzoride.com</a> to:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Improve website functionality and performance</li>
                            <li>Understand user interactions and usage trends</li>
                            <li>Enhance user experience</li>
                        </ul>
                        <p className="mt-4">You may control cookie preferences through your browser settings. Disabling cookies may affect certain website features.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">5. Information Sharing and Disclosure</h2>
                        <p><strong>Genzo does not sell personal information.</strong></p>
                        <p className="mt-4">Information may be shared only as necessary:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Between Riders and Drivers/Pilots to complete rides or deliveries</li>
                            <li>With third-party service providers supporting payments, verification, analytics, or customer support</li>
                            <li>With law enforcement or government authorities when required by law</li>
                            <li>In connection with business restructuring, merger, or acquisition</li>
                        </ul>
                        <p className="mt-4">All third parties are contractually required to protect personal information and use it solely for authorized purposes.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">6. Data Security</h2>
                        <p>We implement reasonable administrative, technical, and physical safeguards to protect personal information against unauthorized access, loss, misuse, or alteration.</p>
                        <p className="mt-4">While we strive to protect your data, no system can guarantee absolute security.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">7. Data Retention</h2>
                        <p>Genzo retains personal information only for as long as necessary to:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Provide services</li>
                            <li>Comply with legal and regulatory obligations</li>
                            <li>Resolve disputes</li>
                            <li>Enforce agreements</li>
                        </ul>
                        <p className="mt-4">When data is no longer required, it is securely deleted or anonymized.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">8. Your Rights and Choices</h2>
                        <p>Subject to applicable laws, you may:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Access and update your personal information</li>
                            <li>Request account deletion (subject to legal retention requirements)</li>
                            <li>Withdraw consent where applicable</li>
                        </ul>
                        <p className="mt-4">Requests can be made through the app or by contacting Genzo support.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">9. Drivers / Pilots Specific Information</h2>
                        <p>Drivers/Pilots acknowledge that certain information—such as name, photograph, vehicle details, and approximate location—may be visible to Riders for service fulfillment and transparency.</p>
                        <p className="mt-4">Genzo may monitor trip activity, ratings, and performance metrics to maintain service quality and platform integrity.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">10. Children's Privacy</h2>
                        <p>The Platform is not intended for individuals under 18 years of age. Genzo does not knowingly collect personal information from minors.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">11. Grievance Officer (India – DPDP Act, 2023)</h2>
                        <p>In accordance with applicable data protection laws in India, Genzo has appointed a Grievance Officer to address concerns related to personal data.</p>
                        <ul className="list-none pl-0 space-y-2 mt-4">
                            <li><strong>Grievance Officer:</strong> Rohan Bhardwaj</li>
                            <li><strong>Email:</strong> <a href="mailto:official@genzoride.com" className="text-[#FFBC00] hover:underline">official@genzoride.com</a></li>
                            <li><strong>Address:</strong> Genzo, Shimla Bypass Rd, Buddi Chowk, Dehradun, Uttarakhand 248007</li>
                        </ul>
                        <p className="mt-4">Users may contact the Grievance Officer for any concerns regarding data processing or privacy-related issues.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">12. Changes to This Privacy Policy</h2>
                        <p>Genzo may update this Privacy Policy from time to time. Updates will be communicated through the Platform or other appropriate means. Continued use of the Platform constitutes acceptance of the revised Policy.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-black mb-4">13. Contact Us</h2>
                        <p>For questions, concerns, or requests regarding this Privacy Policy, you may contact us at:</p>
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

export default PrivacyPolicy;
