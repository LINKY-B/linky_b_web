import Spacing from "components/spacing/Spacing";
import Text from "components/text/Text";
import { theme } from "styles/theme";
import ImageBox from "./Imagebox";

const Graduate = () => {
  return (
    <>
      <Spacing />
      <Text fontSize={theme.fontSize.xs}>
        합격 통지서, 재학 중인 학교의 학생증 등의 사진을 캡처 후,업로드
        해주세요. 도용 또는 위조로 의심 시 가입이 반려됩니다.
      </Text>
      <Spacing />
      <ImageBox />
    </>
  );
};

export default Graduate;
