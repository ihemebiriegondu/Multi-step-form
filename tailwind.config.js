module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        sidebarDesktop: "url('./assets/images/bg-sidebar-desktop.svg')",
        sidebarMobile: "url('./assets/images/bg-sidebar-mobile.svg')",
      },
      screens: {
        xlg: '1150px',
        xsm: '500px'
      },
      colors: {
        Marine: "hsl(213, 96%, 18%)",
        Purplish: "hsl(243, 100%, 62%)",
        Pastel: "hsl(228, 100%, 84%)",
        Light: "hsl(206, 94%, 87%)",
        Strawberry: "hsl(354, 84%, 57%)",
        Coolgray: "hsl(231, 11%, 63%)",
        Lightgray: "hsl(229, 24%, 87%)",
        Magnolia: "hsl(217, 100%, 97%)",
        Alabaster: "hsl(231, 100%, 99%)",
      },
      borderRadius: {
        xxl: '2rem',
      }
    },
  },
  plugins: [],
};
