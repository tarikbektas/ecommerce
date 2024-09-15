// tailwind.config.js
import { tailwindConfig } from "@storefront-ui/react/tailwind-config";
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  presets: [tailwindConfig],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@storefront-ui/react/**/*.{js,mjs}",
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(),

  ],
};
