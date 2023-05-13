import Button from "components/buttons/Button";
import MainLogo from "components/mainLogo/MainLogo";
import Spacing from "components/spacing/Spacing";
import { useNavigate } from "react-router-dom";
import {
  ButtonWrapper,
  MainLogoWrapper,
  OnBoardingWrapper,
} from "./OnBoarding.style";
const OnBoarding = () => {
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
