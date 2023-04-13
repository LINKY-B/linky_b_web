import Spacing from "components/spacing/Spacing";
import Text from "components/text/Text";
import { useDispatch, useSelector } from "react-redux";
import { addUserInfo } from "store/ducks/signUpSlice";
import InputButtonBox from "../InputButtonBox";
import { ContentBox } from "../SignUp.style";
import { isValidEmail } from "../validator";
import { useMutateAuthEmail, useMutateSendEmail } from "utils/hooks/useSignUp";
import { useState } from "react";

const Email = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch("signUp");
  const userNickName = useSelector(
    (state) => state.signUp.UserSignupReq.userNickName,
  );
  const sendEamilMutation = useMutateSendEmail();
  const authEmailMutation = useMutateAuthEmail();

  const handleSendCodeClick = async (email) => {
    setEmail(email);
    if (isValidEmail(email)) {
      sendEamilMutation.mutate({ email, userNickName });
      alert("인증코드 이메일을 전송하였습니다.");
      return;
    }

    alert("올바르지 않은 이메일 형식입니다.");
  };

  const handleCheckCodeClick = async (authCode) => {
    // try - catch를 이용해 수동으로 오류 감지
    try {
      const res = await authEmailMutation.mutateAsync({
        authCode,
        email,
        userNickName,
      });
      alert(res.data.message);
      dispatch(addUserInfo({ key: "userEmail", value: email }));
      dispatch(addUserInfo({ key: "authCode", value: authCode }));
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <ContentBox className="user-email">
      <InputButtonBox
        title="userEmail"
        placeholder="이메일을 입력해 주세요."
        buttonText="인증번호 받기"
        handleClick={handleSendCodeClick}
      >
        <Text>이메일</Text>
        <Spacing />
      </InputButtonBox>
      <InputButtonBox
        title="verificationCode"
        buttonText="인증번호 확인"
        handleClick={handleCheckCodeClick}
      ></InputButtonBox>
    </ContentBox>
  );
};

export default Email;
