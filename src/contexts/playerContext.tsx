import React from "react";
import { createContext, useEffect, useState, useContext } from "react";
import MazeModel from "../models/MazeModel";
import PlayerModel from "../models/PlayerModel";
import useMaze from "./mazeContext";

type PlayerContextProps = {};
type QueryStatus = "idle" | "success" | "loading" | "error";

const PlayerContext = createContext<
  | {
      player: PlayerModel;
      movePlayer: (position: PlayerModel["position"]) => void;
      status: QueryStatus;
    }
  | undefined
>(undefined);

const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (context === undefined) {
    throw new Error(" must be used within a PlayerContextProvider");
  }
  return context;
};

export const PlayerContextProvider: React.FC<PlayerContextProps> = ({
  children,
}) => {
  const { maze } = useMaze();

  const [player, setPlayer] = useState<PlayerModel>({
    position: maze.start,
    moves: 0,
  });
  const [status, setStatus] = useState<QueryStatus>("idle");

  const movePlayer = (position: PlayerModel["position"]) => {
    if (
      position.row === player.position.row &&
      position.col === player.position.col
    )
      return;
    setPlayer((prev) => ({
      moves: prev.moves + 1,
      position,
    }));
  };

  /* Custom hook public interface */
  return (
    <PlayerContext.Provider
      value={{
        player,
        movePlayer,
        status,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default usePlayer;
