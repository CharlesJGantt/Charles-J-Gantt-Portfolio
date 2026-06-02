import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Material Tailwind shipped a `blue-gray` palette; alias it to Tailwind's
        // `slate` (visually equivalent) so existing `*-blue-gray-*` classes work.
        "blue-gray": colors.slate,
      },
    },
  },
  plugins: [],
};

export default config;
