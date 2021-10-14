import MazeModel, { Tile } from "../models/MazeModel";

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

export default parseMaze;
