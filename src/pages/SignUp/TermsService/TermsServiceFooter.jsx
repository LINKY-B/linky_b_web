import Button from "components/buttons/Button";
import Spacing from "components/spacing/Spacing";
import Text from "components/text/Text";
import { SIGNUP_TERMSSERVICE } from "constants/constants";
import { useSelector } from "react-redux";
import { theme } from "styles/theme";
import ButtonBox from "./ButtonBox";
import { TermsServiceFooterStyled } from "../SignUp.style";

const TermsServiceFooter = () => {
  const onClick = () => {
    // 다음 화면으로 넘어가는 기능
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
      <Button color={buttonColor} onClick={onClick}>
        {SIGNUP_TERMSSERVICE.CONTINUE_SIGNUP}
      </Button>
    </TermsServiceFooterStyled>
  );
};

export default TermsServiceFooter;
