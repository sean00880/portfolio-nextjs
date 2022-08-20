/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:  theme => ( {
        "nav": "url('/assets/navimage.jpg')",
        "bg_image": "url('/assets/bg.jpg')",
        "bg_image2": "url('/assets/bg.gif')",
        "bg_image3": "url('/assets/sample.png')",
        "bg_image4": "url('/assets/bg4.jpg')",
        "bg_image5": "url('/assets/sample2.png')",
        "bg_image6": "url('/assets/sample7.png')"
      })
    },
  },
  plugins: [],
}
