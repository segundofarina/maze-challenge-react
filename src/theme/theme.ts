import { BreakpointSize } from "../Types/Theme";

const breakpoints: {
  keys: BreakpointSize[];
  values: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  unit: string;
  step: number;
} = {
  keys: ["xs", "sm", "md", "lg", "xl"],
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
  unit: "px",
  step: 5,
};

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
  icons: {
    size: {
      default: 24,
      sm: 24,
      md: 48,
      lg: 60,
    },
  },
  breakpoints: {
    keys: breakpoints.keys,
    values: breakpoints.values,
    unit: breakpoints.unit,
    step: breakpoints.step,
    up: (key: BreakpointSize): string => {
      const value: number =
        typeof key === "number" ? key : breakpoints.values[key];
      return `@media (min-width:${value}${breakpoints.unit})`;
    },
    down: (key: BreakpointSize) => {
      const value: number = (() => {
        if (typeof key === "number") return key;
        return breakpoints.values[key];
      })();
      return `@media (max-width:${value - breakpoints.step / 100}${
        breakpoints.unit
      })`;
    },
    between: (start: BreakpointSize, end: BreakpointSize) => {
      const endIndex = breakpoints.keys.indexOf(end) + 1;
      if (endIndex === breakpoints.keys.length)
        return theme.breakpoints.up(start);
      return `@media (min-width:${breakpoints.values[start]}${
        breakpoints.unit
      }) and (max-width:${
        breakpoints.values[breakpoints.keys[endIndex]] - breakpoints.step / 100
      }${breakpoints.unit}`;
    },
  },
};
export default theme;
