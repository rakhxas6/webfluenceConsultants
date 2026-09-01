import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Container from "./atoms/Container";
import Button from "./atoms/Button";
import Label from "./atoms/Label";
import Rule from "./atoms/Rule";
import Reveal from "./atoms/Reveal";
import RevealLines from "./atoms/RevealLines";
import { NAV_LINKS } from "../lib/site";

export default function Error() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Page not found — Webfluence Consultants</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section className="paper-grain relative flex min-h-screen items-center overflow-hidden bg-paper pt-[var(--nav-h)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 substrate opacity-70  [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_72%)]"
        />

        <Container className="relative py-20">
          <Reveal className="mb-6">
            <Label rule tone="flame">
              Error 404
            </Label>
          </Reveal>
          <Rule tone="strong" />

          <div className="grid gap-12 pt-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <RevealLines
              as="h1"
              lines={[<>This page</>, <>doesn't</>, <>exist</>]}
              className="font-display text-d1 font-extrabold uppercase text-ink"
            />

            <Reveal index={1} className="flex flex-col justify-end gap-8">
              <p className="max-w-measure text-[0.95rem] leading-relaxed text-ink-muted">
                The link may be out of date, or the page may have moved. Here's everything else.
              </p>

              <ul className="border-t border-rule">
                {NAV_LINKS.map((link, i) => (
                  <li key={link.name}>
                    <button
                      type="button"
                      onClick={() =>
                        navigate(link.hash ? `${link.path}#${link.hash}` : link.path)
                      }
                      className="group/e flex w-full cursor-pointer items-center gap-4 border-b border-rule py-4 text-left"
                    >
                      <span className="font-meta text-meta text-ink-faint tnum">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-[1.05rem] font-bold uppercase tracking-tight text-ink transition-colors duration-200 group-hover/e:text-brand">
                        {link.name}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>

              <Button onClick={() => navigate("/")} variant="solid" size="lg" arrow className="self-start">
                Back to the index
              </Button>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
