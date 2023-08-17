import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
    primary_background : '#141415',
    black:"#000000",
    white_A: '#f9f9f9',
    white_B:'#dbdbdb',
    gold: '#C5A663',
    gold_light: '#d8c097',
    gray_A:'#333333',
    b_gray: "#ffffff1a"
  },
    extend:{
      backgroundImage: {
       main: 'linear-gradient(0deg,#141415,#141415 0)'}
    },

  },
  plugins: [],
}
export default config
