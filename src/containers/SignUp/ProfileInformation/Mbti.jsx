import SelectOption from "components/inputs/SelectOption";
import { useDispatch } from "react-redux";
import { addUserInfo } from "store/ducks/signUpSlice";
import { ContentBox } from "../SignUp.style";

const Mbti = ({ children }) => {
  const mbtiList = [
    "ESTP",
    "ESTJ",
    "ESFP",
    "ESFJ",
    "ENFP",
    "ENFJ",
    "ENTP",
    "ENTJ",
    "ISTP",
    "ISTJ",
    "ISFP",
    "ISFJ",
    "INFP",
    "INFJ",
    "INTP",
    "INTJ",
  ];

  const dispatch = useDispatch("signUp");

  const onChangeMbti = (e) => {
    dispatch(addUserInfo({ key: "userMBTI", value: e.target.value }));
  };
  return (
    <ContentBox>
      {children}
      <SelectOption
        name="userMBTI"
        defaultValue="본인의 MBTI를 선택해 주세요."
        options={mbtiList}
        onChange={onChangeMbti}
      ></SelectOption>
    </ContentBox>
  );
};

export default Mbti;
