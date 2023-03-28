import Spacing from "components/spacing/Spacing";
import Text from "components/text/Text";
import { useDispatch, useSelector } from "react-redux";
import { addUserInfo } from "store/ducks/signUpSlice";
import InputButtonBox from "../InputButtonBox";
import { ContentBox } from "../SignUp.style";
import { isValidEmail } from "../validator";

const Email = () => {
  const dispatch = useDispatch("signUp");
  const userdata = useSelector((state) => state.signUp);
  console.log(userdata);

  let userEmail = "";
  const handleSendCodeClick = (inputEmail) => {
    // 유효성 검사
    if (isValidEmail(inputEmail)) {
      alert("통과");
    } else {
      alert("실패");
    }

    // 인증번호 받기
    userEmail = inputEmail;
  };

  const handleCheckCodeClick = (code) => {
    alert("인증번호 확인");
    // 인증번호 확인
    // 확인되면 dispatch에 사용자 이메일 추가
    dispatch(addUserInfo({ key: "userEmail", value: userEmail }));
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
