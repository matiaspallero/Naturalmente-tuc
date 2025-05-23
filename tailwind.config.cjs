const { BgColorsOutlined } = require('@ant-design/icons');
const { theme } = require('antd');
const { Color } = require('antd/es/color-picker');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,vue}", // Escanea todos estos tipos de archivo en tu carpeta src
    "index.html"                           // Escanea también el index.html si está en public
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
        fadeInUp: 'fadeInUp 1s ease-out 0.3s forwards', // 'forwards' mantiene el estado final
      }
    },
  },
  plugins: [],
}