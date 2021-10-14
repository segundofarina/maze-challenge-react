import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { createUseStyles } from "react-jss";
import styles from "./styles";
import Maze from "../../components/Maze";
import useMaze from "../../contexts/mazeContext";
import usePlayer from "../../contexts/playerContext";
import useMazeSolver from "../../hooks/useMazeSolver";

type MainScreenProps = {};

const useStyles = createUseStyles<
  keyof ReturnType<typeof styles>,
  MainScreenProps,
  Theme
>(styles);

const updateTimeInMs = 500;

const MainScreen: React.FC<MainScreenProps> = (props) => {
  const classes = useStyles();
  const { maze } = useMaze();
  const { player, movePlayer, restartMoves, sendTotalMoves } = usePlayer();
  const { getNextStep, resetSteps, status, finishedWalking } =
    useMazeSolver(maze);

  const [animationIsPlaying, setAnimationPlaying] = useState(false);

  useEffect(() => {
    if (status === "solved" && !finishedWalking && animationIsPlaying) {
      const interval = setInterval(() => {
        movePlayer(getNextStep());
      }, updateTimeInMs);
      return () => clearInterval(interval);
    }
  }, [status, movePlayer, getNextStep, finishedWalking, animationIsPlaying]);

  useEffect(() => {
    if (finishedWalking) {
      sendTotalMoves();
    }
  }, [finishedWalking]);

  return (
    <div className={classes.root}>
      <h1>Maze challenge</h1>
      <div className={classes.buttons}>
        <button
          onClick={() => {
            setAnimationPlaying(true);
          }}
        >
          Start
        </button>
        <button
          onClick={() => {
            setAnimationPlaying(false);
          }}
        >
          Stop
        </button>
        <button
          onClick={() => {
            resetSteps();
            restartMoves();
          }}
        >
          Restart
        </button>
      </div>
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
