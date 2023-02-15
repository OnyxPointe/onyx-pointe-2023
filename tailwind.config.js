module.exports = {
  content: [
    './_includes/**/*.{html,md,js}',
    './_layouts/**/*.{html,md,js}',
    './_*/**/*.{html,md,js}',
    '!./_site/**/*.{html,md,js}',
    './*.{html,md,js}'
  ],
  theme: {
    extend: {    
      colors: {
        'darkest': '#1F1F1F',
        'dark': '#393939', 
        'darkest-p': '#5B4256',
        'dark-p': '#6A4D64', 
        'med-p': '#98718E', 
        'light-p': '#C3ACBD',
        'med-g': '#E0E0E0',
        'light-g': '#EFEFEF',
      },  
      fontFamily: {
        logo: ['Tenor Sans', 'sans-serif'],
        featured: ['Bilbo Swash Caps', 'cursive'],
        header: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
