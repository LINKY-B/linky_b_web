import {
  M1Icon,
  M2Icon,
  M3Icon,
  M4Icon,
  W1Icon,
  W2Icon,
  W3Icon,
  W4Icon,
} from "components/Icon/Icon";
import Spacing from "components/spacing/Spacing";
import { useState } from "react";
import { ContentBox, FlexWrapper, ProfileButton } from "../SignUp.style";

const ProfileList = () => {
  const [profileList, setProfileList] = useState(Array(8).fill(false));

  const onClickProfile = (e) => {
    setProfileList(
      profileList.map((v, idx) =>
        idx === parseInt(e.currentTarget.name) ? true : false,
      ),
    );
  };
  return (
    <ContentBox>
      <FlexWrapper gap={"20px"}>
        <ProfileButton
          name="0"
          isClick={profileList[0]}
          onClick={onClickProfile}
        >
          <M1Icon />
        </ProfileButton>

        <ProfileButton
          isClick={profileList[1]}
          name="1"
          onClick={onClickProfile}
        >
          <M2Icon />
        </ProfileButton>

        <ProfileButton
          isClick={profileList[2]}
          name="2"
          onClick={onClickProfile}
        >
          <M3Icon />
        </ProfileButton>

        <ProfileButton
          isClick={profileList[3]}
          name="3"
          onClick={onClickProfile}
        >
          <M4Icon />
        </ProfileButton>
      </FlexWrapper>

      <Spacing />

      <FlexWrapper gap={"20px"}>
        <ProfileButton
          isClick={profileList[4]}
          name="4"
          onClick={onClickProfile}
        >
          <W1Icon />
        </ProfileButton>

        <ProfileButton
          isClick={profileList[5]}
          name="5"
          onClick={onClickProfile}
        >
          <W2Icon />
        </ProfileButton>

        <ProfileButton
          isClick={profileList[6]}
          name="6"
          onClick={onClickProfile}
        >
          <W3Icon />
        </ProfileButton>

        <ProfileButton
          isClick={profileList[7]}
          name="7"
          onClick={onClickProfile}
        >
          <W4Icon />
        </ProfileButton>
      </FlexWrapper>
    </ContentBox>
  );
};

export default ProfileList;
