import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import { theme } from "./styles/theme";
import { useEffect } from "react";
import Test from "Test";

const Wrapper = styled.div`
  background-color: white;
  border: none;
  height: calc(var(--vh, 1vh) * 100);
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

const App = () => {
  const setScreenSize = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  useEffect(() => {
    setScreenSize();
    window.addEventListener("resize", setScreenSize);

    return () => {
      window.removeEventListener("resize", setScreenSize);
    };
  }, []);

  return (
    <Wrapper className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Test />
      </ThemeProvider>
    </Wrapper>
  );
};

export default App;
