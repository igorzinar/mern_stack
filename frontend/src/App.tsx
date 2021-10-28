import styled, { ThemeProvider, useTheme } from "styled-components";
import { GlobalStyle } from "./global-style";
import { Container } from "react-bootstrap";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomeScreen } from "./screens/HomeScreen";
import { ProductScreen } from "./screens/ProductScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";

export const App = () => {
  // const [theme, setTheme] = useState(LightTheme);
  return (
    <Router>
      <ThemeProvider
        theme={{
          ...useTheme(),
          // setTheme: () => {
          //   setTheme((s) => (s.id === "light" ? DarkTheme : LightTheme));
          // },
        }}
      >
        {/*<GlobalStyle />*/}

        <Header />
        <PageContent>
          <Container>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/product/:id" component={ProductScreen} />
          </Container>
        </PageContent>
        <Footer />
      </ThemeProvider>
    </Router>
  );
};

const PageContent = styled.main`
  min-height: 80vh;
  padding: 3rem 0;
`;
