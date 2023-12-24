import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            foreground: "#354252",
            background: "#FFFFFF",
            content1: "#FFFFFF",
            content2: "#F7F8FA",
            content3: "#F0F2F5",
            content4: "#E8EAEF",
            divider: "#F0F2F5",
            focus: "#1D55C4",
            primary: {
              100: "#D1E5FC",
              200: "#A4C9F9",
              300: "#73A5ED",
              400: "#4F83DB",
              500: "#1D55C4",
              600: "#1541A8",
              700: "#0E308D",
              800: "#092171",
              900: "#05175E",
              DEFAULT: "#1D55C4",
            },
            success: {
              100: "#E0F9CE",
              200: "#BCF3A0",
              300: "#87DB6B",
              400: "#56B742",
              500: "#1F8714",
              600: "#10740E",
              700: "#0A610F",
              800: "#064E11",
              900: "#034011",
              DEFAULT: "#1F8714",
            },
            warning: {
              100: "#FDEFCA",
              200: "#FCDC97",
              300: "#F6C162",
              400: "#EDA53B",
              500: "#E27C00",
              600: "#C26100",
              700: "#A24A00",
              800: "#833600",
              900: "#6C2700",
              DEFAULT: "#E27C00",
            },
            danger: {
              100: "#FDE2D2",
              200: "#FCC0A6",
              300: "#F69378",
              400: "#ED6A56",
              500: "#E22B22",
              600: "#C2181F",
              700: "#A21122",
              800: "#830A23",
              900: "#6C0624",
              DEFAULT: "#E22B22",
            },
          },
        },
        dark: {},
        desaturated: {
          colors: {
            primary: {
              50: "#121212",
              100: "#121212",
              300: "#121212",
              400: "#121212",
              500: "#121212",
              600: "#121212",
              700: "#121212",
              800: "#121212",
              900: "#121212",
              DEFAULT: "#121212",
            },
          },
        },
      },
    }),
  ],
};
export default config;
