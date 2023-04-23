import Spacing from "components/spacing/Spacing";
import Header from "containers/Header/Header";
import { memo, useCallback } from "react";

import { FlexWrapper } from "components/header/Header.style";
import { ButtonWrapper } from "containers/Header/Header.style";
import { useNavigate } from "react-router-dom";
import { IconWrapper, SpaceBetweenWrapper, LeftArrowIcon } from "./SubHeader.style";

const SubHeader = ({ leftChild, rightChild }) => {
  const navigate = useNavigate();

  const backHandle = useCallback(() => navigate(-1), [navigate]);

  return (
    <Header>
      <SpaceBetweenWrapper>
      <FlexWrapper>
        <IconWrapper>
          <LeftArrowIcon width="15" height="15" onClick={backHandle} />
        </IconWrapper>
        <Spacing />
        {leftChild}
      </FlexWrapper>
      <ButtonWrapper>{rightChild}</ButtonWrapper>
      </SpaceBetweenWrapper>
    </Header>
  );
};
export default memo(SubHeader);
