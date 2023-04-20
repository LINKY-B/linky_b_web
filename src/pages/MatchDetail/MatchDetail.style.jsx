import { ButtonStyled, SelectButtonStyled } from "components/buttons/Buttons.style";
import { StickyFooterContainer } from "containers/StickyFooter/StickyFooter.style";
import styled from "styled-components";

export const StyledMatchDetail = styled.article`
  // height: calc(var(--vh, 1vh) * 150);
  // border: 1px solid red;
`;

// 서브 헤더와 프로필 이미지를 포함하는 컨테이너
export const StyledHeader = styled.section`
  position: relative;
  height: 186px;
  background-color: ${(props) => props.theme.colors.mainLightGrey};
  box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.25);
  // border: 1px solid red;
`;

// 동그란 프로필 이미지
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

// 소개글 컨테이너
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
  padding: 0 1rem;
`;

export const InfoItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  margin: 0.3rem 0;
  gap: 0.3rem;
  // border: 1px solid blue;
`;

export const InfoWrapper = styled.div`
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // border: 1px solid purple;
`;

export const BlackSelectButton = styled(SelectButtonStyled)`
  color: ${(props) => props.theme.colors.mainBlack};
  font-size: ${(props) => props.theme.fontSize.xs};
`;

export const FullWidthButton = styled(ButtonStyled)`
display: block;
width: 90%;
padding: 1rem 0;
margin-bottom: 1rem;
background-color: ${props => props.theme.colors.mainGreen};
color: ${props => props.theme.colors.mainWhite};
`

export const FooterContainer = styled(StickyFooterContainer)`
  height: 100%;
  display: flex;
  padding: 0 1rem;
  width: fit-content;
  // width: 100%;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-around;
  align-items: center;

  // border: 1px solid red;
`;
