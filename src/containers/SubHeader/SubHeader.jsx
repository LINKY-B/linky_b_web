import Spacing from "components/spacing/Spacing";
import Header from "containers/Header/Header";

import { ButtonWrapper, FlexWrapper } from "containers/Header/Header.style";
import { useNavigate } from "react-router-dom";
import { IconWrapper, LeftArrowIcon } from "./SubHeader.style";

const SubHeader = ({ leftChild, rightChild }) => {
  const navigate = useNavigate();
  return (
    <Header>
      <FlexWrapper>
        <IconWrapper>
          <LeftArrowIcon width="20" height="20" onClick={() => navigate(-1)} />
        </IconWrapper>
        <Spacing />
        {leftChild}
      </FlexWrapper>
      <ButtonWrapper>{rightChild}</ButtonWrapper>
    </Header>
  );
};
export default SubHeader;
