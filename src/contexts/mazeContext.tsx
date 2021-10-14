import React from "react";
import { createContext, useEffect, useState, useContext } from "react";
import MazeModel, { Tile } from "../models/MazeModel";
import maze1 from "../resources/mazes/maze1";

type MazeContextProps = {};

const MazeContext = createContext<
  | {
      maze: MazeModel;
    }
  | undefined
>(undefined);

const useMaze = () => {
  const context = useContext(MazeContext);
  if (context === undefined) {
    throw new Error("useMaze must be used within a MazeContextProvider");
  }
  return context;
};

const parseMaze = (maze: string[][]): MazeModel => {
  const tiles: Tile[][] = maze.map((row, rowIndex) =>
    row.map((cell, colIndex) => {
      if (cell === "X") return { type: "wall", col: colIndex, row: rowIndex };
      if (cell === "S") return { type: "start", col: colIndex, row: rowIndex };
      if (cell === "F") return { type: "finish", col: colIndex, row: rowIndex };
      return { type: "empty", col: colIndex, row: rowIndex };
    })
  );

  const start = tiles
    .flatMap((rows) => rows)
    .find((tile) => tile.type === "start");
  const finish = tiles
    .flatMap((rows) => rows)
    .find((tile) => tile.type === "finish");

  if (!start || !finish) {
    throw Error("invalid maze, no start or finish found");
  }
  return {
    columns: tiles[0].length,
    rows: tiles.length,
    start,
    finish,
    tiles: tiles,
  };
};

export const MazeContextProvider: React.FC<MazeContextProps> = ({
  children,
}) => {
  const [maze, setMaze] = useState<MazeModel>(parseMaze(maze1));

  /* Custom hook public interface */
  return (
    <MazeContext.Provider
      value={{
        maze,
      }}
    >
      {children}
    </MazeContext.Provider>
  );
};

export default useMaze;
