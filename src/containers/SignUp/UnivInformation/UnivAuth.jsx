import SelectOption from "components/inputs/SelectOption";
import Spacing from "components/spacing/Spacing";
import Text from "components/text/Text";
import { useDispatch } from "react-redux";
import { addUserInfo } from "store/ducks/signUpSlice";
import { theme } from "styles/theme";
import { ContentBox } from "../SignUp.style";
import ImageBox from "./Imagebox";

const UnivAuth = ({ getImage }) => {
  const statusList = ["재학", "졸업"];

  const dispatch = useDispatch("signUp");
  const selectOptionHandler = (e) => {
    const status = e.target.value === "재학" ? true : false;
    dispatch(addUserInfo({ key: "gradeStatus", value: status }));
  };
  return (
    <>
      <Spacing />

      <ContentBox className="Graduate">
        <Text>졸업 유무</Text>
        <Spacing />
        <SelectOption
          name="gradeStatus"
          defaultValue="졸업 유무를 선택해 주세요."
          options={statusList}
          onChange={selectOptionHandler}
        ></SelectOption>
      </ContentBox>

      <Spacing />

      <ContentBox className="UnivAuth">
        <Text>학교 인증</Text>
        <Spacing />
        <Text fontSize={theme.fontSize.xs}>
          합격 통지서, 재학 중인 학교의 학생증 등의 사진을 캡처 후,업로드
          해주세요. 도용 또는 위조로 의심 시 가입이 반려됩니다.
        </Text>
        <Spacing />
        <ImageBox getImage={getImage} />
      </ContentBox>
    </>
  );
};

export default UnivAuth;
