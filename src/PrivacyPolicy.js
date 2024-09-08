import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 text-gray-800 dark:text-gray-200">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p>Effective Date: 8 September 2024</p>

        <h2 className="text-2xl font-semibold mt-6">1. Introduction</h2>
        <p>
          Welcome to the Free QR Code Generator website (the "Site"), operated by DSPRO ("we," "our," or "us"). This
          Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our
          website www.free-qr-code.pt, use our services, or interact with us. We are committed to protecting your
          personal data and respecting your privacy.
        </p>

        <h2 className="text-2xl font-semibold mt-6">2. Information We Collect</h2>
        <ul className="list-disc ml-6">
          <li>
            <strong>Personal Information:</strong> We may collect personal information that you voluntarily provide to
            us, such as your name, email address, and contact details when you communicate with us.
          </li>
          <li>
            <strong>Automatically Collected Information:</strong> When you visit our Site, we automatically collect
            certain information, including your IP address, browser type, operating system, and other technical data,
            using cookies and similar tracking technologies.
          </li>
          <li>
            <strong>Cookies:</strong> Our Site uses cookies to enhance user experience, analyze site usage, and serve
            personalized ads through Google AdSense. You can manage cookie preferences through your browser settings.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">3. How We Use Your Information</h2>
        <p>We use your information for the following purposes:</p>
        <ul className="list-disc ml-6">
          <li>To operate and maintain our Site.</li>
          <li>To communicate with you and respond to your inquiries.</li>
          <li>To provide you with personalized content and advertisements through Google AdSense.</li>
          <li>To analyze usage and improve our Site.</li>
          <li>To comply with legal obligations.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">4. How We Share Your Information</h2>
        <ul className="list-disc ml-6">
          <li>
            <strong>Service Providers:</strong> We may share your information with service providers who assist us in
            operating the Site and conducting our business.
          </li>
          <li>
            <strong>Compliance with Laws:</strong> We may disclose your information to comply with legal obligations or
            respond to valid requests from public authorities.
          </li>
          <li>
            <strong>Business Transfers:</strong> In the event of a merger, acquisition, or asset sale, your information
            may be transferred as part of the transaction.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">5. Google AdSense and Third-Party Advertising</h2>
        <p>
          We use Google AdSense to display ads on our Site. Google AdSense may use cookies and web beacons to collect
          information about your visits to this and other websites, in order to provide advertisements about goods and
          services of interest to you.
        </p>
        <p>
          For more information about Google’s privacy practices, please visit the Google Privacy & Terms page at{' '}
          <a
            href="https://policies.google.com/privacy"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://policies.google.com/privacy
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-6">6. Your Privacy Rights</h2>
        <p>
          You have the right to access, correct, update, or delete your personal information. To exercise these rights,
          please contact us at{' '}
          <a href="mailto:geral@dss-pro.pt" className="text-blue-500 hover:underline">
            geral@dss-pro.pt
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mt-6">7. Security</h2>
        <p>
          We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure.
          However, no internet-based site or method of data transmission is 100% secure, so we cannot guarantee the
          absolute security of your information.
        </p>

        <h2 className="text-2xl font-semibold mt-6">8. Third-Party Websites</h2>
        <p>
          Our Site may contain links to third-party websites. We are not responsible for the privacy practices or the
          content of these websites. We encourage you to read the privacy policies of any third-party site you visit.
        </p>

        <h2 className="text-2xl font-semibold mt-6">9. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The updated version will be indicated by the "Effective
          Date" at the top of this page. We encourage you to review this Privacy Policy periodically for any changes.
        </p>

        <h2 className="text-2xl font-semibold mt-6">10. Contact Us</h2>
        <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
        <ul className="list-disc ml-6">
          <li>
            <strong>Company:</strong> DSPRO (GlacierGadget Unipessoal LDA)
          </li>
          <li>
            <strong>Email:</strong>{' '}
            <a href="mailto:geral@dss-pro.pt" className="text-blue-500 hover:underline">
              geral@dss-pro.pt
            </a>
          </li>
          <li>
            <strong>Address:</strong> Avenida Infante n60, apt 2c, Funchal, Madeira Island, Portugal, Postal Code
            9000-015
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
