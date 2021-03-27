const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        4.5: "1.125rem",
        8.5: "2.125rem",
        13.5: "3.375rem",
        18: "4.5rem",
        25: "6.25rem",
        26: "6.5rem",
        27.5: "6.875rem",
      },
      colors: {
        theme: {
          primary: "#7C5DFA",
          secondary: "#9277FF",
          "navy-blue": "#1E2139",
          "light-navy-blue": "#252945",
          "light-blue": "#DFE3FA",
          gray: "#888EB0",
          indigo: "#7E88C3",
          black: "#0C0E16",
          red: "#EC5757",
          pink: "#FF9797",
          "light-red": "#FF9797",
          "light-gray": "#F8F8FB",
          "dark-navy-blue": "#141625",
          green: "#33D69F",
          "dark-gray": "#373B53",
          grayer: "#494E6E",
          orange: "#FF8F00",
          "darker-gray": "#373B53",
          "lighter-gray": "#F9FAFE",
        },
      },
      fontFamily: {
        sans: ["Spartan", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "2xs": [
          "11px",
          {
            letterSpacing: "-0.23px",
            lineHeight: "18px",
          },
        ],
        xs: [
          "12px",
          {
            letterSpacing: "-0.25px",
            lineHeight: "15px",
          },
        ],
        sm: [
          "15px",
          {
            letterSpacing: "-0.31px",
            lineHeight: "20px",
          },
        ],
        base: [
          "16px",
          {
            letterSpacing: "-0.8px",
            lineHeight: "24px",
          },
        ],
        xl: [
          "20px",
          {
            letterSpacing: "-0.63px",
            lineHeight: "22px",
          },
        ],
        "2xl": [
          "24px",
          {
            letterSpacing: "-0.5px",
            lineHeight: "32px",
          },
        ],
        "3xl": [
          "32px",
          {
            letterSpacing: "-1px",
            lineHeight: "36px",
          },
        ],
      },
      maxWidth: {
        "2.5xl": "45.625rem",
      },
      borderRadius: {
        "2.5xl": "1.25rem",
      },
      boxShadow: {
        theme: "0px 10px 10px -10px rgba(72, 84, 159, 0.100397)",
        "theme-lg": "0px 10px 20px rgba(72, 84, 159, 0.25)",
        "theme-dark": "0px 10px 20px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
