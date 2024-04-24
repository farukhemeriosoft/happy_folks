/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        darkBlue: '#160A50', 
        lightBlue: '#F4F5FF',
        skyBlue: '#EEF0FF',
        themeGray: '#F2F6F9',
        activeBlue: '#6452F4',
        themeOrange: '#77C000',
        themeYellow: '#CBE02F',
      },
      fontFamily: {
        sfProRounded: ['var(--font-sf-pro-rounded)'],
        graphik: ['var(--font-graphik)'],
      },
    },
  },
  plugins: [],
};
