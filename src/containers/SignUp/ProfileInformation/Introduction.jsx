import Textarea from "components/inputs/Textarea";
import { useDispatch } from "react-redux";
import { addUserInfo } from "store/ducks/signUpSlice";
import { ContentBox } from "../SignUp.style";

const Introduction = ({ children }) => {
  const dispatch = useDispatch("signUp");

  const onBlur = (e) => {
    dispatch(
      addUserInfo({ key: "userSelfIntroduction", value: e.target.value }),
    );
  };
  return (
    <ContentBox>
      {children}
      <Textarea
        width={"310px"}
        placeholder="본인 소개 글을 작성해 주세요.(300자 이하)"
        onBlur={onBlur}
        maxLength={300}
      ></Textarea>
    </ContentBox>
  );
};

export default Introduction;
