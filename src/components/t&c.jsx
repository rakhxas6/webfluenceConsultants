import React from "react";
import LegalPage from "./molecules/LegalPage";

const UPDATED = "April 24, 2025";

const SECTIONS = [
  {
    "title": "Acceptance of terms",
    "body": "By accessing or using the Webfluence Consultants website and services, you confirm that you are at least 18 years of age and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or engage our services. We reserve the right to update these terms at any time without prior notice."
  },
  {
    "title": "Services",
    "body": "Webfluence Consultants provides digital marketing, web development, SEO, branding, and related consultancy services. The scope, timeline, and deliverables for each engagement are defined in a separate service agreement or proposal. We reserve the right to refuse service to anyone for any reason at any time."
  },
  {
    "title": "Payment terms",
    "body": "All fees are outlined in the project proposal or service agreement. Unless otherwise agreed, a deposit of 50% is required before work commences, with the remaining balance due upon project completion. Late payments beyond 14 days may incur a 2% monthly interest charge. We reserve the right to pause or terminate services on accounts with outstanding balances."
  },
  {
    "title": "Intellectual property",
    "body": "Upon receipt of full payment, clients receive ownership of the final deliverables created specifically for them. Webfluence Consultants retains ownership of all underlying frameworks, tools, methodologies, and pre-existing intellectual property used in delivering the work. We reserve the right to display completed work in our portfolio unless explicitly agreed otherwise in writing."
  },
  {
    "title": "Cancellation & refunds",
    "body": "Clients may cancel a project with 14 days written notice. Work completed up to the cancellation date will be billed accordingly. Deposits are non-refundable once work has commenced. For subscription-based services, cancellations take effect at the end of the current billing cycle. We do not offer refunds for completed and delivered work."
  },
  {
    "title": "Confidentiality",
    "body": "Both parties agree to keep confidential any proprietary or sensitive information shared during the course of the engagement. This includes business strategies, client data, pricing, and any materials marked as confidential. This obligation survives the termination of the agreement and remains in effect indefinitely."
  },
  {
    "title": "Limitation of liability",
    "body": "Webfluence Consultants shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services or website, including loss of revenue, data, or business opportunities. Our total liability in any circumstance shall not exceed the amount paid by the client for the specific service in question during the 3 months preceding the claim."
  },
  {
    "title": "Governing law",
    "body": "These Terms and Conditions are governed by and construed in accordance with the laws of Nepal. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Rupandehi, Nepal. We will always attempt to resolve disputes amicably before pursuing formal legal action."
  },
  {
    "title": "Changes to these terms",
    "body": "We reserve the right to modify these Terms and Conditions at any time. Changes take effect immediately upon posting to our website. Continued use of our services following any changes constitutes your acceptance of the revised terms. We encourage you to review this page periodically."
  }
];

export default function TermsAndConditions() {
  return (
    <LegalPage
      title="Terms & Conditions"
      lines={[<>Terms &</>, <>conditions</>]}
      path="/terms-and-conditions"
      description="The terms that govern use of the Webfluence Consultants website and engagement of our services."
      updated={UPDATED}
      intro="The terms that govern use of this website and any engagement of our services. By using either, you agree to what follows."
      sections={SECTIONS}
    />
  );
}
