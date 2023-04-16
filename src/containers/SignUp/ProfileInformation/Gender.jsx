import SelectButton from "components/buttons/SelectButton";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserInfo } from "store/ducks/signUpSlice";
import { ContentBox, FlexWrapper } from "../SignUp.style";

const Gender = ({ children }) => {
  const [isMale, setIsMale] = useState(false);
  const [isFemale, setIsFemale] = useState(false);
  const dispatch = useDispatch("signUp");

  const onClickGender = (e) => {
    if (e.target.id === "1") {
      setIsMale(true);
      setIsFemale(false);
      dispatch(addUserInfo({ key: "userSex", value: "남" }));
    } else {
      setIsMale(false);
      setIsFemale(true);
      dispatch(addUserInfo({ key: "userSex", value: "여" }));
    }
  };

  return (
    <ContentBox>
      {children}
      <FlexWrapper width="80px">
        <SelectButton
          id={1}
          type="rectangle"
          onClick={onClickGender}
          isSelected={isMale}
        >
          남
        </SelectButton>
        <SelectButton
          id={0}
          type="rectangle"
          onClick={onClickGender}
          isSelected={isFemale}
        >
          여
        </SelectButton>
      </FlexWrapper>
    </ContentBox>
  );
};

export default Gender;
