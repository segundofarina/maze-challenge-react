import { ThemeProvider } from "react-jss";
import { MazeContextProvider } from "./contexts/mazeContext";
import { PlayerContextProvider } from "./contexts/playerContext";
import MainScreen from "./routes/MainScreen";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MazeContextProvider>
        <PlayerContextProvider>
          <MainScreen />
        </PlayerContextProvider>
      </MazeContextProvider>
    </ThemeProvider>
  );
};

export default App;
