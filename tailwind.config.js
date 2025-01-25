/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.{js,jsx,ts,tsx}","./src/screens/GameScreenAI.js","./src/components/*.{js,jsx,ts,tsx}","./src/screens/GameScreenLocal.js"],

  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}