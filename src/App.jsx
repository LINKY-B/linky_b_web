import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import { theme } from "./styles/theme";

import styled, { css } from "styled-components";

import SubHeader from "./containers/SubHeader";
import MainHeader from "containers/MainHeader";

import { useEffect } from "react";

const StyledDiv = styled.div`
  backgroind-color: white;
`;
const Wrapper = styled.div`
  background-color: white;
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
  });

  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {<MainHeader isFilter={false}></MainHeader>}
        {/* { <SubHeader isText={true}  text={"SubHeader Text"}></SubHeader> } */}
      </ThemeProvider>
    </Wrapper>
  );
};

export default App;
