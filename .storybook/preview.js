import { ThemeProvider } from "@mui/material";
import { theme } from "../src/theme";
import { Provider } from "../src/store/Provider";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Provider>{<Story />}</Provider>
    </ThemeProvider>
  ),
];
