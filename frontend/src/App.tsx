import styled, { ThemeProvider, useTheme } from "styled-components";
import { GlobalStyle } from "./global-style";
import { Container } from "react-bootstrap";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import {HomeScreen} from "./screens/HomeScreen";
export const App = () => {
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
      {/*<GlobalStyle />*/}
      <>
        <Header />
        <PageContent>
          <Container>
            <HomeScreen/>
          </Container>
        </PageContent>
        <Footer />
      </>
    </ThemeProvider>
  );
};

const PageContent = styled.main`
  min-height: 80vh;
  padding: 3rem 0;
`;
