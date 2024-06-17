/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "master-green": "#adf3d4",
        "master-blue": "#103a61",
        "master-lightblue-2": "#E2EBFF",
        "master-lightblue": "#B7CEFF",
        "master-green-2": "#27dea6",
      },
      colors: {
        "master-blue": "#103a61",
        "master-black": "#121519",
      },
      borderColor: { "master-lightblue": "#B7CEFF", "master-green": "#adf3d4" },
    },
  },
  plugins: [],
};
