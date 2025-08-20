import React from "react";
 import Terms from "../Components/Policy/Terms";

const PrivacyPolicy = () => {
  return (
    <div className="mt-20 font-[sans-serif] py-12 px-4 sm:px-6 lg:px-8 bg-transparent">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-[inter] text-gray-900 mb-6 sm:mb-8">
        Privacy Policy
      </h1>
<div className="w-full max-w-7xl text-left">
      <p className="text-gray-600 font-sans text-md sm:text-lg md:text-lg lg:text-lg mb-6">
        This privacy policy describes how Awwal Textiles uses and protects any information that you give us when you use this website.
        <br/>
        Awwal Textiles is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, you can be assured that it will only be used in accordance with this privacy statement.
        <br/>
        Awwal Textiles may change this policy from time to time by updating this page. You should check this page occasionally to ensure that you are happy with any changes. This policy is effective from August 2025.
      </p>

      {/* What We Collect */}
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">What We Collect</h2>
      <p className="text-gray-600 font-sans text-md sm:text-lg md:text-lg lg:text-lg mb-4">
        We may collect the following information:
      </p>
      <ul className="list-disc pl-6 text-gray-600 font-sans text-md sm:text-lg md:text-lg lg:text-lg mb-6">
        <li>Name and job title</li>
        <li>Contact information including email address and phone number</li>
        <li>Browsing preferences and interests</li>
      </ul>

      {/* What We Do */}
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">What We Do With the Information We Gather</h2>
      <p className="text-gray-600 font-sans text-md sm:text-lg md:text-lg lg:text-lg mb-4">
        This information allows us to better understand your needs and provide you with quality service. We may use the information for:
      </p>
      <ul className="list-disc pl-6 text-gray-600 font-sans text-md sm:text-lg md:text-lg lg:text-lg mb-6">
        <li>Internal record keeping</li>
        <li>Improving our products and services</li>
        <li>Periodically sending promotional emails about new products, special offers, or other information we think you may find interesting</li>
        <li>Contacting you by email, phone, or mail</li>
        <li>Customising the website according to your interests</li>
      </ul>
      <p className="text-gray-600 font-sans text-md sm:text-lg md:text-lg lg:text-lg mb-6">
        We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, we have put in place physical, electronic, and managerial procedures to safeguard and secure the information we collect online. All employees and representatives of Awwal Textiles who have access to your personal data are contractually obliged to respect your confidentiality.
      </p>

      {/* Cookies */}
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Cookies</h2>
      <p className="text-gray-600 font-sans text-md sm:text-lg md:text-lg lg:text-lg mb-6">
        A cookie is a small file which asks permission to be placed on your computer’s hard drive. Once you agree, the file is added and the cookie helps analyse web traffic or lets you know when you visit a particular site.
        We use traffic log cookies to identify which pages are being used. This helps us analyse data about web page traffic and improve our website, tailoring it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.
        Overall, cookies help us provide you with a better website by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.
        You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.
      </p>

      {/* Other Gathered Information */}
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Other Gathered Information</h2>
      <p className="text-gray-600 font-sans text-md sm:text-lg md:text-lg lg:text-lg mb-6">
        Awwal Textiles may use independent measurement and research companies who gather non-personal data regarding visitors to our website on our behalf using cookies and code. This information may include:
      </p>
      <ul className="list-disc pl-6 text-gray-600 font-sans text-md sm:text-lg md:text-lg lg:text-lg mb-6">
        <li>Pages visited on the website</li>
        <li>Duration of individual page views</li>
        <li>Paths taken through the website</li>
        <li>Visitors’ screen settings and other general information</li>
      </ul>
      <p className="text-gray-600 font-sans text-md sm:text-lg md:text-lg lg:text-lg mb-6">
        We use this data to improve our website and services for our customers.
      </p>

      {/* Links */}
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">Links</h2>
      <p className="text-gray-600 font-sans text-md sm:text-lg md:text-lg lg:text-lg">
        This Privacy Policy only relates to the Awwal Textiles website. Any links from our site to other websites are provided merely for your convenience and do not imply endorsement by us of the content or provider. Once you leave our site, we have no control over the privacy or security of the other websites you visit.
        You should always check the privacy policy of any other website you visit.
      </p>
    </div>
    <div className="mt-8">
      <Terms/>
    </div>
    </div>
  );
};

export default PrivacyPolicy;
