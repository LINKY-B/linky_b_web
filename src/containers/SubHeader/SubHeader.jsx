import styled, { css, useTheme } from "styled-components";

import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import Spacing from "components/spacing/Spacing";
import Text from "components/text/Text";
//styled-component
import {
  StyledSubHeader,
  BackButtonWrapper,
  HeadTextWrapper,
  ButtonWrapper,
} from "./SubHeader.style";

//img
import backImg from "./../../assets/images/back.png";

const SubHeader = ({
  mainText,
  subText,
  isProfileImg,
  isBeanIcon,
  isLinkNum,
  isEtcButton,
  isAllAcceptButton,
  isUnblockButton,
}) => {
  const navigate = useNavigate();

  return (
    <StyledSubHeader>
      <BackButtonWrapper>
        <button
          onClick={() => {
            alert("뒤로가기 버튼 클릭");
            navigate(-1);
          }}
        >
          <img className="back_img " src={backImg} alt="이미지 오류"></img>
        </button>
      </BackButtonWrapper>
      <HeadTextWrapper>
        <h2>{mainText}</h2>
      </HeadTextWrapper>

      <ButtonWrapper></ButtonWrapper>
    </StyledSubHeader>
  );
};

SubHeader.propTypes = {
  text: PropTypes.string,
};
export default SubHeader;
