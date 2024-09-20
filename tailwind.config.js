/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      xl: "1280px",
    },
    extend: {
      backgroundImage: {
        customRadial:
          "radial-gradient(circle farthest-corner at 10% 20%, rgba(37, 145, 251, .98) .1%, #000780 99.8%)",
      },
      colors: {
        primaryText: "#101828",
        hover: "#127cde",
      },
      fontFamily: {
        gilroyRegular: "Gilroy Regular, sans-serif",
        gilroyMedium: "Gilroy Medium, sans-serif",
        gilroySemibold: "Gilroy Semibold, sans-serif",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          sm: "20px",
          md: "40px",
          xl: "32px",
        },
      },
    },
  },
  plugins: [],
};
