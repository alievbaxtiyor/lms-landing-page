/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: "#F4FDE9",
          100: "#E8FBD3",
          200: "#D1F7A7",
          300: "#B9F37B",
          400: "#A2EF4F",
          500: "#9FE870",
          600: "#8BD65A",
          700: "#6FB145",
          800: "#538330",
          900: "#37551A",
          DEFAULT: "#9FE870",
          dark: "#8BD65A",
          light: "#B5F28E",
        },
      },
      fontFamily: {
        roboto: ["var(--font-roboto)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
