import Input from "components/inputs/Input";
import Spacing from "components/spacing/Spacing";
import Text from "components/text/Text";
import { useDispatch } from "react-redux";
import { addUserInfo } from "store/ducks/signUpSlice";
import { ContentBox } from "../SignUp.style";

const Major = () => {
  const dispatch = useDispatch("signUp");
  const blurHandler = (e) => {
    dispatch(addUserInfo({ key: "userMajorName", value: e.target.value }));
  };
  return (
    <ContentBox className="userMajorName">
      <Text>학과</Text>
      <Spacing />
      <Input
        onBlur={blurHandler}
        placeholder="소속 학과를 입력해 주세요."
      ></Input>
    </ContentBox>
  );
};

export default Major;
