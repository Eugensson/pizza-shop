import type { Config } from "tailwindcss";
import scrollbar from "tailwind-scrollbar";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        primary: [`var(--font-bangers)`, "sans-serif"],
        secondary: [`var(--font-quicksand)`, "sans-serif"],
        tertiary: [`var(--font-robotoCondensed)`, "sans-serif"],
      },
      colors: {
        primary: "#d1411e",
        secondary: "#ffa323",
        tertiary: "#331812",
        black: "#231714",
        orange: "#ff7a30",
      },
      backgroundImage: {
        pattern: "url('/pattern.png')",
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
    },
  },
  plugins: [scrollbar],
} satisfies Config;
