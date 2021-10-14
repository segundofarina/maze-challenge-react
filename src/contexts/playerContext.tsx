import React from "react";
import { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";
import PlayerModel from "../models/PlayerModel";
import { sendMovements } from "../requests/report";
import useMaze from "./mazeContext";

type PlayerContextProps = {};
type QueryStatus = "idle" | "success" | "loading" | "error";

const PlayerContext = createContext<
  | {
      player: PlayerModel;
      movePlayer: (position: PlayerModel["position"]) => void;
      restartMoves: () => void;
      sendTotalMoves: () => void;
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

  const restartMoves = () => {
    setPlayer({
      position: maze.start,
      moves: 0,
    });
  };

  const sendTotalMoves = async () => {
    try {
      await sendMovements(player.moves);
      toast.success("Moves sent");
    } catch {
      toast.error("There was an error sending moves");
    }
  };

  /* Custom hook public interface */
  return (
    <PlayerContext.Provider
      value={{
        player,
        movePlayer,
        restartMoves,
        sendTotalMoves,
        status,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default usePlayer;
