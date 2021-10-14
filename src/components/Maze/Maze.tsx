import React from "react";
import classNames from "classnames";
import { createUseStyles } from "react-jss";
import styles from "./styles";
import MazeModel, { TileType } from "../../models/MazeModel";
import Cell from "../Cell";
import PlayerModel from "../../models/PlayerModel";

type MazeProps = { maze: MazeModel; player: PlayerModel };

const useStyles = createUseStyles<
  keyof ReturnType<typeof styles>,
  MazeProps,
  Theme
>(styles);

const tileToCellType: { [x in TileType]: "wall" | "empty" | "player" } = {
  empty: "empty",
  finish: "empty",
  start: "empty",
  wall: "wall",
};

const isPlayerOnCell = (player: PlayerModel, row: number, col: number) =>
  player.position.col === col && player.position.row === row;

const Maze: React.FC<MazeProps> = (props) => {
  const classes = useStyles(props);
  const { maze, player } = props;
  const { tiles } = maze;

  return (
    <div className={classes.root}>
      {tiles.map((row, rowIndex) => (
        <div className={classes.row} key={`row:${rowIndex}`}>
          {row.map((tile, colIndex) => (
            <Cell
              key={`row:${rowIndex}, col:${colIndex}`}
              type={
                isPlayerOnCell(player, rowIndex, colIndex)
                  ? "player"
                  : tileToCellType[tile.type]
              }
            />
          ))}
        </div>
      ))}
    </div>
  );
};

Maze.defaultProps = {};
Maze.displayName = "Maze";
export default Maze;
