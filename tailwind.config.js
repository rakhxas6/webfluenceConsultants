/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // ── Swiss editorial scale ───────────────────────────────────────────
    extend: {
      colors: {
        // Surfaces — warm paper stock, not clinical white
        paper: {
          DEFAULT: "#FAFAF8",
          raised: "#F3F1EB",
          deep: "#EAE7DE",
        },
        // Ink — near-black, never pure #000
        ink: {
          DEFAULT: "#0A0A0A",
          soft: "#35322D",
          muted: "#57544E", // 7.3:1 on paper — safe for body copy
          faint: "#8C8880", // decorative / large text only
        },
        rule: {
          DEFAULT: "#DCD9D1",
          strong: "#B9B5AB",
        },
        // Brand
        brand: {
          DEFAULT: "#0025CC",
          deep: "#001A8C",
          wash: "#EBEEFF",
        },
        flame: {
          DEFAULT: "#FF751F",
          deep: "#B84A00", // 4.6:1 on paper — the only orange safe for text
          wash: "#FFF0E5",
        },
        whatsapp: "#128C4A", // darkened from #25D366 for AA contrast on white text
      },

      fontFamily: {
        // Body and UI voice
        sans: ["'Space Grotesk'", "ui-sans-serif", "system-ui", "sans-serif"],
        // Reserved for the oversized display lines only
        display: ["Archivo", "ui-sans-serif", "system-ui", "sans-serif"],
        // Editorial pull-quotes and inline emphasis
        serif: ["'Instrument Serif'", "ui-serif", "Georgia", "serif"],
        // Wide-tracked small caps: eyebrows, nav, column heads, buttons
        meta: ["'Space Grotesk'", "ui-sans-serif", "system-ui", "sans-serif"],
      },

      fontSize: {
        // Meta labels — wide-tracked small caps. Weight is baked in so every
        // label reads at the same 600 without each caller remembering it.
        meta: ["0.6875rem", { lineHeight: "1.2", letterSpacing: "0.13em", fontWeight: "600" }],
        "meta-lg": ["0.8125rem", { lineHeight: "1.2", letterSpacing: "0.11em", fontWeight: "600" }],
        // Fluid editorial display
        d1: ["clamp(2.75rem, 9vw, 8.5rem)", { lineHeight: "0.86", letterSpacing: "-0.035em" }],
        d2: ["clamp(2.25rem, 6.2vw, 5.25rem)", { lineHeight: "0.9", letterSpacing: "-0.03em" }],
        d3: ["clamp(1.75rem, 4vw, 3.25rem)", { lineHeight: "0.95", letterSpacing: "-0.025em" }],
        d4: ["clamp(1.375rem, 2.6vw, 2rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
      },

      spacing: {
        gutter: "clamp(1rem, 4vw, 4rem)",
        band: "clamp(4rem, 9vw, 8.5rem)",
      },

      maxWidth: {
        measure: "68ch", // 65–75 char line length
        shell: "96rem",
      },

      // Explicit z-scale — no magic numbers
      zIndex: { base: "0", raised: "10", sticky: "20", nav: "30", overlay: "40", modal: "50" },

      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)", // expo-out
        swift: "cubic-bezier(0.4, 0, 0.2, 1)",
      },

      backgroundImage: {
        // Diagonal hatch for "empty" grid cells. The hairline grid lives in
        // index.css as `.substrate` — as a utility it would need the same
        // `bg-grid` name for both its image and its size, which collide.
        hatch: `repeating-linear-gradient(45deg, rgba(10,10,10,0.05) 0 1px, transparent 1px 9px)`,
      },

      keyframes: {
        marquee: { from: { transform: "translate3d(0,0,0)" }, to: { transform: "translate3d(-50%,0,0)" } },
        "marquee-rev": { from: { transform: "translate3d(-50%,0,0)" }, to: { transform: "translate3d(0,0,0)" } },
        caret: { "0%,49%": { opacity: "1" }, "50%,100%": { opacity: "0" } },
        shimmer: { from: { backgroundPosition: "-160% 0" }, to: { backgroundPosition: "260% 0" } },
        "rule-draw": { from: { transform: "scaleX(0)" }, to: { transform: "scaleX(1)" } },
      },
      animation: {
        marquee: "marquee var(--marquee-duration,42s) linear infinite",
        "marquee-rev": "marquee-rev var(--marquee-duration,42s) linear infinite",
        caret: "caret 1.06s steps(1) infinite",
        shimmer: "shimmer 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
