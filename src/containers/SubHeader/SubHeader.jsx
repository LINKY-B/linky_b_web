import Spacing from "components/spacing/Spacing";
import Text from "components/text/Text";
import { useTheme } from "styled-components";
import Header from "containers/Header/Header";

import { useNavigate } from "react-router-dom";
import { FlexWrapper, ButtonWrapper } from "containers/Header/Header.style";
import { LeftArrowIcon } from "./SubHeader.style";

const SubHeader = ({ leftChild, rightChild }) => {
  const navigate = useNavigate();
  return (
    <Header>
      <FlexWrapper>
        <LeftArrowIcon
          width="20"
          height="20"
          onClick={() => navigate(-1)}
        ></LeftArrowIcon>
        <Spacing></Spacing>
        {leftChild}
      </FlexWrapper>
      <ButtonWrapper>{rightChild}</ButtonWrapper>
    </Header>
  );
};
export default SubHeader;
