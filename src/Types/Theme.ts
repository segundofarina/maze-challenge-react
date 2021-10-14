export type BreakpointSize = "xs" | "sm" | "md" | "lg" | "xl";

type textAttributes = {
  fontSize: number;
  lineHeight: string;
};
export enum TextSize {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
  xx = "xxl",
}
export enum TextWeight {
  regular = "regular",
  semiBold = "semibold",
  bold = "bold",
}
export enum ButtonType {
  primary = "primary",
  secondary = "secondary",
  tertiary = "tertiary",
  danger = "danger",
}
export enum ButtonSize {
  xs = "xs",
  sm = "sm",
  md = "md",
}
export enum PaletteColors {
  black = "black",
  black90 = "black90",
  black70 = "black70",
  black60 = "black60",
  black20 = "black20",
  black10 = "black10",
  blue = "blue",
  blue50 = "blue50",
  blue10 = "blue10",
  darkBlue = "darkBlue",
  red = "red",
  red50 = "red50",
  fafafa = "fafafa",
  orange = "orange",
  lightOrange = "lightOrange",
  white = "white",
}
declare global {
  type Theme = {
    palette: {
      [key in PaletteColors]: string;
    };
    typography: typography;
  };
}
export type typography = {
  textSizes: {
    [key in TextSize]: textAttributes;
  };
  textWeights: {
    [key in TextWeight]: number;
  };
  fontStyle: "normal";
  fontStretch: "normal";
  fontFamily: string;
};
