import Spacing from "components/spacing/Spacing";
import Text from "components/text/Text";
import { useDispatch } from "react-redux";
import { addUserInfo } from "store/ducks/signUpSlice";
import InputButtonBox from "../InputButtonBox";
import { isValidNickName } from "../validator";

const NickName = () => {
  const dispatch = useDispatch("signUp");

  const handleClick = (inputNickName) => {
    isValidNickName(inputNickName) ? alert("통과") : alert("실패");

    // 성공시
    dispatch(addUserInfo({ key: "userNickname", value: inputNickName }));
  };

  return (
    <InputButtonBox
      className="user-nickname"
      title="userNickname"
      placeholder="닉네임을 입력해주세요.(2~8자)"
      buttonText="중복 확인"
      handleClick={handleClick}
    >
      <Text>닉네임</Text>
      <Spacing />
    </InputButtonBox>
  );
};

export default NickName;
