/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js"
  ],
  plugins: [
    require("flowbite/plugin"),
    require('@tailwindcss/forms')
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      color: {
        primary: '#EEEEEE',
        accent: '#615EFC',
        secondary: '#7E8EF1',
        dark: '#222831'
      },
      gray: {
        50: '#f9fafb',
        100:'#f3f4f6',
        200:'#e5e7eb',
        300:'#d1d5db',
        400:'#9ca3af',
        500:'#6b7280',
        600:'#4b5563',
        700:'#374151',
        800:'#1f2937',
        900:'#111827',
        950:'#030712'
      },
      red: {
        50: '#fef2f2',
        100: '#fee2e2',
        200: '#fecaca',
        300: '#fca5a5',
        400: '#f87171',
        500: '#ef4444',
        600: '#dc2626',
        700: '#b91c1c',
        800: '#991b1b',
        900: '#7f1d1d',
        950: '#450a0a'
      },
      blue: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
        950: '#172554'
      },
      indigo:{
        50:'#eef2ff',
        100:'#e0e7ff',
        200:'#c7d2fe',
        300:'#a5b4fc',
        400:'#818cf8',
        500:'#6366f1',
        600:'#4f46e5',
        700:'#4338ca',
        800:'#3730a3',
        900:'#312e81',
        950:'#1e1b4b'
      }
    },
  },
  plugins: [],
};