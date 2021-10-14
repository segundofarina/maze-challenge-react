import React from "react";
import { createContext, useState, useContext } from "react";
import MazeModel from "../models/MazeModel";
import maze1 from "../resources/mazes/maze1";
import parseMaze from "../utils/parseMaze";

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
