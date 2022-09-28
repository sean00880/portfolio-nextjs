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
        "bg_image6": "url('/assets/sample7.webp')",
        "bg_image7": "url('/assets/tech.jpg')",
        "bg_image8": "url('/assets/red.png')",
        "bg_image9": "url('/assets/sample6.png')",
        "bg_image10": "url('/assets/bg.webp')",
        "bg_image11": "url('/assets/skull.jpg')",
      })
    },
  },
  plugins: [],
}
