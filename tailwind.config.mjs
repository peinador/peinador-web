import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Fraunces Variable", ...defaultTheme.fontFamily.serif],
        display: ["Fraunces Variable", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [typography],
};
