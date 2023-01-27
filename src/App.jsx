import { useEffect } from "react";
import { Route, Routes } from "react-router";

import styled from "styled-components";

import { Match } from "pages/Match";
import { MatchDetail } from "pages/MatchDetail";
import MainHeader from "containers/MainHeader/MainHeader";

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

      {/* <MainHeader /> */}
      <Routes>
        <Route exact path="/" element={<div>It's Home</div>} />
        <Route path="/match" element={<Match />} />
        <Route path="/match/:userId" element={<MatchDetail />} />
      </Routes>
    </Wrapper>
  );
};

export default App;
