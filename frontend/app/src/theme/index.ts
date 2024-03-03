import { extendTheme } from "@yamada-ui/react";
export const customTheme = extendTheme({
    semantics: {
        colors: {
          primary: "lime.500",
          success: "lime.400",
          info: "sky.400",
          warning: "amber.500",
          danger: "red.500",
        },
        colorSchemes: {
          primary: "lime",
          success: "lime",
          info: "sky",
          warning: "amber",
          danger: "red",
        },
    },
  })()