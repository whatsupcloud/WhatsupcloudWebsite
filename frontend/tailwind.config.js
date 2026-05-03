export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B3C8C",
        secondary: "#0F5DB8",
        brandGreen: "#168A3A",
        lightGreen: "#7ED321",
        accent: "#FFD43B"
      },
      boxShadow: {
        premium: "0 24px 70px rgba(11, 60, 140, 0.13)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
