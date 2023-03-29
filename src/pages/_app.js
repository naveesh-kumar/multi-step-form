import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { theme } from "@/theme";
import "@/fonts/fonts.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
