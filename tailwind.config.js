/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Escanea todos los archivos en la carpeta src
    "./public/index.html", // También escanea el HTML en public
  ],
  theme: {
    extend: {}, // Aquí puedes personalizar colores, fuentes, etc.
  },
  plugins: [],
};