import React from 'react';
import { ArrowLeft, RefreshCw, Mail, ShoppingCart, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RefundPolicy() {
    const effectiveDate = "February 25, 2026";
    const companyName = "Star Flux Digital LLC";
    const email = "contact@starflux.digital";

    return (
        <div className="min-h-screen bg-[#0A0A0C] text-gray-300 font-inter selection:bg-indigo-500/30 selection:text-white">
            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#0A0A0C]/70 border-b border-white/5">
                <div className="max-w-4xl mx-auto px-6 h-20 flex items-center">
                    <Link to="/" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                        <ArrowLeft size={16} />
                        Back to Home
                    </Link>
                </div>
            </nav>

            <main className="pt-32 pb-20 px-6">
                <div className="max-w-3xl mx-auto">
                    {/* Header */}
                    <div className="mb-12 border-b border-white/10 pb-8">
                        <div className="flex items-center gap-3 mb-4 text-indigo-500">
                            <RefreshCw size={32} />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-space">Refund and Cancellation Policy</h1>
                        <p className="text-gray-500">Effective Date: {effectiveDate}</p>
                    </div>

                    {/* Content */}
                    <div className="prose prose-invert prose-indigo max-w-none space-y-12 text-gray-400 leading-relaxed">

                        <section>
                            <p>
                                Welcome to {companyName} ("we," "our," or "us"). We are committed to providing high-quality digital products, applications (including but not limited to Nomad Routine), and software services. Please read our Refund and Cancellation Policy carefully before making any purchases on our website (https://www.starflux.digital) or within our applications.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <ShoppingCart size={20} className="text-indigo-400" />
                                1. Digital Products and Software Licenses
                            </h2>
                            <p>
                                Due to the non-returnable nature of digital products, software, and downloadable assets, all sales of one-time purchase digital goods are considered final and non-refundable once the product has been downloaded, accessed, or the license key has been revealed. We encourage you to review all product features and descriptions carefully before completing your purchase.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">2. Subscription Services</h2>
                            <p className="mb-4">
                                If you purchase a recurring subscription (e.g., monthly or annual plans) for our applications:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-4">
                                <li>
                                    <strong className="text-gray-300">Cancellation:</strong> You may cancel your subscription at any time through your account settings or the respective app store (Google Play / Apple App Store). Cancellation will take effect at the end of your current paid billing cycle.
                                </li>
                                <li>
                                    <strong className="text-gray-300">No Prorated Refunds:</strong> We do not provide prorated refunds or credits for any partially used subscription periods. You will retain access to the premium features until your current billing cycle expires.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">3. In-App Purchases</h2>
                            <p>
                                For purchases made directly through third-party platforms (such as the Apple App Store or Google Play Store), the refund process is strictly governed by the respective platform's policies. You must contact Apple or Google customer support directly to request a refund for in-app purchases.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <AlertCircle size={20} className="text-indigo-400" />
                                4. Exceptional Circumstances
                            </h2>
                            <p>
                                We stand behind the quality of our software. If a product is fundamentally defective, severely bugged, or undeliverable due to technical issues on our end, we may, at our sole discretion, issue a refund or provide a replacement. To request a review of your case, please contact us within 7 days of your purchase.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">Contact Us</h2>
                            <p>
                                If you have any questions or issues regarding your billing, please reach out to our support team:
                            </p>
                            <div className="mt-4 p-6 bg-white/5 rounded-lg border border-white/10 hover:border-indigo-500/30 transition-colors">
                                <p className="font-bold text-white text-lg">{companyName}</p>
                                <div className="mt-4 space-y-1 text-sm text-gray-400">
                                    <p>30 N Gould St Ste R</p>
                                    <p>Sheridan, WY 82801</p>
                                    <p>United States</p>
                                </div>
                                <a href={`mailto:${email}`} className="mt-6 inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
                                    <Mail size={16} />
                                    {email}
                                </a>
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <footer className="border-t border-white/5 py-8 text-center text-sm text-gray-600">
                &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
            </footer>
        </div>
    );
}
