import { ThemeProvider } from "styled-components";

import { DefaultTheme, GlobalStyles } from "../src/styles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: [
        "Introdução",
        "Pages",
        ["SIGNIN", "SIGNUP", "HOME", "PROFILE", "PROFILE EDIT"],
        "Navigation",
        "Layout",
        "Components",
        "Form",
        "Icons"
      ]
    },
    storyCategory: {
      open: false
    }
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  backgrounds: {
    default: "light",
    values: [
      {
        name: "light",
        value: "#FFD581"
      },
      {
        name: "dark",
        value: "#121214"
      }
    ]
  },
  layout: "fullscreen"
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
];
