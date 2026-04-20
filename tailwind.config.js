/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ["'Press Start 2P'", "monospace"],
        mono: ["'Share Tech Mono'", "monospace"],
      },
      colors: {
        "neon-blue": "#00f0ff",
        "neon-pink": "#ff006e",
        "neon-yellow": "#ffe600",
        "neon-green": "#39ff14",
      },
    },
  },
  plugins: [],
}
