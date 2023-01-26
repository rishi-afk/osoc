import { extendTheme } from "@chakra-ui/react";

const fonts = {
  body: "Raleway",
  display: "Bebas Neue",
};

const breakpoints = {
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
};

const styles = {
  global: () => ({
    body: {
      color: "brand.lightest",
      bg: "brand.darkest",
    },
  }),
};

const theme = extendTheme({
  colors: {
    black: "#16161D",
    brand: {
      100: "#ffffff",
      200: "#c1f7ff",
      300: "#82efff",
      400: "#0492C2",
      500: "#037688",
      darkest: "#111111",
      overlay: "rgba(17, 17, 17, 0.75)",
      overlay2: "rgba(17, 17, 17, 0.3)",
      gray: "#ABABAB",
      grayer: "#9E9E9E",
      grayest: "#666666",
      lightest: "#F6F6F6",
    },
  },
  fonts,
  styles,
  breakpoints,
});

export default theme;
