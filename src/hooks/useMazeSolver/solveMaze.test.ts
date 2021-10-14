import MazeModel from "../../models/MazeModel";
import maze1 from "../../resources/mazes/maze1";
import parseMaze from "../../utils/parseMaze";
import { lookup } from "./solveMaze";

describe("test solutions", () => {
  it("should not find a solution", () => {
    const maze: MazeModel = {
      columns: 2,
      rows: 2,
      tiles: [
        [
          { row: 0, col: 0, type: "start" },
          { row: 0, col: 1, type: "wall" },
        ],
        [
          { row: 1, col: 0, type: "wall" },
          { row: 1, col: 1, type: "finish" },
        ],
      ],
      finish: { row: 1, col: 1, type: "finish" },
      start: { row: 0, col: 0, type: "start" },
    };

    const visited = maze.tiles.map((row) =>
      row.map((tile) => tile.type === "wall")
    );
    const solution = lookup(maze, visited, maze.start);
    expect(solution).toBeUndefined();
  });

  it("should  find a solution", () => {
    const maze: MazeModel = {
      columns: 2,
      rows: 2,
      tiles: [
        [
          { row: 0, col: 0, type: "start" },
          { row: 0, col: 1, type: "empty" },
        ],
        [
          { row: 1, col: 0, type: "empty" },
          { row: 1, col: 1, type: "finish" },
        ],
      ],
      finish: { row: 1, col: 1, type: "finish" },
      start: { row: 0, col: 0, type: "start" },
    };

    const visited = maze.tiles.map((row) =>
      row.map((tile) => tile.type === "wall")
    );
    const solution = lookup(maze, visited, maze.start);
    expect(solution).toBeDefined();

    expect(solution?.length).toBe(3);
  });

  it("should find a solution", () => {
    const maze = parseMaze(maze1);
    const visited = maze.tiles.map((row) =>
      row.map((tile) => tile.type === "wall")
    );
    const solution = lookup(maze, visited, maze.start);
    expect(solution).toBeDefined();

    expect(solution?.length).toBe(33);
  });
});
