/** @type {import('tailwindcss').Config} */
const x = [
  "0",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "20",
  "30",
  "40",
  "50",
  "60",
  "70",
  "80",
  "90",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
  "1000",
  "1100",
  "1200",
  "1300",
  "1400",
  "1500",
];

const safelist = [
  ...x.map((position) => `translate-x-[${position}px]`),
  ...x.map((position) => `-translate-x-[${position}px]`)
]
export default {
  content: ["./src/**/*.{js,jsx}"],
  safelist,
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
      // Background colors
      "gray-50": "#F9FAFB", // Light gray background

      // Card background
      white: "#FFFFFF",

      // Primary color
      "blue-600": "#6636e0", // Primary blue color
      // bg-[#6636e0]

      // Text colors
      "gray-800": "#1F2937", // Dark gray for text
      "gray-600": "#4B5563", // Medium gray for text

      // Accent color
      "blue-600": "#6636e0", // Accent blue color

      "soft-blue": "#6636e0",
      "pale-lavender": "#c2e9fb",
      "deep-indigo": "#4b0082",
      "muted-lavender": "#8a4baf",
      "midnight-navy": "#2c3e50",
      "vibrant-royal-blue": "#6636e0",
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
      backgroundImage: {
        heroGradient:
          "linear-gradient(91deg, rgb(18 12 1 / 70%), rgb(0 0 0 / 40%)), url(/src/assets/worship.jpg)",
        heroGradientLarge:
          "linear-gradient(91deg, rgb(22 108 215 / 70%), rgb(244 244 244 / 40%))",
        VoterFormbg: "linear-gradient(to right, #efefbb, #d4d3dd)",
        rightArrow: "url(/src/assets/right-arrow.png)"
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
