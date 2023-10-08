import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light", // Set the initial color mode (light or dark)
    useSystemColorMode: false, // Disable system color mode detection
  },
});

export default theme;
