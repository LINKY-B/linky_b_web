import {
  OnBoardingWrapper,
  ButtonWrapper,
  MainLogoWrapper,
  MainLogoImg,
} from "./OnBoarding.style";
import Button from "components/buttons/Button";
import Spacing from "components/spacing/Spacing";
import Text from "components/text/Text";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";

const OnBoarding = () => {
  const loginClick = () => {};
  const signupClick = () => {};
  
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <OnBoardingWrapper>
      <MainLogoWrapper>
        <MainLogoImg></MainLogoImg>
        <Spacing margin={theme.spacing.lg}></Spacing>
        <Text fontSize={theme.fontSize.lg}>마음맞는 선후배 매칭 서비스</Text>
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
