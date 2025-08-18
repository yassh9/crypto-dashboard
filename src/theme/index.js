import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: "Ubuntu, sans-serif" },
        body: { value: "Ubuntu, sans-serif" },
      },
    },
  },
});
