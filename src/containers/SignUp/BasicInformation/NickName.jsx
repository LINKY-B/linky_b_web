import Spacing from "components/spacing/Spacing";
import Text from "components/text/Text";
import { useDispatch } from "react-redux";
import { addUserInfo } from "store/ducks/signUpSlice";
import { useMutateNickName } from "utils/hooks/useSignUp";
import InputButtonBox from "../InputButtonBox";
import { isValidNickName } from "../validator";

const NickName = () => {
  const dispatch = useDispatch("signUp");
  const mutation = useMutateNickName();

  const handleClick = async (inputNickName) => {
    if (isValidNickName(inputNickName)) {
      const { data } = await mutation.mutateAsync(inputNickName);

      if (data.code === "M012") {
        alert(data.message);
        return;
      }

      alert(data.message);
      dispatch(addUserInfo({ key: "userNickName", value: inputNickName }));
      return;
    }
    alert("올바르지 않은 닉네임 형식입니다.");
  };

  return (
    <>
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
    </>
  );
};

export default NickName;
