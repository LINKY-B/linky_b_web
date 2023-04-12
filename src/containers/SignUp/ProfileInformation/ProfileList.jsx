import Spacing from "components/spacing/Spacing";
import { useState } from "react";
import { ContentBox, FlexWrapper, ProfileButton } from "../SignUp.style";
import { useProfileImages } from "utils/hooks/useSignUp";
import { useDispatch } from "react-redux";
import { addUserInfo } from "store/ducks/signUpSlice";

const ProfileList = () => {
  const dispatch = useDispatch("signUp");
  const [profileList, setProfileList] = useState(Array(8).fill(false));
  const { data, isLoading } = useProfileImages();

  if (isLoading) return <div>로딩중</div>;

  const profileImages = data.data.data;

  const onClickProfile = (e) => {
    setProfileList(
      profileList.map((v, idx) =>
        idx === parseInt(e.currentTarget.name) ? true : false,
      ),
    );
    dispatch(
      addUserInfo({
        key: "profileImg",
        value: profileImages[parseInt(e.currentTarget.name)],
      }),
    );
  };
  // alt 때문에 반복문을 사용안하고 이렇게 작성하는게 맞는가?
  return (
    <ContentBox>
      <FlexWrapper gap={"20px"}>
        <ProfileButton
          name="0"
          isClick={profileList[0]}
          onClick={onClickProfile}
        >
          <img src={profileImages[0]} alt="w3"></img>
        </ProfileButton>

        <ProfileButton
          isClick={profileList[1]}
          name="1"
          onClick={onClickProfile}
        >
          <img src={profileImages[1]} alt="m11"></img>
        </ProfileButton>

        <ProfileButton
          isClick={profileList[2]}
          name="2"
          onClick={onClickProfile}
        >
          <img src={profileImages[2]} alt="m21"></img>
        </ProfileButton>

        <ProfileButton
          isClick={profileList[3]}
          name="3"
          onClick={onClickProfile}
        >
          <img src={profileImages[3]} alt="w41"></img>
        </ProfileButton>
      </FlexWrapper>

      <Spacing />

      <FlexWrapper gap={"20px"}>
        <ProfileButton
          isClick={profileList[4]}
          name="4"
          onClick={onClickProfile}
        >
          <img src={profileImages[4]} alt="w21"></img>
        </ProfileButton>

        <ProfileButton
          isClick={profileList[5]}
          name="5"
          onClick={onClickProfile}
        >
          <img src={profileImages[5]} alt="m31"></img>
        </ProfileButton>

        <ProfileButton
          isClick={profileList[6]}
          name="6"
          onClick={onClickProfile}
        >
          <img src={profileImages[6]} alt="m4"></img>
        </ProfileButton>

        <ProfileButton
          isClick={profileList[7]}
          name="7"
          onClick={onClickProfile}
        >
          <img src={profileImages[7]} alt="w11"></img>
        </ProfileButton>
      </FlexWrapper>
    </ContentBox>
  );
};

export default ProfileList;
