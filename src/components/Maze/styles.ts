import { Styles } from "jss";

const styles = (theme: Theme): Styles => {
  const { typography, palette } = theme;
  return {
    root: { display: "flex", flexDirection: "column" },
    row: { display: "flex" },
  };
};

export default styles;
