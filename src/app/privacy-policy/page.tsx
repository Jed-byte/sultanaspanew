import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="py-6 px-4" style={{background: 'linear-gradient(to right, #F8F4EF, #C4A484)'}}>
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center hover:opacity-80 mb-3 transition-colors" style={{color: '#5D4037'}}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-5xl font-light mb-3" style={{color: '#5D4037'}}>
            Privacy Policy & Terms And Conditions
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg" style={{color: '#5D4037'}}>
          
          {/* Privacy Policy Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-light mb-6" style={{color: '#5D4037'}}>Privacy Policy</h2>
            <p className="text-sm mb-8" style={{color: '#A78A7F'}}>Last updated: December 12, 2025</p>

            <p className="mb-6 leading-relaxed" style={{color: '#5D4037'}}>
              Sultana Spa ("Sultana", "we", "our", or "us") operates physical spa branches and provides an informational website and a mobile application (together, the "Platforms") that allow customers to view services, prices, and make bookings.
            </p>
            <p className="mb-8 leading-relaxed" style={{color: '#5D4037'}}>
              This Privacy Policy explains how we collect, use, disclose, and protect personal information when you use our website, mobile application, or visit our spa locations.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-medium mb-4" style={{color: '#5D4037'}}>1. Information We Collect</h3>
                
                <h4 className="text-xl font-medium mb-3 mt-6" style={{color: '#5D4037'}}>1.1 Information You Provide</h4>
                <p className="mb-4 leading-relaxed" style={{color: '#5D4037'}}>
                  We may collect the following personal information when you use our Platforms or services:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2" style={{color: '#5D4037'}}>
                  <li>Full name</li>
                  <li>Phone number</li>
                  <li>Email address</li>
                  <li>Booking details (service selected, branch, date and time)</li>
                  <li>Payment-related information (processed via third-party providers)</li>
                  <li>Account information (if you create an account in the app)</li>
                </ul>

                <h4 className="text-xl font-medium mb-3 mt-6" style={{color: '#5D4037'}}>1.2 Automatically Collected Information</h4>
                <p className="mb-4 leading-relaxed" style={{color: '#5D4037'}}>
                  When you use our Platforms, we may automatically collect:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2" style={{color: '#5D4037'}}>
                  <li>Device information (device type, operating system)</li>
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>App usage data and interaction logs</li>
                  <li>Cookies and similar technologies (website only)</li>
                </ul>

                <h4 className="text-xl font-medium mb-3 mt-6" style={{color: '#5D4037'}}>1.3 Information from Third Parties</h4>
                <p className="mb-4 leading-relaxed" style={{color: '#5D4037'}}>
                  We may receive information from third-party booking, payment, analytics, or marketing providers strictly for service delivery and improvement.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-medium mb-4" style={{color: '#5D4037'}}>2. How We Use Your Information</h3>
                <p className="mb-4 leading-relaxed" style={{color: '#5D4037'}}>
                  We use your information to:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2" style={{color: '#5D4037'}}>
                  <li>Process and manage bookings</li>
                  <li>Communicate appointment confirmations, changes, or reminders</li>
                  <li>Provide customer support</li>
                  <li>Improve our services, website, and app experience</li>
                  <li>Process payments securely</li>
                  <li>Comply with legal and regulatory requirements</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-medium mb-4" style={{color: '#5D4037'}}>3. Legal Basis for Processing</h3>
                <p className="mb-4 leading-relaxed" style={{color: '#5D4037'}}>
                  We process personal data based on:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2" style={{color: '#5D4037'}}>
                  <li>Performance of a contract (booking and service delivery)</li>
                  <li>Legitimate business interests</li>
                  <li>Your consent (where required)</li>
                  <li>Legal obligations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-medium mb-4" style={{color: '#5D4037'}}>4. Sharing of Information</h3>
                <p className="mb-4 leading-relaxed" style={{color: '#5D4037'}}>
                  We do not sell your personal data.
                </p>
                <p className="mb-4 leading-relaxed" style={{color: '#5D4037'}}>
                  We may share your information with:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2" style={{color: '#5D4037'}}>
                  <li>Payment processors</li>
                  <li>Booking and scheduling service providers</li>
                  <li>IT, hosting, and analytics providers</li>
                  <li>Regulatory or legal authorities when required by law</li>
                </ul>
                <p className="mb-4 leading-relaxed" style={{color: '#5D4037'}}>
                  All third parties are contractually required to protect your data.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-medium mb-4" style={{color: '#5D4037'}}>5. Data Retention</h3>
                <p className="mb-4 leading-relaxed" style={{color: '#5D4037'}}>
                  We retain personal information only for as long as necessary to:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2" style={{color: '#5D4037'}}>
                  <li>Fulfil booking and service obligations</li>
                  <li>Comply with accounting, tax, and legal requirements</li>
                  <li>Resolve disputes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-medium mb-4" style={{color: '#5D4037'}}>6. Data Security</h3>
                <p className="mb-4 leading-relaxed" style={{color: '#5D4037'}}>
                  We implement reasonable technical and organizational safeguards to protect your personal data. However, no system is completely secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-medium mb-4" style={{color: '#5D4037'}}>7. Your Rights</h3>
                <p className="mb-4 leading-relaxed" style={{color: '#5D4037'}}>
                  Depending on applicable laws, you may have the right to:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2" style={{color: '#5D4037'}}>
                  <li>Access your personal data</li>
                  <li>Request correction or deletion</li>
                  <li>Withdraw consent</li>
                  <li>Object to processing</li>
                </ul>
                <p className="mb-4 leading-relaxed" style={{color: '#5D4037'}}>
                  Requests can be made using the contact details below.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-medium mb-4" style={{color: '#5D4037'}}>8. Cookies</h3>
                <p className="mb-4 leading-relaxed" style={{color: '#5D4037'}}>
                  Our website uses cookies to enhance user experience and analyze traffic. You may control cookies through your browser settings.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-medium mb-4" style={{color: '#5D4037'}}>9. Children's Privacy</h3>
                <p className="mb-4 leading-relaxed" style={{color: '#5D4037'}}>
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal data from minors.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-medium mb-4" style={{color: '#5D4037'}}>10. Changes to This Privacy Policy</h3>
                <p className="mb-4 leading-relaxed" style={{color: '#5D4037'}}>
                  We may update this Privacy Policy from time to time. Updates will be posted on our website and app.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-medium mb-4" style={{color: '#5D4037'}}>11. Contact Us</h3>
                <p className="mb-4 leading-relaxed" style={{color: '#5D4037'}}>
                  If you have questions about this Privacy Policy or your data, contact us at:
                </p>
                <div className="mb-4" style={{color: '#5D4037'}}>
                  <p className="font-medium mb-2">Sultana Spa</p>
                  <p>Phone: <a href="tel:+97145652323" className="hover:opacity-80" style={{color: '#C4A484'}}>+971 4 565 2323</a></p>
                </div>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="my-16 border-t" style={{borderColor: '#C4A484', opacity: 0.3}}></div>

          {/* Terms and Conditions Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-light mb-6" style={{color: '#5D4037'}}>Terms and Conditions</h2>
            <p className="text-sm mb-8" style={{color: '#A78A7F'}}>Last updated: December 12, 2025</p>

            <p className="mb-8 leading-relaxed" style={{color: '#5D4037'}}>
              These Terms and Conditions ("Terms") govern your use of the Sultana Spa website, mobile application, and services.
            </p>
            <p className="mb-8 leading-relaxed" style={{color: '#5D4037'}}>
              By accessing our Platforms or booking services, you agree to these Terms.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-medium mb-4" style={{color: '#5D4037'}}>1. Services</h3>
                <p className="mb-4 leading-relaxed" style={{color: '#5D4037'}}>
                  Sultana Spa provides spa and wellness services across multiple physical branches. Service availability, pricing, and duration may vary by branch.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-medium mb-4" style={{color: '#5D4037'}}>2. Bookings</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2" style={{color: '#5D4037'}}>
                  <li>Bookings can be made via our website, mobile application, or directly at a branch.</li>
                  <li>All bookings are subject to availability.</li>
                  <li>We reserve the right to refuse or cancel bookings at our discretion.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-medium mb-4" style={{color: '#5D4037'}}>3. Payments</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2" style={{color: '#5D4037'}}>
                  <li>Prices are displayed per service and per branch.</li>
                  <li>Payments may be required in advance or at the spa location.</li>
                  <li>Payments are processed via secure third-party providers.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-medium mb-4" style={{color: '#5D4037'}}>4. Cancellations and No-Shows</h3>
                <ul className="list-disc pl-6 mb-4 space-y-2" style={{color: '#5D4037'}}>
                  <li>Cancellation policies may vary by service and branch.</li>
                  <li>Late cancellations or no-shows may result in a fee.</li>
                  <li>Applicable policies will be communicated at the time of booking.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-medium mb-4" style={{color: '#5D4037'}}>5. User Accounts (App)</h3>
                <p className="mb-4 leading-relaxed" style={{color: '#5D4037'}}>
                  If you create an account on our mobile application:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2" style={{color: '#5D4037'}}>
                  <li>You are responsible for maintaining account confidentiality</li>
                  <li>You agree to provide accurate information</li>
                  <li>We may suspend or terminate accounts for misuse</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-medium mb-4" style={{color: '#5D4037'}}>6. Health and Safety</h3>
                <p className="mb-4 leading-relaxed" style={{color: '#5D4037'}}>
                  Customers must disclose relevant medical conditions prior to treatment. Sultana Spa is not liable for issues arising from undisclosed conditions.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-medium mb-4" style={{color: '#5D4037'}}>7. Intellectual Property</h3>
                <p className="mb-4 leading-relaxed" style={{color: '#5D4037'}}>
                  All content on the Platforms (text, images, logos) is owned by or licensed to Sultana Spa and may not be used without permission.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-medium mb-4" style={{color: '#5D4037'}}>8. Limitation of Liability</h3>
                <p className="mb-4 leading-relaxed" style={{color: '#5D4037'}}>
                  To the fullest extent permitted by law, Sultana Spa shall not be liable for indirect, incidental, or consequential damages arising from the use of our services or Platforms.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-medium mb-4" style={{color: '#5D4037'}}>9. Third-Party Links</h3>
                <p className="mb-4 leading-relaxed" style={{color: '#5D4037'}}>
                  Our Platforms may contain links to third-party websites. We are not responsible for their content or privacy practices.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-medium mb-4" style={{color: '#5D4037'}}>10. Governing Law</h3>
                <p className="mb-4 leading-relaxed" style={{color: '#5D4037'}}>
                  These Terms are governed by the laws of the United Arab Emirates. Any disputes shall be subject to the exclusive jurisdiction of UAE courts.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-medium mb-4" style={{color: '#5D4037'}}>11. Changes to These Terms</h3>
                <p className="mb-4 leading-relaxed" style={{color: '#5D4037'}}>
                  We may update these Terms from time to time. Continued use of our Platforms constitutes acceptance of updated Terms.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-medium mb-4" style={{color: '#5D4037'}}>12. Contact Information</h3>
                <p className="mb-4 leading-relaxed" style={{color: '#5D4037'}}>
                  For questions regarding these Terms:
                </p>
                <div className="mb-4" style={{color: '#5D4037'}}>
                  <p className="font-medium mb-2">Sultana Spa</p>
                  <p>Phone: <a href="tel:+97145652323" className="hover:opacity-80" style={{color: '#C4A484'}}>+971 4 565 2323</a></p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

