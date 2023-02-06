import { useNavigate } from "react-router-dom";
import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterText,
  FooterImg,
} from "./Footer.style";

//img
import { ReactComponent as Home } from "assets/images/Home.svg";
import { ReactComponent as Link } from "assets/images/Link.svg";
import { ReactComponent as Profile } from "assets/images/Profile.svg";
import { ReactComponent as Chat } from "assets/images/Chat.svg";

/**
 * Footer component
 *
 * @returns 스타일 적용된 컴포넌트 반환
 */
const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Container>
        <Row>
          <Column onClick={() => navigate("/")}>
            <FooterImg>
              <Home className="HomeIcon"></Home>
            </FooterImg>
            <FooterText>
              <p>홈</p>
            </FooterText>
          </Column>
          <Column onClick={() => navigate("/match")} match>
            <FooterImg>
              <Link></Link>
            </FooterImg>

            <FooterText>
              <p>연결</p>
            </FooterText>
          </Column>
          <Column onClick={() => navigate("/chat")} chat>
            <FooterImg>
              <Chat className="ChatSvg"></Chat>
            </FooterImg>

            <FooterText>
              <p>채팅</p>
            </FooterText>
          </Column>
          <Column onClick={() => navigate("/profile")}>
            <FooterImg>
              <Profile></Profile>
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
