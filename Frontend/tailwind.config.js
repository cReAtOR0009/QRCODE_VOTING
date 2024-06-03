
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1440px",
      // => @media (min-width: 1024px) { ... }

      xl: "1920px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1920px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
     
    },

    fontFamily: {
      // sans: ['Graphik', 'sans-serif'],
      // serif: ['Merriweather', 'serif'],
    },
    fontSize: {
      xxs: "0.625rem", // 10px
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.25rem", // 36px
      "5xl": "3rem", // 48px
      "6xl": "3.75rem", // 60px
      "7xl": "4.5rem", // 72px
      "8xl": "6rem", // 96px
      "9xl": "8rem", // 128px
      // Add custom font sizes
      tiny: "0.7rem", // Custom tiny size
      huge: "5rem", // Custom huge size
      massive: "10rem", // Custom massive size
    },
    extend: {
      backgroundImage:{
        heroGradient:
        "linear-gradient(91deg, rgb(18 12 1 / 70%), rgb(0 0 0 / 40%)), url(/src/assets/melodyofthespirit.jpg)",
        heroGradientLarge:
        "linear-gradient(91deg, rgb(22 108 215 / 70%), rgb(244 244 244 / 40%))",
        VoterFormbg:"linear-gradient(91deg, rgb(22 108 215 / 70%), rgb(244 244 244 / 40%))"
      },
      fontSize: {
        xxs: "0.625rem", // 10px
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
        "5xl": "3rem", // 48px
        "6xl": "3.75rem", // 60px
        "7xl": "4.5rem", // 72px
        "8xl": "6rem", // 96px
        "9xl": "8rem", // 128px
        // Add custom font sizes
        tiny: "0.7rem", // Custom tiny size
        huge: "5rem", // Custom huge size
        massive: "10rem", // Custom massive size
      },
    },
  },
  plugins: [],
};
