import React, { useEffect } from "react";
import classNames from "classnames";
import { createUseStyles } from "react-jss";
// import styles from "./styles";
import Maze from "../../components/Maze";
import useMaze from "../../contexts/mazeContext";
import usePlayer from "../../contexts/playerContext";
import useMazeSolver from "../../hooks/useMazeSolver";
import { finished } from "stream";

type MainScreenProps = {};

// const useStyles = createUseStyles(styles);

const updateTimeInMs = 500;

const MainScreen: React.FC<MainScreenProps> = (props) => {
  //   const classes = useStyles(props);
  const { maze } = useMaze();
  const { player, movePlayer } = usePlayer();
  const { getNextStep, resetSteps, status, isLastStep, finishedWalking } =
    useMazeSolver(maze);

  useEffect(() => {
    if (status === "solved" && !finishedWalking) {
      const interval = setInterval(() => {
        movePlayer(getNextStep());
      }, updateTimeInMs);
      return () => clearInterval(interval);
    }
  }, [status, movePlayer, getNextStep, finishedWalking]);

  return (
    <div>
      <div>Moves: {player.moves}</div>
      <div>
        <Maze maze={maze} player={player}></Maze>
      </div>
    </div>
  );
};

MainScreen.defaultProps = {};
MainScreen.displayName = "MainScreen";
export default MainScreen;
