import React from "react";
import LegalPage from "./molecules/LegalPage";

const UPDATED = "April 24, 2025";

const SECTIONS = [
  {
    "title": "Information we collect",
    "body": "We collect information you provide directly to us — such as your name, email address, phone number, and message content when you fill out our contact form. We may also collect usage data automatically, including your IP address, browser type, pages visited, and time spent on our site through cookies and analytics tools."
  },
  {
    "title": "How we use your information",
    "body": "We use the information we collect to respond to your enquiries, provide and improve our services, send relevant updates or marketing communications (only where you have consented), analyse site usage to improve user experience, and comply with legal obligations. We do not sell, rent, or trade your personal information to third parties."
  },
  {
    "title": "Information sharing",
    "body": "We may share your information with trusted third-party service providers who assist us in operating our website and delivering services — such as hosting providers, analytics platforms, and email tools. These parties are contractually obligated to keep your information confidential and use it only for the purposes we specify."
  },
  {
    "title": "Data retention",
    "body": "We retain your personal data only for as long as necessary to fulfil the purposes outlined in this policy, or as required by law. Contact form submissions are typically retained for up to 24 months. You may request deletion of your data at any time by contacting us directly."
  },
  {
    "title": "Cookies",
    "body": "Our website uses cookies to enhance your browsing experience and gather analytics data. You can control cookie preferences through your browser settings. Disabling cookies may affect certain functionality of the site. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain until deleted)."
  },
  {
    "title": "Your rights",
    "body": "You have the right to access, correct, or delete the personal data we hold about you. You may also object to or restrict certain types of processing, and request a copy of your data in a portable format. To exercise any of these rights, contact us at hello@webfluence.com and we will respond within 30 days."
  },
  {
    "title": "Security",
    "body": "We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security."
  },
  {
    "title": "Changes to this policy",
    "body": "We may update this Privacy Policy from time to time. When we do, we will revise the effective date at the top of this page. We encourage you to review this policy periodically to stay informed about how we are protecting your information."
  }
];

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      lines={[<>Privacy</>, <>policy</>]}
      path="/privacy-policy"
      description="How Webfluence Consultants collects, uses, stores and protects your personal data."
      updated={UPDATED}
      intro="How we collect, use, store and protect the information you share with us — written to be read, not skimmed past."
      sections={SECTIONS}
    />
  );
}
