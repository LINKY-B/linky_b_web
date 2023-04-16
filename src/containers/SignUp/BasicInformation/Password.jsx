import Input from "components/inputs/Input";
import Spacing from "components/spacing/Spacing";
import Text from "components/text/Text";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserInfo } from "store/ducks/signUpSlice";
import { ContentBox, ErrorMessage } from "../SignUp.style";
import { isValidPassword, isValidPasswordCheck } from "../validator";

const Password = () => {
  const dispatch = useDispatch("signUp");
  const [password, setPassword] = useState("");
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [showPasswordCheckError, setShowPasswordCheckError] = useState(false);

  const handlerPasswordBlur = (e) => {
    setPassword(e.target.value);
    isValidPassword(e.target.value)
      ? setShowPasswordError(false)
      : setShowPasswordError(true);
  };

  const handlerPasswordCheckBlur = (e) => {
    if (!isValidPasswordCheck(password, e.target.value)) {
      setShowPasswordCheckError(true);
      return;
    }

    setShowPasswordCheckError(false);
    if (isValidPassword(password) && isValidPassword(e.target.value)) {
      dispatch(addUserInfo({ key: "userPassword", value: password }));
    }
  };
  return (
    <>
      <ContentBox className="userPassword">
        <Text>비밀번호</Text>
        <Spacing />
        <Input
          type="password"
          onBlur={handlerPasswordBlur}
          placeholder="영문, 숫자, 특수문자를 포함하여 7자 이상 입력해 주세요."
        ></Input>
        {showPasswordError ? (
          <ErrorMessage>유효하지 않는 비밀번호 형식입니다.</ErrorMessage>
        ) : null}
      </ContentBox>

      <ContentBox>
        <Text>비밀번호 확인</Text>
        <Spacing />
        <Input
          type="password"
          onBlur={handlerPasswordCheckBlur}
          placeholder="비밀번호를 다시 한번 입력해 주세요."
        ></Input>
        {showPasswordCheckError ? (
          <ErrorMessage>"비밀번호가 일치하지 않습니다"</ErrorMessage>
        ) : null}
      </ContentBox>
    </>
  );
};

export default Password;
