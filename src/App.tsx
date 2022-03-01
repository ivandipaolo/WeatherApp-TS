import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import { RootState } from "./redux/store/store";
import GlobalStyles from './styled/global';
import darkMode from './styled/themes/dark'
import lightMode from './styled/themes/light'

function App() {
  const { themeMode } = useSelector((state: RootState) => state.uiInterface)
  
  return (
    <ThemeProvider theme={themeMode === 'DARK' ? darkMode : lightMode}>
      <GlobalStyles />
        <Home />
    </ThemeProvider>
  );
}
export default App