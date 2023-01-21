/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        bgTheme1: {
          mainBg: "#3A4764",
          keypadBg:"#232C43",
          screenBg:"#182034",
        },
        keysTheme1: {
          keyBg1:"#637097",//--Desaturated dark blue (key background)
          keyBg2:"#EAE3DC",//--Light grayish orange (key background)
          keyShadow1:"#404E72",//--Desaturated dark blue (key shadow)
          keyShadow2:"#93261A",//--Dark red (key shadow)
          keyShadow3:"#B4A597",//--Grayish orange (key shadow)
          keyToggleBg1:"#D03F2F",//--Red (key background, toggle)
        },
        textTheme1: {
          text1:"#444B5A",//Very dark grayish blue
          text2:"#FFFFFF",//white
        },

        bgTheme2: {
          mainBg: "#E6E6E6",
          keypadBg:"#D1CCCC",
          screenBg:"#EDEDED",
        },
        keysTheme2: {
          keyBg1:"#377F86", //--Dark moderate cyan 
          keyBg2:"#E5E4E1",//--Light grayish yellow (key background)
          keyShadow1:"#1B5F65", //--Very dark cyan (key shadow)
          keyShadow2:"#893901",//--Dark orange (key shadow)
          keyShadow3:"#A69D91",//--Dark grayish orange (key shadow)
          keyToggleBg1:"#CA5502",//--Orange (key background, toggle)
        },
        textTheme2: {
          text1:"#35352C",//Very dark grayish yellow
          text2:"#FFFFFF",//white
        },

        bgTheme3: {
          mainBg: "#160628",
          keypadBg:"#1D0934",
          screenBg:"#1D0934",
        },
        keysTheme3: {
          keyBg1:"#58077D", //--Dark violet (key background)
          keyBg2:"#341C4F",//--Very dark violet (key background)
          keyShadow1:"#BC15F4", //--Vivid magenta (key shadow)
          keyShadow2:"#6CF9F2",//--Soft cyan (key shadow)
          keyShadow3:"#871C9C",//--Dark magenta
          keyToggleBg1:"#00E0D1",//--Pure cyan (key background, toggle)
        },
        textTheme3: {
          text1:"#FFE53D",//Very dark grayish yellow
          text2:"#1B2428",//Very dark blue
        },
      },
    },
  },
  plugins: [],
}
