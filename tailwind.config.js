module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: ['.75rem', { lineHeight: 1 }],
      sm: ['.875rem', { lineHeight: 1 }],
      base: ['1rem', { lineHeight: 1 }],
      lg: ['1.125rem', { lineHeight: 1 }],
      xl: ['1.25rem', { lineHeight: 1 }],
      '1.5xl': ['1.38rem', { lineHeight: 1 }],
      '2xl': ['1.5rem', { lineHeight: 1 }],
      '2.5xl': ['1.75rem', { lineHeight: 1 }],
      '3xl': ['1.875rem', { lineHeight: 1 }],
      '3.5xl': ['2rem', { lineHeight: 1 }],
      '4xl': ['2.25rem', { lineHeight: 1 }]
    },
    boxShadow: {
      mobile: '0px 0px 3px 0px #999999;',
      footer: '0px -1px 0px 0px #999999'
    },
    extend: {
      backgroundImage: {
        'test-bg': "url('/images/test.webp')",
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1600px',
    },
    colors: {
      black: '#333333',
      white: '#FFFFFF',
      gray: {
        100: '#F5F5F5',
        200: '#F1F1F1',
        300: '#E6E6E6', // 分割线
        400: '#CCCCCC', // 分割线2
        500: '#999999', // 次要颜色 500
        600: '#666666', // 次要颜色 600
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
      origin: {
        100: '#FFF7EE',
        300: '#F4990C',
        400: '#F46B3B',  // 主题色
      },
      green: {
        400: '#10B981'
      },
      red: {
        400: '#E81512',
      },
      teal: {
        200: '#EEF8FA',
        400: '#28AABA'
      }
    }
  },
  variants: {
    extend: {
      borderWidth: ['last'],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ]
}