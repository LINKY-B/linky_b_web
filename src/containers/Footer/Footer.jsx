import { useNavigate, useLocation } from "react-router-dom";

import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterText,
  FooterImg,
  HomeIcon,
  MatchIcon,
  ProfileIcon,
  ChatIcon,
} from "./Footer.style";

/**
 * Footer component
 *
 * @returns 스타일 적용된 컴포넌트 반환
 */
const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname === "/");
  return (
    <Box>
      <Container>
        <Row>
          <Column
            onClick={() => navigate("/")}
            current={location.pathname === "/"}
          >
            <FooterImg>
              <HomeIcon></HomeIcon>
            </FooterImg>
            <FooterText>
              <p>홈</p>
            </FooterText>
          </Column>
          <Column
            onClick={() => navigate("/match")}
            current={location.pathname === "/match"}
            match
          >
            <FooterImg>
              <MatchIcon></MatchIcon>
            </FooterImg>

            <FooterText>
              <p>연결</p>
            </FooterText>
          </Column>
          <Column
            onClick={() => navigate("/chat")}
            current={location.pathname === "/chat"}
            chat
          >
            <FooterImg>
              <ChatIcon className="ChatSvg"></ChatIcon>
            </FooterImg>

            <FooterText>
              <p>채팅</p>
            </FooterText>
          </Column>
          <Column
            onClick={() => navigate("/profile")}
            current={location.pathname === "/profile"}
          >
            <FooterImg>
              <ProfileIcon></ProfileIcon>
            </FooterImg>

            <FooterText>
              <p>프로필</p>
            </FooterText>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
