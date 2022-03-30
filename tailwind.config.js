module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("daisyui"),
  ],
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: "#6ee7b7",
          secondary: "#22d3ee",
          accent: "#fb923c",
          neutral: "#191D24",
          "base-100": "#2A303C",
          info: "#1d4ed8",
          success: "#22c55e",
          warning: "#fcd34d",
          error: "#e11d48",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
