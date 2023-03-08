import { useEffect } from "react";
import { Route, Routes } from "react-router";

import styled from "styled-components";

import Footer from "containers/Footer/Footer";
import MainHeader from "containers/MainHeader/MainHeader";
import { Match } from "pages/Match";
import { MatchDetail } from "pages/MatchDetail";
import {
  MatchedListPage,
  MatchingListPage,
} from "pages/MatchListPage/MatchListPage";
import { Chat } from "pages/Chat";
import { ChatDetail } from "pages/ChatDetail";
import { ChatListSearch } from "pages/ChatListSearch";

const Wrapper = styled.div`
  background-color: white;
  border: none;
  height: calc(var(--vh, 1vh) * 100);
  max-width: var(--app-max-width, 768px);
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

const App = () => {
  const setScreenSize = () => {
    // vh 관련
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // window width 관련
    const windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    const maxWidth = Math.min(768, windowWidth);
    document.documentElement.style.setProperty(
      "--app-max-width",
      `${maxWidth}px`,
    );
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
      <MainHeader />
      <Routes>
        <Route exact path="/" element={<div>It's Home</div>} />
        <Route path="/match" element={<Match />} />
        <Route path="/match/matched" element={<MatchedListPage />} />
        <Route path="/match/matching" element={<MatchingListPage />} />
        <Route path="/match/matched/:userId" element={<MatchDetail />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/chat/search" element={<ChatListSearch />} />
        <Route path="/chat/:roomId" element={<ChatDetail />} />
      </Routes>
      <Footer></Footer>
    </Wrapper>
  );
};

export default App;
