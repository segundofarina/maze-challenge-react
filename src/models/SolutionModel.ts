export default interface SolutionModel {
  steps: {
    x: number;
    y: number;
  }[];
  moves: number;
  solved: boolean;
}
