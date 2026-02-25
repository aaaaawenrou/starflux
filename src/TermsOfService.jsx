import React from 'react';
import { ArrowLeft, FileText, Mail, FileCheck, ShieldAlert, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsOfService() {
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
                            <FileText size={32} />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-space">Terms of Service</h1>
                        <p className="text-gray-500">Effective Date: {effectiveDate}</p>
                    </div>

                    {/* Content */}
                    <div className="prose prose-invert prose-indigo max-w-none space-y-12 text-gray-400 leading-relaxed">

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <FileCheck size={20} className="text-indigo-400" />
                                1. Acceptance of Terms
                            </h2>
                            <p>
                                By accessing or using the website (https://www.starflux.digital), software, mobile applications (including Nomad Routine), and services provided by {companyName} ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">2. Intellectual Property Rights</h2>
                            <p>
                                All content, features, functionality, and underlying technology on our website and applications—including but not limited to code, design, text, graphics, logos, and software—are the exclusive property of {companyName} and are protected by international copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of our services without our explicit written consent.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">3. User Conduct and License</h2>
                            <p className="mb-4">
                                We grant you a limited, non-exclusive, non-transferable, and revocable license to use our applications for your personal or internal business purposes. You agree not to:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 mt-4">
                                <li>Reverse engineer, decompile, or disassemble any portion of our software.</li>
                                <li>Use our services for any illegal, fraudulent, or unauthorized purpose.</li>
                                <li>Attempt to bypass or exploit any security features, licensing mechanisms, or paywalls.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <ShieldAlert size={20} className="text-indigo-400" />
                                4. Disclaimer of Warranties
                            </h2>
                            <p>
                                Our services and digital products are provided on an "AS IS" and "AS AVAILABLE" basis. To the maximum extent permitted by law, {companyName} disclaims all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee that our software will be entirely bug-free, secure, or uninterrupted.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">5. Limitation of Liability</h2>
                            <p>
                                In no event shall {companyName}, its directors, employees, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising out of your access to or use of our services. Our total liability to you for any claims arising from these terms shall not exceed the amount you paid to us for the specific product or service in the past 12 months.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <Globe size={20} className="text-indigo-400" />
                                6. Governing Law and Jurisdiction
                            </h2>
                            <p>
                                These Terms of Service shall be governed by and construed in accordance with the laws of the State of Wyoming, United States, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in the federal or state courts located in Wyoming.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">7. Changes to Terms</h2>
                            <p>
                                We reserve the right to modify or replace these Terms at any time. We will notify users of any material changes by updating the "Effective Date" at the top of this page.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-white mb-4">Contact Information</h2>
                            <p>
                                For any legal inquiries or questions regarding these Terms, please contact us at:
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
