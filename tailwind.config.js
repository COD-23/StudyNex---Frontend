/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        register: 'url("../public/Assets/Images/login-study1.jpg")',
        login: 'url("../public/Assets/Images/login-study.jpg")',
        students: 'url("../public/Assets/Images/teacher2.jpg")',
        instructors: 'url("../public/Assets/Images/teacher1.jpg")',
        welcomePage: 'url("../public/Assets/Images/study1.jpg")',
      },
      colors: {
        nack: "#c4f4ea",
        main: "#e9f8f5",
      },
    },
  },
  plugins: [],
};
