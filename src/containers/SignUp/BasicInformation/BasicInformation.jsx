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

const BasicInformation = ({ nextPage }) => {
  const handleNextClick = () => {
    nextPage();
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

        <Email />

        <Name />

        <NickName />

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
