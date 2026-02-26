const colors = {
  background: "#fff",
  text: "#202124",
  gray: "#e0e0e0",
  white: "#fff",
  primary: "#0047ac",
  primaryLight: "#2e80f3",
  secondary: "#00e8ff",
  secondaryLight: "#b4f3fa",
};

export const theme = {
  colors: {
    ...colors,
    gradientRadial: `radial-gradient(circle at 80% 100%, rgba(0, 232, 255, 0.9) 0%, rgba(0, 71, 172, 0.9) 30%, rgba(32, 33, 36, 0.9) 60%)`,
    gradientLinear: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.primary} 50%, ${colors.text} 100%)`,
  },
  fonts: {
    main: "'Overpass', sans-serif",
    heading: "'MuseoModerno', sans-serif",
  },
  spacing: {
    small: ".8rem",
    medium: "1.6rem",
    large: "3.2rem",
    xlarge: "6.4rem",
  },
  breakpoints: {
    mobile: "30em",
    tablet: "48em",
    desktop: "64em",
  },
};
