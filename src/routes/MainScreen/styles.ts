import { Styles } from "jss";

const styles = (theme: Theme): Styles => {
  const { typography, palette } = theme;
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      margin: [0, 40],
      "& > *": {
        marginBottom: 12,
      },
      "& > :last-child": {
        marginBottom: 12,
      },
    },
    buttons: {
      "& > *": {
        marginRight: 12,
      },
      "& > :last-child": {
        marginRight: 12,
      },
    },
  };
};
export default styles;
