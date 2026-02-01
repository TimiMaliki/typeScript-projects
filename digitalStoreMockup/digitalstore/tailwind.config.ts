import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      borderColor: {
        DEFAULT: "#111827", // gray-900
      },
      boxShadow: {
        custom:
          "0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(0, 0, 0, 0.02)",
      },
    },
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1000px",
        "2xl": "1000px",
      },
    },
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
};

export default config;
