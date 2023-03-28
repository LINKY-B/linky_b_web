import SelectOption from "components/inputs/SelectOption";
import Spacing from "components/spacing/Spacing";
import Text from "components/text/Text";
import { useDispatch } from "react-redux";
import { addUserInfo } from "store/ducks/signUpSlice";
import { ContentBox, FlexWrapper } from "../SignUp.style";

const Birth = () => {
  const year = [
    1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001,
    2002, 2003, 2004,
  ];
  const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const day = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  const dispatch = useDispatch("signUp");

  const birth = {
    yy: "",
    mm: "",
    dd: "",
  };

  const onChange = (e) => {
    birth[e.target.name] = e.target.value;
    dispatch(
      addUserInfo({
        key: "userBirth",
        value: `${birth.yy}-${birth.mm.padStart(2, "0")}-${birth.dd}`,
      }),
    );
  };

  return (
    <ContentBox className="user-birth">
      <Text>생년월일</Text>
      <Spacing />
      <FlexWrapper>
        <SelectOption
          name="yy"
          width="148px"
          defaultValue="년"
          options={year}
          onChange={onChange}
        ></SelectOption>
        <SelectOption
          name="mm"
          width="70px"
          defaultValue="월"
          options={month}
          onChange={onChange}
        ></SelectOption>
        <SelectOption
          name="dd"
          width="70px"
          defaultValue="일"
          options={day}
          onChange={onChange}
        ></SelectOption>
      </FlexWrapper>
    </ContentBox>
  );
};

export default Birth;
