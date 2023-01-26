import { SelectButtonStyled } from "components/buttons/Buttons.style";
import styled from "styled-components";

export const StyledMatchDetail = styled.section`
  background-color: ${(props) => props.theme.colors.mainWhite};
`;

export const ProfileImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: 74px;
  height: 74px;
`;

export const IntroductionWrapper = styled.div`
  border: 1px solid ${(props) => props.theme.colors.fontGrey};
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.mainWhite};
  color: ${(props) => props.theme.colors.mainBlack};

  transform: translate(0, -30%);
  height: calc(var(--vh, 1vh) * 15);
  width: 80%;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 2rem;
`;

export const SubHeader = styled.div`
  height: 55px;
  // position: fixed;
  display: flex;
  border: 1px solid green;
  width: 100%;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledHeader = styled.section`
  position: relative;
  height: 186px;
  background-color: ${(props) => props.theme.colors.mainLightGreen};
  box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid red;
`;

export const InfoItemContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin: 0.3rem 0;
  gap: 0.3rem;
  // border: 1px solid blue;
`;

export const InfoWrapper = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // border: 1px solid purple;
`;

export const BlackSelectButton = styled(SelectButtonStyled)`
  color: ${(props) => props.theme.colors.mainBlack};
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  // border: 1px solid pink;
`;

export const FooterContainer = styled.div`
  display: flex;
  // width: 90%;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-around;
  align-items: center;
  // border: 1px solid blue;
`;
