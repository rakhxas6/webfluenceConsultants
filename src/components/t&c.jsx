import React from "react";

export default function TermsAndConditions() {
  const sections = [
    {
      icon: (
        <svg className="w-5 h-5 text-[#0025cc]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
      ),
      title: "Acceptance of terms",
      content: `By accessing or using the Webfluence Consultants website and services, you confirm that you are at least 18 years of age and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or engage our services. We reserve the right to update these terms at any time without prior notice.`,
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#0025cc]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
      title: "Services",
      content: `Webfluence Consultants provides digital marketing, web development, SEO, branding, and related consultancy services. The scope, timeline, and deliverables for each engagement are defined in a separate service agreement or proposal. We reserve the right to refuse service to anyone for any reason at any time.`,
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#0025cc]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      title: "Payment terms",
      content: `All fees are outlined in the project proposal or service agreement. Unless otherwise agreed, a deposit of 50% is required before work commences, with the remaining balance due upon project completion. Late payments beyond 14 days may incur a 2% monthly interest charge. We reserve the right to pause or terminate services on accounts with outstanding balances.`,
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#0025cc]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
        </svg>
      ),
      title: "Intellectual property",
      content: `Upon receipt of full payment, clients receive ownership of the final deliverables created specifically for them. Webfluence Consultants retains ownership of all underlying frameworks, tools, methodologies, and pre-existing intellectual property used in delivering the work. We reserve the right to display completed work in our portfolio unless explicitly agreed otherwise in writing.`,
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#0025cc]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/>
        </svg>
      ),
      title: "Cancellation & refunds",
      content: `Clients may cancel a project with 14 days written notice. Work completed up to the cancellation date will be billed accordingly. Deposits are non-refundable once work has commenced. For subscription-based services, cancellations take effect at the end of the current billing cycle. We do not offer refunds for completed and delivered work.`,
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#0025cc]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
        </svg>
      ),
      title: "Confidentiality",
      content: `Both parties agree to keep confidential any proprietary or sensitive information shared during the course of the engagement. This includes business strategies, client data, pricing, and any materials marked as confidential. This obligation survives the termination of the agreement and remains in effect indefinitely.`,
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#0025cc]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
        </svg>
      ),
      title: "Limitation of liability",
      content: `Webfluence Consultants shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services or website, including loss of revenue, data, or business opportunities. Our total liability in any circumstance shall not exceed the amount paid by the client for the specific service in question during the 3 months preceding the claim.`,
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#0025cc]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/>
        </svg>
      ),
      title: "Governing law",
      content: `These Terms and Conditions are governed by and construed in accordance with the laws of Nepal. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Rupandehi, Nepal. We will always attempt to resolve disputes amicably before pursuing formal legal action.`,
    },
    {
      icon: (
        <svg className="w-5 h-5 text-[#0025cc]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
        </svg>
      ),
      title: "Changes to these terms",
      content: `We reserve the right to modify these Terms and Conditions at any time. Changes take effect immediately upon posting to our website. Continued use of our services following any changes constitutes your acceptance of the revised terms. We encourage you to review this page periodically.`,
    },
  ];

  return (
    <section className="pt-32 pb-16 px-4 border-t border-neutral-300 scroll-mt-[8vh]" id="terms">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-lg text-[#0025cc] font-medium pb-2">Legal</p>
          <h1 className="text-4xl font-semibold text-slate-700 pb-4">Terms & Conditions</h1>
          <p className="text-sm text-gray-500">
            Last updated: April 24, 2025
            <br />
            Please read these terms carefully before using our services or website.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Left — sticky info card */}
          <div className="lg:w-2/5 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-slate-700 mb-3">Webfluence Consultants</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                These terms govern your use of our website and the services we provide.
                By engaging with us, you agree to operate within these guidelines —
                designed to protect both you and us throughout our working relationship.
              </p>
            </div>

            <div className="space-y-5">

              {/* Effective date */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-10 h-10 bg-[#0025cc]/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0025cc]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700">Effective date</p>
                  <p className="text-sm text-[#0025cc]">April 24, 2025</p>
                </div>
              </div>

              {/* Jurisdiction */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-10 h-10 bg-[#0025cc]/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0025cc]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700">Jurisdiction</p>
                  <p className="text-sm text-[#0025cc]">Rupandehi, Nepal<br/>Courts of Nepal apply</p>
                </div>
              </div>

              {/* Legal queries */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-10 h-10 bg-[#0025cc]/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0025cc]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700">Legal enquiries</p>
                  <a href="mailto:hello@webfluence.com" className="text-sm text-[#0025cc] hover:underline">hello@webfluence.com</a>
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

          {/* Right — Terms sections */}
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
                By using our website or engaging our services, you acknowledge that you have read,
                understood, and agree to be bound by these Terms and Conditions. For any questions,
                reach us at{" "}
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