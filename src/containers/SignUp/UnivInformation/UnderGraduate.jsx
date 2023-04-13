import Spacing from "components/spacing/Spacing";
import Text from "components/text/Text";
import { theme } from "styles/theme";
import InputButtonBox from "../InputButtonBox";

const UnderGraduate = () => {
  return (
    <>
      <Text
        color={theme.colors.mainGreen}
        fontSize={theme.fontSize.xs}
        fontWeight={600}
      >
        재학생
      </Text>
      <InputButtonBox
        title="userEmail"
        placeholder="학교 이메일을 입력해주세요."
        buttonText="인증번호 받기"
      >
        <Spacing />
      </InputButtonBox>
      <InputButtonBox
        title="VerificationCode"
        buttonText="인증번호 확인"
      ></InputButtonBox>
    </>
  );
};

export default UnderGraduate;
