import { Styles } from "jss";

const styles = (theme: Theme): Styles => {
  const { palette } = theme;
  return {
    root: {
      margin: 4,
      width: "100%",
      height: "100%",
      minHeight: 50,
      minWidth: 50,
    },
    wall: { backgroundColor: palette.black90 },
    player: { backgroundColor: palette.red },
  };
};

export default styles;
