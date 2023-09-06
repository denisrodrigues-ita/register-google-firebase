import { extendTheme } from "@chakra-ui/react";

const colors = {
  custom_colors: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
    600: "#2a6",
  },
};

const theme = extendTheme({ colors });

export default theme;
