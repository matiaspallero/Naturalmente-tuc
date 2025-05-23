/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,vue}", // Escanea todos estos tipos de archivo en tu carpeta src
    "index.html"                           // Escanea también el index.html si está en public
  ],
  theme: {
    extend: {
      // Aquí puedes extender el tema de Tailwind, por ejemplo, con colores personalizados
    },
  },
  plugins: [],
}