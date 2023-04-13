import Button from "components/buttons/Button";
import Spacing from "components/spacing/Spacing";
import Text from "components/text/Text";
import { SIGNUP_TERMSSERVICE } from "constants/constants";
import { useSelector } from "react-redux";
import { theme } from "styles/theme";
import ButtonBox from "./ButtonBox";
import { TermsServiceFooterStyled } from "../SignUp.style";

const TermsServiceFooter = ({ nextPage }) => {
  const onClick = () => {
    // 모두 체크 되었는지 확인
    if (checkTerms[0]) {
      nextPage();
      return;
    }

    alert("모든 이용 약관에 동의해 주세요");
  };

  const checkTerms = useSelector((state) => state.termsService);
  const buttonColor = checkTerms[0] ? "green" : "grey";

  return (
    <TermsServiceFooterStyled>
      <ButtonBox idx={0}>
        <Spacing />
        <Text fontSize={theme.fontSize.sm}>
          {SIGNUP_TERMSSERVICE.ALL_AGREE}
        </Text>
      </ButtonBox>
      <Button color={buttonColor} shadow onClick={onClick}>
        {SIGNUP_TERMSSERVICE.CONTINUE_SIGNUP}
      </Button>
    </TermsServiceFooterStyled>
  );
};

export default TermsServiceFooter;
