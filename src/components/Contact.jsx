import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import Section from "./molecules/Section";
import SectionHeader from "./molecules/SectionHeader";
import ContactDetail from "./molecules/ContactDetail";
import Modal from "./molecules/Modal";
import Field from "./atoms/Field";
import Button from "./atoms/Button";
import Label from "./atoms/Label";
import Reveal from "./atoms/Reveal";
import { ADDRESS, EMAIL, EMAILJS, PHONE, PHONE_HREF } from "../lib/site";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function Contact() {
  const [result, setResult] = useState(null); // null | "success" | "error"

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onBlur" });

  const onSubmit = async (values) => {
    try {
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.contactTemplate,
        { ...values, time: new Date().toLocaleString() },
        EMAILJS.publicKey,
      );
      setResult("success");
      reset();
    } catch (error) {
      console.error("Error sending email:", error);
      setResult("error");
    }
  };

  return (
    <>
      <Section id="contact" ground="paper">
        <SectionHeader
          index={4}
          eyebrow="Contact"
          lines={[<>Tell us what</>, <>you're trying</>, <>to move</>]}
          standfirst="A project in mind, or just want to compare notes? Send it over — a real person reads every message and replies within one business day."
        />

        <div className="mt-16 grid gap-14 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
          {/* ── Studio details ─────────────────────────────────────── */}
          <Reveal>
            <Label rule className="mb-8">
              The studio
            </Label>
            <p className="mb-9 max-w-measure text-[0.9rem] leading-relaxed text-ink-muted">
              We help businesses grow their digital presence through smart strategy, considered
              design and technology that holds up. From first-round startups to established brands.
            </p>

            <div className="space-y-6">
              <ContactDetail icon={MapPin} label="Office" value={ADDRESS.join(", ")} />
              <ContactDetail icon={Mail} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
              <ContactDetail icon={Phone} label="Telephone" value={PHONE} href={PHONE_HREF} />
              <ContactDetail icon={Clock} label="Hours" value="Sun–Fri, 10:00 – 18:00 NPT" />
            </div>
          </Reveal>

          {/* ── Brief form ─────────────────────────────────────────── */}
          <Reveal index={1}>
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-8">
              <Label rule>Send a brief</Label>

              <div className="grid gap-8 sm:grid-cols-2">
                <Field
                  label="Your name"
                  name="from_name"
                  required
                  autoComplete="name"
                  placeholder="Jane Sharma"
                  error={errors.from_name?.message}
                  {...register("from_name", {
                    required: "Please tell us your name",
                    minLength: { value: 2, message: "That looks a little short" },
                  })}
                />
                <Field
                  label="Your email"
                  name="from_email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="jane@company.com"
                  error={errors.from_email?.message}
                  {...register("from_email", {
                    required: "We need an address to reply to",
                    pattern: { value: EMAIL_RE, message: "Check this email address" },
                  })}
                />
              </div>

              <Field
                label="Subject"
                name="subject"
                required
                placeholder="SEO for a new ecommerce brand"
                error={errors.subject?.message}
                {...register("subject", { required: "A one-line subject helps us route this" })}
              />

              <Field
                as="textarea"
                label="Message"
                name="message"
                required
                rows={6}
                placeholder="What are you trying to achieve, and by when?"
                hint="The more context you give, the more useful our first reply will be."
                error={errors.message?.message}
                {...register("message", {
                  required: "Tell us a little about the project",
                  minLength: { value: 20, message: "A sentence or two, at least" },
                })}
              />

              <Button type="submit" as="button" variant="solid" size="lg" loading={isSubmitting} arrow={!isSubmitting} className="self-start">
                {isSubmitting ? "Sending" : "Send message"}
              </Button>
            </form>
          </Reveal>
        </div>
      </Section>

      <Modal
        open={result === "success"}
        onClose={() => setResult(null)}
        tone="success"
        title="Message sent"
        footer={
          <Button onClick={() => setResult(null)} variant="solid" size="md">
            Done
          </Button>
        }
      >
        Thanks for reaching out — we'll come back to you within one business day.
      </Modal>

      <Modal
        open={result === "error"}
        onClose={() => setResult(null)}
        tone="error"
        title="That didn't send"
        footer={
          <>
            <Button onClick={() => setResult(null)} variant="outline" size="md">
              Close
            </Button>
            <Button href={`mailto:${EMAIL}`} variant="solid" size="md">
              Email us instead
            </Button>
          </>
        }
      >
        We couldn't reach the mail service. Please try again, or write to{" "}
        <a href={`mailto:${EMAIL}`} className="link-draw text-brand">
          {EMAIL}
        </a>
        .
      </Modal>
    </>
  );
}
