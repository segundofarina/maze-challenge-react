export type TileType = "wall" | "empty" | "start" | "finish";
export type Tile = {
  row: number;
  col: number;
  type: TileType;
};
export default interface MazeModel {
  tiles: Tile[][];
  columns: number;
  rows: number;
  start: Tile;
  finish: Tile;
}
