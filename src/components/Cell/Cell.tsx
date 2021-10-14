import React from "react";
import classNames from "classnames";
import { createUseStyles } from "react-jss";
import styles from "./styles";

type CellProps = { type: "wall" | "empty" | "player" };

const useStyles = createUseStyles<
  keyof ReturnType<typeof styles>,
  CellProps,
  Theme
>(styles);

const Cell: React.FC<CellProps> = (props) => {
  const classes = useStyles(props);
  const { type } = props;
  return (
    <div
      className={classNames(
        classes.root,
        type === "wall" && classes.wall,
        type === "player" && classes.player
      )}
    ></div>
  );
};

Cell.defaultProps = {};
Cell.displayName = "Cell";
export default Cell;
