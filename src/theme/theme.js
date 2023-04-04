import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 475,
      desktop: 1440,
    },
  },
  palette: {
    blue: {
      marine: "hsl(213, 96%, 18%)",
      purplish: "hsl(243, 100%, 62%)",
      pastel: "hsl(228, 100%, 84%)",
      light: "hsl(206, 94%, 87%)",
    },
    red: {
      strawberry: "hsl(354, 84%, 57%)",
    },
    gray: {
      cool: "hsl(231, 11%, 63%)",
      light: "hsl(229, 24%, 87%)",
      magnolia: "hsl(217, 100%, 97%)",
      alabaster: "hsl(231, 100%, 99%)",
      white: "hsl(0, 0%, 100%)",
    },

    //---button colors---
    dark: {
      main: "hsl(213, 96%, 18%)",
    },
    purple: {
      main: "hsl(243, 100%, 62%)",
    },
    //------
  },
  typography: {
    fontFamily: ["Ubuntu", "sans-serif"].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "8px",
          padding: "8px 20px",
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.common.white,
          fontSize: 14,
          fontWeight: 600,
          "& .MuiInputBase-input": {
            padding: "8px 15px",
            border: `1px solid ${theme.palette.grey[200]}`,
            borderRadius: 8,
          },
        }),
      },
      defaultProps: {
        disableUnderline: true,
      },
    },
  },
});
