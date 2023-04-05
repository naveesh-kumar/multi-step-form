import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { theme } from "@/theme";
import "@/fonts/fonts.css";
import { Provider } from "../store/Provider";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}
