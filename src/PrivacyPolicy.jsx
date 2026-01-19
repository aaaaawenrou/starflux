import React from 'react';
import { ArrowLeft, Mail, Shield, Lock, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  const lastUpdated = "January 20, 2026";
  const companyName = "Star Flux Digital LLC";
  const email = "contact@starflux.digital";

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-gray-300 font-inter selection:bg-indigo-500/30 selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#0A0A0C]/70 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center">
          {/* 使用 Link 进行无刷新跳转 */}
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
              <Shield size={32} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-space">Privacy Policy</h1>
            <p className="text-gray-500">Last Updated: {lastUpdated}</p>
          </div>

          {/* Content - 增强版隐私条款 */}
          <div className="prose prose-invert prose-indigo max-w-none space-y-12 text-gray-400 leading-relaxed">
            
            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                1. Introduction
              </h2>
              <p>
                {companyName} ("we," "our," or "us") respects the privacy of our users ("user" or "you"). 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                or use our mobile applications (including <strong>BoardKit</strong> and other future releases). 
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Smartphone size={20} className="text-indigo-400"/>
                2. App Permissions & Hardware Access
              </h2>
              <p className="mb-4 text-white/90">
                To provide specific features, our applications may request access to certain hardware on your mobile device. 
                We are committed to transparency regarding these permissions:
              </p>
              
              <div className="bg-white/5 rounded-lg border border-white/10 p-6 space-y-6">
                <div>
                  <h3 className="text-white font-bold mb-2">Camera Access</h3>
                  <p className="text-sm">
                    We may request access to your device’s camera. This access is used strictly for features such as 
                    Augmented Reality (AR) gameplay, scanning QR codes/markers, or capturing in-game images at your request. 
                    <strong>We do not record, save, or transmit video or images from your camera without your explicit action and knowledge.</strong>
                  </p>
                </div>
                
                <div className="border-t border-white/5 pt-6">
                  <h3 className="text-white font-bold mb-2">Microphone Access</h3>
                  <p className="text-sm">
                    We may request access to your device’s microphone. This access is necessary for features involving 
                    voice commands, sound detection, or audio recording within the app. 
                    <strong>Audio data is processed locally on your device whenever possible. We do not continuously listen to or record your conversations.</strong>
                  </p>
                </div>

                <div className="border-t border-white/5 pt-6">
                  <h3 className="text-white font-bold mb-2">Photo Gallery & Storage</h3>
                  <p className="text-sm">
                    We may request read/write access to your device's storage to save game progress, screenshots you take, 
                    or to load custom assets you provide.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">3. Collection of Information</h2>
              <p>
                Aside from hardware access, we may collect information about you in a variety of ways:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>
                  <strong className="text-gray-300">Personal Data:</strong> We do not actively collect personally identifiable information (such as your name, email address, or phone number) unless you voluntarily provide it to us (e.g., via support emails).
                </li>
                <li>
                  <strong className="text-gray-300">Derivative Data:</strong> Information our servers or third-party analytics tools (like Unity Analytics or Google Firebase) automatically collect, such as device model, operating system, and crash reports. This data is anonymized and used solely to improve app stability.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">4. Use of Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>Enable specific app functionalities (e.g., AR, Voice Control).</li>
                <li>Compile anonymous statistical data for internal analysis.</li>
                <li>Increase the efficiency and operation of the Application.</li>
                <li>Troubleshoot crashes and software errors.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">5. Disclosure of Your Information</h2>
              <p>
                We do not sell your personal data. We may share information we have collected about you in certain situations:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>
                  <strong className="text-gray-300">By Law:</strong> If necessary to respond to legal process or to protect the safety of others.
                </li>
                <li>
                  <strong className="text-gray-300">Third-Party Service Providers:</strong> We may share anonymized data with third parties that perform services for us, such as data analysis (Google Analytics, Unity) or hosting services.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Lock size={20} className="text-indigo-400"/>
                6. Security of Your Information
              </h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal information. 
                However, please be aware that no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">7. Policy for Children</h2>
              <p>
                We do not knowingly solicit information from or market to children under the age of 13. 
                If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">8. Contact Us</h2>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us at:
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
      
      {/* Simple Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
      </footer>
    </div>
  );
}
