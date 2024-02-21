import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  // darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
    },
    extend: {
      colors: {
        "body-foreground": {
          DEFAULT: "var(--body-foreground)",
        },
        primary: {
          50: "#ECF4FD",
          100: "#D5E5FB",
          200: "#AACCF8",
          300: "#80B2F4",
          400: "#5B9CF1",
          500: "#2F80ED",
          600: "#1266D3",
          700: "#0D4B9B",
          800: "#093267",
          900: "#041934",
          950: "#020E1C",
        },
        secondary: {
          // TODO: Create a secondary color scale as this is the same as primary for now.
          50: "#ECF4FD",
          100: "#D5E5FB",
          200: "#AACCF8",
          300: "#80B2F4",
          400: "#5B9CF1",
          500: "#2F80ED",
          600: "#1266D3",
          700: "#0D4B9B",
          800: "#093267",
          900: "#041934",
          950: "#020E1C",
        },
        link: {
          DEFAULT: "var(--link-default)",
          highlight: "var(--link-highlight)",
        },
      },
      fontFamily: {
        sans: ["'Montserrat Variable'", "sans-serif"],
      },
      fontSize: {
        "heading-xl": [
          rem(48),
          {
            fontWeight: 800,
            lineHeight: lineHeight(59, 48),
          },
        ],
        lead: [
          rem(24),
          {
            lineHeight: lineHeight(32, 24),
            fontWeight: 400,
          },
        ],
        "body-xl": [
          rem(30),
          {
            lineHeight: lineHeight(22, 30),
            fontWeight: 400,
          },
        ],
        "body-lg": [
          rem(22),
          {
            lineHeight: lineHeight(26, 22),
            fontWeight: 400,
          },
        ],
        "body-md": [
          rem(16),
          {
            lineHeight: lineHeight(22, 16),
            fontWeight: 400,
            letterSpacing: "-0.408px",
          },
        ],
        "body-sm": [
          rem(14),
          {
            lineHeight: lineHeight(22, 14),
            fontWeight: 400,
          },
        ],
        "body-xs": [
          rem(12),
          {
            lineHeight: lineHeight(22, 12),
            fontWeight: 400,
          },
        ],
        form: [
          rem(18),
          {
            lineHeight: lineHeight(22, 18),
            fontWeight: 400,
          },
        ],
      },
      boxShadow: {
        large: "0px 1px 7px 0px #00000026",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities, theme }) => {
      addUtilities({
        ".link-highlight": {
          color: theme("colors.link.DEFAULT"),
          textDecoration: "none",
          "&:hover, &:focus": {
            color: theme("colors.link.highlight"),
            textDecoration: "underline",
          },
        },
      });
    }),
  ],
} satisfies Config;

function rem(px: number) {
  return `${px / 16}rem`;
}

function lineHeight(lineHeight: number, fontSize: number) {
  return `${lineHeight / fontSize}`;
}
