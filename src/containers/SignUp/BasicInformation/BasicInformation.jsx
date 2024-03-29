import Spacing from "components/spacing/Spacing";
import Text from "components/text/Text";
import { StyledHeader } from "containers/Header/Header.style";
import {
  ContentBox,
  ContentWrapper,
  StatusBarBase,
  StatusBarStep,
} from "../SignUp.style";
import React from "react";
import Button from "components/buttons/Button";
import Birth from "./Birth";
import Email from "./Email";
import NickName from "./NickName";
import Name from "./Name";
import Password from "./Password";
import { useDispatch } from "react-redux";
import { checkBasicInfo } from "store/ducks/signUpSlice";

const BasicInformation = () => {
  const dispatch = useDispatch("signUp");

  const handleNextClick = () => {
    dispatch(checkBasicInfo());
  };
  return (
    <>
      <StyledHeader />
      <StatusBarBase>
        <StatusBarStep step={2} />
      </StatusBarBase>

      <ContentWrapper>
        <ContentBox className="BasicInfoTitle">
          <Text fontWeight={700}>기본 정보</Text>
        </ContentBox>

        <Name />

        <NickName />

        <Email />

        <Birth />

        <Password />

        <Spacing />

        <ContentBox className="NextButton">
          <Button onClick={handleNextClick} shadow>
            다음
          </Button>
        </ContentBox>
      </ContentWrapper>
    </>
  );
};

export default BasicInformation;
