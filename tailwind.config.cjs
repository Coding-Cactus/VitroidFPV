module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,svelte}"],
  theme: {
    extend: {
      colors: {
        'highlight': '#90d95b',
        'highlight-dark': '#2ad162',
        'red':    '#d6395b',
        'orange': '#ff9742',
        'yellow': '#ffcc00',
        'green':  '#5ae65a',
        'cyan': '#5ad8e6',
        'blue': '#5a6fe6',
        'violet': '#9550ba',
        'main': {
          50:  '#657280',
          100: '#3d454d',
          200: '#292e33',
          300: '#1e1e1e',
          400: '#0f0f0f',
        },
        'contrast': {
          100: '#eeeeee',
          200: '#e2e2e2',
          300: '#e0e0e0',
          400: '#cccccc',
        },
      },
      backgroundSize: {
        "0w": "0% 3px",
        "100w": "100% 3px",
      },
    },

  },
  plugins: [],
}
