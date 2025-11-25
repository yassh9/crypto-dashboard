import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: "Ubuntu" },
        body: { value: "Ubuntu" },
      },
    },
  },
  globalCss: {
    "html, body": {
      bg: { _light: "gray.100", _dark: "gray.900" },
      color: { _light: "gray.900", _dark: "gray.100" },
    },
    
    "*::selection": {
      bg: { _light: "green.200", _dark: "green.600" },
    },
  },
});
