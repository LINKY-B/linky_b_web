import Input from "components/inputs/Input";
import Spacing from "components/spacing/Spacing";
import Text from "components/text/Text";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserInfo } from "store/ducks/signUpSlice";
import { ContentBox, ErrorMessage } from "../SignUp.style";
import { isValidStudentNumber } from "../validator";

const StudentNumber = () => {
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch("signUp");

  const blurHandler = (e) => {
    if (isValidStudentNumber(e.target.value)) {
      dispatch(addUserInfo({ key: "userStudentNum", value: e.target.value }));
      setShowError(false);
      return;
    }

    setShowError(true);
  };
  return (
    <ContentBox className="userStudentNum">
      <Text>학번</Text>
      <Spacing />
      <Input
        onBlur={blurHandler}
        placeholder="학번을 입력해 주세요.(ex> 21)"
      ></Input>
      {showError ? (
        <ErrorMessage>올바르지 않은 학번 형식 입니다</ErrorMessage>
      ) : null}
    </ContentBox>
  );
};

export default StudentNumber;
