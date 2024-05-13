/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderRadius: {
      "primary-button": "5px",
      "tag-button": "17.5px",
    },
    extend: {
      colors: {
        primary: "#1d2745",
        secondary: "#1DE5D4",
        tertiary: "#F52C50",
        white: "#FFFFFF",
        mono100: "#CCCCCC",
        mono200: "#AAAAAA",
        error: "#D01E1E",
        social: "#395997",
        "dark-opacity": "rgba(255,255,255,0.1)",
      },
    },
    fontFamily: {
      body: ["Noto Sans KR"],
    },
    fontSize: {
      xs: [
        "12px",
        {
          lineHeight: "18px",
          letterSpacing: "0",
          fontWeight: "400",
        },
      ],
      sm: [
        "14px",
        {
          lineHeight: "21px",
          letterSpacing: "0",
          fontWeight: "400",
        },
      ],
      base: [
        "16px",
        {
          lineHeight: "24px",
          letterSpacing: "0",
          fontWeight: "400",
        },
      ],
      xl: ["20px", "30px"],
      "2xl": [
        "24px",
        {
          lineHeight: "36px",
          letterSpacing: "0",
          fontWeight: "700",
        },
      ],
    },
  },
  plugins: [],
};
