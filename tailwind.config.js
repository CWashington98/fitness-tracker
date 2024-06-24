/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#007BFF", // Electric Blue
        secondary: "#6EC1E4", // Light Blue
        accent: "#A4D037", // Lime Green
        darkGray: "#333333", // Dark Gray
        lightGray: "#F2F2F2", // Light Gray
        white: "#FFFFFF", // White
      },
    },
  },
  plugins: [],
};
