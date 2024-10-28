import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'selector',
  safelist: [
    {
      pattern:
        /(text|border|ring|bg)-(red|orange|yellow|green|blue|indigo|purple|stone)-(200|300|400|600|700|800)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        blue: colors.sky,
        yellow: colors.amber,
      },
      rotate: {
        20: '20deg',
      },
      listStyleType: {
        square: 'square',
      },
    },
  },
} satisfies Config
