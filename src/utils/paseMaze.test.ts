import maze1 from "../resources/mazes/maze1";
import parseMaze from "./parseMaze";

describe("parse", () => {
  it("should parse maze correctly", () => {
    const maze = parseMaze(maze1);
    expect(maze).toBeDefined();
  });

  test(`should throw an as no finish indicated`, () => {
    expect(() => {
      const maze = parseMaze([
        ["X", "S", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
        ["X", " ", "X", " ", " ", " ", "X", " ", " ", " ", " ", "X"],
        ["X", " ", " ", " ", "X", " ", "X", " ", "X", " ", "X", "X"],
        ["X", "X", "X", "X", "X", " ", " ", " ", "X", " ", " ", "X"],
        ["X", " ", " ", " ", " ", " ", "X", "X", "X", "X", " ", "X"],
        ["X", " ", "X", "X", "X", "X", "X", " ", " ", " ", " ", "X"],
        ["X", " ", " ", " ", " ", " ", "X", " ", "X", "X", "X", "X"],
        ["X", "X", "X", " ", "X", " ", "X", " ", " ", " ", " ", "X"],
        ["X", " ", " ", " ", "X", " ", "X", "X", "X", "X", "X", "X"],
        ["X", "X", " ", "X", "X", " ", "X", " ", " ", " ", "X", "X"],
        ["X", " ", " ", " ", "X", " ", " ", " ", "X", " ", " ", " "],
        ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
      ]);
    }).toThrow(`invalid maze, no start or finish found`);
  });

  test(`should throw an as no start indicated`, () => {
    expect(() => {
      const maze = parseMaze([
        ["X", " ", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
        ["X", " ", "X", " ", " ", " ", "X", " ", " ", " ", " ", "X"],
        ["X", " ", " ", " ", "X", " ", "X", " ", "X", " ", "X", "X"],
        ["X", "X", "X", "X", "X", " ", " ", " ", "X", " ", " ", "X"],
        ["X", " ", " ", " ", " ", " ", "X", "X", "X", "X", " ", "X"],
        ["X", " ", "X", "X", "X", "X", "X", " ", " ", " ", " ", "X"],
        ["X", " ", " ", " ", " ", " ", "X", " ", "X", "X", "X", "X"],
        ["X", "X", "X", " ", "X", " ", "X", " ", " ", " ", " ", "X"],
        ["X", " ", " ", " ", "X", " ", "X", "X", "X", "X", "X", "X"],
        ["X", "X", " ", "X", "X", " ", "X", " ", " ", " ", "X", "X"],
        ["X", " ", " ", " ", "X", " ", " ", " ", "X", " ", " ", "F"],
        ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
      ]);
    }).toThrow(`invalid maze, no start or finish found`);
  });
});
