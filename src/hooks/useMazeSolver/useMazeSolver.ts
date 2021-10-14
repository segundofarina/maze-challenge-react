import { useCallback, useEffect, useState } from "react";
import MazeModel from "../../models/MazeModel";
import { Position } from "../../Types/position";
import solveMaze from "./solveMaze";

type SolverStatus = "idle" | "solving" | "solved" | "error";

const useMazeSolver = (maze: MazeModel) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [status, setStatus] = useState<SolverStatus>("idle");
  const [steps, setSteps] = useState<Position[]>([]);
  const [finishedWalking, setFinishedWalking] = useState(false);
  useEffect(() => {
    const asyncCall = async () => {
      setStatus("solving");
      try {
        const _steps = await solveMaze(maze);
        setSteps(_steps);
        setStatus("solved");
      } catch (e) {
        setStatus("error");
      }
    };
    asyncCall();
  }, [maze]);

  const isLastStep = currentStep === steps.length - 1;

  const getNextStep = useCallback(() => {
    const nextStep = steps[currentStep];
    if (!isLastStep) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setFinishedWalking(true);
    }
    return nextStep;
  }, [steps, isLastStep, currentStep]);

  const resetSteps = () => {
    setCurrentStep(0);
    setFinishedWalking(false);
  };

  return {
    getNextStep,
    resetSteps,
    steps,
    status,
    isLastStep,
    finishedWalking,
  };
};

export default useMazeSolver;
