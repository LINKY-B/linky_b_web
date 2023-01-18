import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import { theme } from "./styles/theme";
import MainHeader from "containers/MainHeader";
import styled, { css } from "styled-components";

const StyledDiv = styled.div`
  backgroind-color: white;
`;
const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainHeader></MainHeader>
      </ThemeProvider>
    </div>
  );
};

export default App;
