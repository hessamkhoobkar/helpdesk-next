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
            foreground: "#657685",
            background: "#FFFFFF",
            content1: "#F3F5F6",
            content2: "#E8EBED",
            content3: "#D4D9DE",
            content4: "#BCC5CC",
            divider: "#E8EBED",
            focus: "#1D55C4",
            default: {
              50: "#F3F5F6",
              100: "#E8EBED",
              200: "#D4D9DE",
              300: "#BCC5CC",
              400: "#A5B1BB",
              500: "#8E9CA9",
              600: "#7A8B9A",
              700: "#657685",
              800: "#4B5763",
              900: "#303940",
              950: "#23292E",
              DEFAULT: "#657685",
            },
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
              50: "#FDE2D2",
              100: "#FCC0A6",
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
        dark: {
          colors: {
            foreground: "#FFFFFF",
            background: "#040a17",
            content1: "#0a1324",
            content2: "#131e30",
            content3: "#1e2a3d",
            content4: "#2c394a",
            divider: "#131e30",
            focus: "#1D55C4",
            default: {
              100: "#070F1D",
              200: "#131e30",
              300: "#1e2a3d",
              400: "#2c394a",
              500: "#354252",
              600: "#657685",
              700: "#a0b0ba",
              800: "#c1cdd4",
              900: "#e6ebed",
              DEFAULT: "#354252",
            },
            primary: {
              100: "#05175E",
              200: "#092171",
              300: "#0E308D",
              400: "#1541A8",
              500: "#1D55C4",
              600: "#4F83DB",
              700: "#73A5ED",
              800: "#A4C9F9",
              900: "#D1E5FC",
              DEFAULT: "#1D55C4",
            },
            success: {
              100: "#034011",
              200: "#064E11",
              300: "#0A610F",
              400: "#10740E",
              500: "#1F8714",
              600: "#56B742",
              700: "#87DB6B",
              800: "#BCF3A0",
              900: "#E0F9CE",
              DEFAULT: "#1F8714",
            },
            warning: {
              100: "#6C2700",
              200: "#833600",
              300: "#A24A00",
              400: "#C26100",
              500: "#E27C00",
              600: "#EDA53B",
              700: "#F6C162",
              800: "#FCDC97",
              900: "#FDEFCA",
              DEFAULT: "#E27C00",
            },
            danger: {
              100: "#6C0624",
              200: "#830A23",
              300: "#A21122",
              400: "#C2181F",
              500: "#E22B22",
              600: "#ED6A56",
              700: "#F69378",
              800: "#FCC0A6",
              900: "#FDE2D2",
              DEFAULT: "#E22B22",
            },
          },
        },
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
