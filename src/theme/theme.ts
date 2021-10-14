const theme: Theme = {
  palette: {
    black: "#262E32",
    black90: "#65747A",
    black70: "#9EA1A3",
    black60: "rgba(0, 0, 0, 0.6)",
    black20: "#D3D3DB",
    black10: "#EBEBEF",
    blue: "#3978CE",
    blue50: "#AACCF6",
    blue10: "#DCEAFB",
    darkBlue: "#2d65a1",
    red: "#C63C35",
    red50: "#D9BEBD",
    fafafa: "#FAFAFA",
    orange: "#e66c0c",
    lightOrange: "#ded0bd",
    white: "#ffffff",
  },

  typography: {
    textSizes: {
      xs: {
        fontSize: 10,
        lineHeight: "14px",
      },
      sm: {
        fontSize: 12,
        lineHeight: "16px",
      },
      md: {
        fontSize: 14,
        lineHeight: "24px",
      },
      lg: {
        fontSize: 16,
        lineHeight: "26px",
      },
      xl: {
        fontSize: 24,
        lineHeight: "36px",
      },
      xxl: {
        fontSize: 32,
        lineHeight: "44px",
      },
    },
    fontStyle: "normal",
    fontStretch: "normal",
    textWeights: {
      bold: 800,
      semibold: 600,
      regular: 400,
    },
    fontFamily: [
      "Open Sans",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      "sans-serif",
    ].join(","),
  },
};
export default theme;
