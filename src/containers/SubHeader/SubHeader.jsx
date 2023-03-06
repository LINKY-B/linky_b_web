import { memo, useCallback } from "react";
import Spacing from "components/spacing/Spacing";
import Header from "containers/Header/Header";

import { ButtonWrapper, FlexWrapper } from "containers/Header/Header.style";
import { useNavigate } from "react-router-dom";
import { IconWrapper, LeftArrowIcon } from "./SubHeader.style";

const SubHeader = ({ leftChild, rightChild }) => {
  const navigate = useNavigate();

  const backHandle = useCallback(() => navigate(-1), [navigate]);

  return (
    <Header>
      <FlexWrapper>
        <IconWrapper>
          <LeftArrowIcon width="20" height="20" onClick={backHandle} />
        </IconWrapper>
        <Spacing />
        {leftChild}
      </FlexWrapper>
      <ButtonWrapper>{rightChild}</ButtonWrapper>
    </Header>
  );
};
export default memo(SubHeader);
