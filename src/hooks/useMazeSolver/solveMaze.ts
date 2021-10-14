import MazeModel from "../../models/MazeModel";
import { Position } from "../../Types/position";

const solveMaze = async (maze: MazeModel): Promise<Position[]> => {
  const visited = maze.tiles.map((row) =>
    row.map((tile) => tile.type === "wall")
  );

  const solution = lookup(maze, visited, maze.start);
  if (!solution) {
    return Promise.reject();
  }

  return solution;
};

const lookup = (
  maze: MazeModel,
  visited: boolean[][],
  currentPos: Position
): undefined | Position[] => {
  const { row, col } = currentPos;
  if (col >= maze.columns || col < 0) return undefined;
  if (row >= maze.rows || row < 0) return undefined;
  if (visited[row][col]) return undefined;
  const currentTile = maze.tiles[row][col];

  if (currentTile.type === "wall") return undefined;
  if (currentTile.type === "finish") return [currentPos];

  const newVisited = visited.map((_row, rowIndex) =>
    _row.map((value, colIndex) =>
      rowIndex === row && colIndex === col ? true : value
    )
  );

  // look up
  const upStep = { row, col: col - 1 };
  const upPath = lookup(maze, newVisited, upStep);
  if (upPath) return [currentPos, ...upPath];

  // look down
  const downStep = { row, col: col + 1 };
  const downPath = lookup(maze, newVisited, downStep);
  if (downPath) return [currentPos, ...downPath];

  // look right
  const rightStep = { row: row + 1, col };
  const rightPath = lookup(maze, newVisited, rightStep);
  if (rightPath) return [currentPos, ...rightPath];

  // look left
  const leftStep = { row: row - 1, col };
  const leftPath = lookup(maze, newVisited, leftStep);
  if (leftPath) return [currentPos, ...leftPath];
};

export default solveMaze;
