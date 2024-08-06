/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'custom-50': '50px',
        'custom-150': '150px',
        'custom-500': '500px',
        'custom-1000': '1000px',
      },
    },
  },
  plugins: [],
};
