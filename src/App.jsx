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

import OnBoarding from "pages/OnBoarding/OnBoarding";
import Home from "pages/Home/Home";
import Login from "pages/Login/Login";
import FindPwd from "pages/FindPwd/FindPwd";
import RequireAuthRoute from "utils/Route/RequireAuthRoute";
import PublicRoute from "utils/Route/PublicRoute";
import SignUp from "pages/SignUp/SignUp";
import { HomeSearch } from "pages/HomeSearch/index";

const Wrapper = styled.div`
  background-color: white;
  border: none;
  min-height: calc(var(--vh, 1vh) * 100);
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
      <Routes>
        {/* public route */}
        <Route element={<PublicRoute />}>
          <Route path="/onboarding" element={<OnBoarding />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/findpwd" element={<FindPwd></FindPwd>}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
        </Route>
        {/* private route */}
        <Route element={<RequireAuthRoute />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/home/search" element={<HomeSearch />} />
          <Route
            path="/home/user/:userId"
            element={<MatchDetail forHomePage />}
          />
          <Route path="/match" element={<Match />} />
          <Route path="/match/matched" element={<MatchedListPage />} />
          <Route path="/match/matching" element={<MatchingListPage />} />
          <Route path="/match/matched/:userId" element={<MatchDetail />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/chat/search" element={<ChatListSearch />} />
          <Route path="/chat/:roomId" element={<ChatDetail />} />
          <Route path="/profile/:userid" element={<div>profile</div>}></Route>
        </Route>
        <Route path="*" element={<div>not found</div>}></Route>
      </Routes>
    </Wrapper>
  );
};

export default App;
