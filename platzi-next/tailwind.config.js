module.exports = {
    darkMode: 'class', // Habilita el modo oscuro basado en una clase
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
      "./node_modules/shadcn-ui/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          background: "#000000",
          foreground: "#00ff00", // Verde neón
        },
      },
    },
    plugins: [],
  };