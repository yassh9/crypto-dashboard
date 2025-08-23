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
      bg: "gray.50", // or whatever background color you prefer
    },
    "*::placeholder": {
      opacity: 1,
      color: "fg.subtle",
    },
    "*::selection": {
      bg: "green.200",
    },
  },

});
