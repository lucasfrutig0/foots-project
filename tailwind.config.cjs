/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "nord-polar-night-900": "#292F3A",
        "nord-polar-night-700": "#2E3440",
        "nord-polar-night-500": "#3B4252",
        "nord-polar-night-300": "#434C5E",
        "nord-polar-night-100": "#4C566A",
        "nord-snow-storm-500": "#D8DEE9",
        "nord-snow-storm-300": "#E5E9F0",
        "nord-snow-storm-100": "#ECEFF4",
        "nord-snow-storm-alpha": "rgba(216,222,233,0.2)",
        "nord-frost-blue": "#88C0D0",
        "nord-frost-green": "#8FBCBB",
        "nord-frost-dark-blue": "#5E81AC",
        "nord-frost-gray-blue": "#81A1C1",
        "nord-aurora-error": "#BF616A",
        "nord-aurora-dangerous": "#D08770",
        "nord-aurora-warning": "#EBCB8B",
        "nord-aurora-success": "#A3BE8C",
        "nord-aurora-purple": "#B48EAD",
        "oceanic-1": "#86EFAC",
        "oceanic-2": "#3B82F6",
        "oceanic-3": "#9333EA",
        "premiere-league-purple": "#3D195B",
      },
      gridTemplateColumns: {
        new2: "60px 1fr",
      },
    },
  },
  plugins: [],
};
