import {ThemeProvider, useTheme} from "styled-components";
import {GlobalStyle} from "./global-style";

const App = () => {
  // const [theme, setTheme] = useState(LightTheme);
  return (
    <ThemeProvider
    theme={{
      ...useTheme(),
    // setTheme: () => {
    //   setTheme((s) => (s.id === "light" ? DarkTheme : LightTheme));
    // },
    }}
    >
      <GlobalStyle />
      <div>App</div>
    </ThemeProvider>
  );
};

export default App;
