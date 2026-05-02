import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        "service_hcvt4xm",
        "template_h6z1gfh",
        formRef.current,
        "3kvtsH07BHQuOL3od",
      );
      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Webfluence Consultants - Digital Marketing Agency in Nepal</title>
        <meta
          name="description"
          content="Get in touch with Webfluence Consultants. We're based in Butwal, Nepal. Reach us by email at hello@webfluence.com or call +977 986 792 5779."
        />
        <meta
          name="keywords"
          content="contact Webfluence Consultants, digital marketing agency Nepal contact, Butwal marketing agency, hello@webfluence.com"
        />
        <link rel="canonical" href="https://webfluence-consultants.vercel.app/#contact" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact Us | Webfluence Consultants" />
        <meta
          property="og:description"
          content="Reach out to Webfluence Consultants — Nepal's digital marketing agency. We'd love to hear about your project."
        />
        <meta property="og:url" content="https://webfluence-consultants.vercel.app/#contact" />
        <meta property="og:site_name" content="Webfluence Consultants" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact Us | Webfluence Consultants" />
        <meta
          name="twitter:description"
          content="Reach out to Webfluence Consultants — Nepal's digital marketing agency. We'd love to hear about your project."
        />
      </Helmet>

      <section
        className="py-16 px-4 border-t border-neutral-300 scroll-mt-[8vh]"
        id="contact"
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-lg text-[#0025cc] font-medium pb-2">Contact Us</p>
            <h1 className="text-4xl font-semibold text-slate-700 pb-4">
              Get in touch with us
            </h1>
            <p className="text-sm text-gray-500">
              Have a project in mind or just want to say hello?
              <br />
              We'd love to hear from you — drop us a message below.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left — Company Info */}
            <div className="lg:w-2/5 space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-slate-700 mb-3">
                  Webfluence Consultants
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We help businesses grow their digital presence through smart
                  strategy, stunning design, and powerful technology. From
                  startups to enterprises, we deliver solutions that drive clicks,
                  conversions, and growth.
                </p>
              </div>

              {/* Info Items */}
              <div className="space-y-5">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-10 h-10 bg-[#0025cc]/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#0025cc]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-700">Our Office</p>
                    <p className="text-sm text-[#0025cc]">
                      12, Tamnagar, Butwal<br />Rupandehi, NP 32600
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-10 h-10 bg-[#0025cc]/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#0025cc]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-700">Email Us</p>
                    <a href="mailto:hello@webfluence.com" className="text-sm text-[#0025cc] hover:underline">
                      hello@webfluence.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-10 h-10 bg-[#0025cc]/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#0025cc]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-700">Call Us</p>
                    <a href="tel:+9779867925779" className="text-sm text-[#0025cc] hover:underline">
                      +977 986 792 5779
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-10 h-10 bg-[#0025cc]/10 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#0025cc]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-700">Business Hours</p>
                    <p className="text-sm text-[#0025cc]">
                      Mon – Fri: 9am – 6pm<br />Sat: 10am – 2pm
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px bg-neutral-200 self-stretch" />

            {/* Right — Form */}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="lg:w-3/5 flex flex-col gap-6 text-sm"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full">
                  <label className="text-black/70" htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="from_name"
                    className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-[#0025cc] transition-colors"
                    type="text"
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="text-black/70" htmlFor="email">Your Email</label>
                  <input
                    id="email"
                    name="from_email"
                    className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-[#0025cc] transition-colors"
                    type="email"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-black/70" htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-[#0025cc] transition-colors"
                  type="text"
                  required
                />
              </div>

              <div>
                <label className="text-black/70" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full mt-2 p-2 h-44 border border-gray-500/30 rounded resize-none outline-none focus:border-[#0025cc] transition-colors"
                  required
                />
              </div>

              {/* Status feedback */}
              {status === "success" && (
                <p className="text-green-600 text-sm">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
              )}

              <input type="hidden" name="time" value={new Date().toLocaleString()} />

              <button
                type="submit"
                disabled={status === "sending"}
                className="self-start bg-[#0025cc] text-white h-12 px-10 rounded active:scale-95 transition hover:bg-[#0025cc]/90 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}