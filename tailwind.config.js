module.exports = {
  mode: 'aot',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontWeight: {
        extraBold: "900"
      },
      positions: {
        bottom: 'bottom',
        center: 'center',
        left: 'left',
        'left-bottom': 'left bottom',
        'left-top': 'left top',
        right: 'right',
        'right-bottom': 'right bottom',
        'right-top': 'right top',
        top: 'top',
      },
      fontFamily: {
        gordita: 'Gordita',
        quicksand: 'Quicksand, sans-serif',
      },
      fontSize: {
        "2xs": "12px",
        "xs": "14px",
        "sm": "16px",
        "md": "18px",
        "lg": "20px",
        "xl": "24px",
        "2xl": "32px",
        "3xl": "40px",
        "4xl": "48px",
        "5xl": "56px",
        "6xl": "72px",
      },
      colors:{
        'black': "#020D1E",
        green: {
          "50": "rgba(0, 228, 175, 0.6)",
          "100": "rgba(0, 228, 175, 0.2)",
          "200": "#23FDB4",
          "300": "#00CC89",
          "400": "#009F6B"
        },
        gray: {
          '50': "rgba(2, 13, 30, 0.4)",
          '100': 'rgba(2, 13, 30, 0.6)',
          '200': 'rgba(2, 13, 30, 0.8)',
          '300': '#020D1E',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
