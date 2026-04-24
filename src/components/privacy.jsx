import React from "react";

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: (
        <svg className="w-5 h-5 text-[#0025cc]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z"/>
        </svg>
      ),
      title: "Information we collect",
      content: `We collect information you provide directly to us — such as your name, email address, phone number, and message content when you fill out our contact form. We may also collect usage data automatically, including your IP address, browser type, pages visited, and time spent on our site through cookies and analytics tools.`,
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#0025cc]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
        </svg>
      ),
      title: "How we use your information",
      content: `We use the information we collect to respond to your enquiries, provide and improve our services, send relevant updates or marketing communications (only where you have consented), analyse site usage to improve user experience, and comply with legal obligations. We do not sell, rent, or trade your personal information to third parties.`,
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#0025cc]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
        </svg>
      ),
      title: "Information sharing",
      content: `We may share your information with trusted third-party service providers who assist us in operating our website and delivering services — such as hosting providers, analytics platforms, and email tools. These parties are contractually obligated to keep your information confidential and use it only for the purposes we specify.`,
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#0025cc]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      title: "Data retention",
      content: `We retain your personal data only for as long as necessary to fulfil the purposes outlined in this policy, or as required by law. Contact form submissions are typically retained for up to 24 months. You may request deletion of your data at any time by contacting us directly.`,
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#0025cc]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/>
        </svg>
      ),
      title: "Cookies",
      content: `Our website uses cookies to enhance your browsing experience and gather analytics data. You can control cookie preferences through your browser settings. Disabling cookies may affect certain functionality of the site. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain until deleted).`,
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#0025cc]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>
      ),
      title: "Your rights",
      content: `You have the right to access, correct, or delete the personal data we hold about you. You may also object to or restrict certain types of processing, and request a copy of your data in a portable format. To exercise any of these rights, contact us at hello@webfluence.com and we will respond within 30 days.`,
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#0025cc]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
        </svg>
      ),
      title: "Security",
      content: `We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`,
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#0025cc]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
        </svg>
      ),
      title: "Changes to this policy",
      content: `We may update this Privacy Policy from time to time. When we do, we will revise the effective date at the top of this page. We encourage you to review this policy periodically to stay informed about how we are protecting your information.`,
    },
  ];

  return (
    <section className="pt-32 pb-16 px-4 border-t border-neutral-300 scroll-mt-[10vh]" id="privacy">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-lg text-[#0025cc] font-medium pb-2">Legal</p>
          <h1 className="text-4xl font-semibold text-slate-700 pb-4">Privacy Policy</h1>
          <p className="text-sm text-gray-500">
            Last updated: April 24, 2025
            <br />
            This policy explains how Webfluence Consultants collects, uses, and protects your information.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Left — sticky info card */}
          <div className="lg:w-2/5 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-slate-700 mb-3">Webfluence Consultants</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Your privacy matters to us. We are committed to being transparent about how we
                handle your data and ensuring it is used responsibly to deliver the best possible
                experience.
              </p>
            </div>

            <div className="space-y-5">
              {/* Jurisdiction */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-10 h-10 bg-[#0025cc]/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0025cc]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700">Jurisdiction</p>
                  <p className="text-sm text-[#0025cc]">Nepal — governed by applicable<br/>data protection regulations</p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-10 h-10 bg-[#0025cc]/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0025cc]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700">Privacy enquiries</p>
                  <a href="mailto:hello@webfluence.com" className="text-sm text-[#0025cc] hover:underline">hello@webfluence.com</a>
                </div>
              </div>

              {/* Response time */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-10 h-10 bg-[#0025cc]/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0025cc]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700">Response time</p>
                  <p className="text-sm text-[#0025cc]">We respond to all data<br/>requests within 30 days</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-10 h-10 bg-[#0025cc]/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0025cc]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700">Registered address</p>
                  <p className="text-sm text-[#0025cc]">12, Tamnagar, Butwal<br/>Rupandehi, NP 32600</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px bg-neutral-200 self-stretch" />

          {/* Right — Policy sections */}
          <div className="lg:w-3/5 flex flex-col gap-8 text-sm">
            {sections.map((section, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-0.5 flex-shrink-0 w-10 h-10 bg-[#0025cc]/10 rounded-full flex items-center justify-center">
                  {section.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700 mb-1">{section.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{section.content}</p>
                </div>
              </div>
            ))}

            {/* Bottom note */}
            <div className="border-t border-neutral-200 pt-6 mt-2">
              <p className="text-xs text-gray-400 leading-relaxed">
                By using our website, you consent to the terms of this Privacy Policy.
                If you do not agree, please discontinue use of our services. For questions,
                contact us at{" "}
                <a href="mailto:hello@webfluence.com" className="text-[#0025cc] hover:underline">
                  hello@webfluence.com
                </a>.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}