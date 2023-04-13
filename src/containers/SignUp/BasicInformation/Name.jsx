import Input from "components/inputs/Input";
import Spacing from "components/spacing/Spacing";
import Text from "components/text/Text";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserInfo } from "store/ducks/signUpSlice";
import { ContentBox, ErrorMessage } from "../SignUp.style";
import { isValidName } from "../validator";

const Name = () => {
  const dispatch = useDispatch("signUp");
  const [showError, setShowError] = useState(false);

  const blurHandler = (e) => {
    if (isValidName(e.target.value)) {
      setShowError(false);
      dispatch(addUserInfo({ key: "userName", value: e.target.value }));
      return;
    }

    setShowError(true);
  };
  return (
    <ContentBox className="user-name">
      <Text>이름</Text>
      <Spacing />
      <Input
        name="userName"
        onBlur={blurHandler}
        placeholder="본인 이름을 입력해주세요"
      ></Input>
      {showError ? (
        <ErrorMessage>올바르지 않은 이름 형식 입니다</ErrorMessage>
      ) : null}
    </ContentBox>
  );
};

export default Name;
