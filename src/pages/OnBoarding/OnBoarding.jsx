import {
  OnBoardingWrapper,
  ButtonWrapper,
  MainLogoWrapper,
} from "./OnBoarding.style";
import Button from "components/buttons/Button";
import Spacing from "components/spacing/Spacing";
import Text from "components/text/Text";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";
import MainLogo from "components/mainLogo/MainLogo";
const OnBoarding = () => {
  const loginClick = () => {};
  const signupClick = () => {};

  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <OnBoardingWrapper>
      <MainLogoWrapper>
        <MainLogo top={50}></MainLogo>
      </MainLogoWrapper>
      <ButtonWrapper>
        <Button onClick={() => navigate("/login")}>로그인하기</Button>
        <Spacing></Spacing>
        <Button color="lightGrey" onClick={() => navigate("/signUp")}>
          회원가입하기
        </Button>
      </ButtonWrapper>
    </OnBoardingWrapper>
  );
};

export default OnBoarding;
