import styled, { css, useTheme } from "styled-components";

import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import PropTypes from "prop-types";

import Spacing from "components/spacing/Spacing";
import Text from "components/text/Text";

//styled-component
import {
  StyledSubHeader,
  BackButtonWrapper,
  ProfileWrapper,
  HeadTextWrapper,
  LikeWrapper,
  SubTextWrapper,
  RightButtonWrapper,
  MainText,
  SubText,
} from "./SubHeader.style";

//img
import backImg from "./../../assets/images/back.png";
import likeImg from "../../assets/images/tempImg.png";
import onlineImg from "../../assets/images/onlineTempImg.png";
import moreImg from "../../assets/images/more.png";
import { theme } from "styles/theme";

const SubHeader = ({ mainText, subText, isLike, rightBtnType }) => {
  const RBtnType = ["isChat", "isBlock", "isLink", "isProfile"].includes(
    rightBtnType,
  )
    ? rightBtnType
    : "default";

  const navigate = useNavigate();

  // const handleClickChatMore=()=>{

  // }
  // const handleClickProfileMore=()=>{

  // }

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
      {RBtnType === "isChat" && <ProfileWrapper></ProfileWrapper>}
      <HeadTextWrapper>
        <MainText>{mainText}</MainText>
      </HeadTextWrapper>
      <Spacing />
      {isLike && (
        <LikeWrapper>
          <img src={likeImg} alt="좋아요 이미지 오류" />
          <div>
            <Text fontSize={theme.fontSize.md} color={theme.colors.fontGreen}>
              12
            </Text>
          </div>
        </LikeWrapper>
      )}
      <Spacing />
      <SubTextWrapper>
        <SubText>{subText}</SubText>
      </SubTextWrapper>
      <Spacing />
      <RightButtonWrapper>
        {/* 온라인확인 이미지, more버튼 */}
        {RBtnType === "isChat" && (
          <div className="ChatButtonWrapper">
            <img src={onlineImg} alt="온라인 이미지 오류"></img>
            <img className="moreButton" src={moreImg} alt="more 이미지 오류" />
          </div>
        )}
        {/* 차단 해제 */}
        {RBtnType === "isBlock" && (
          <div className="BlockButtonWrapper">
            <button type="button" onClick="">
              차단 해제
            </button>
          </div>
        )}
        {/* 모두수락버튼 */}
        {RBtnType === "isLink" && (
          <div className="AcceptButtonWrapper">
            <button type="button" onClick="">
              모두 수락
            </button>
          </div>
        )}
        {/*myProfile page more버튼 */}
        {RBtnType === "isProfile" && (
          <div className="ProfileButtonWrapper">
            <img src={moreImg} alt="more 이미지 오류" />
          </div>
        )}
        {RBtnType === "default" && <div></div>}
      </RightButtonWrapper>
    </StyledSubHeader>
  );
};

SubHeader.propTypes = {
  mainText: PropTypes.string,
  subText: PropTypes.string,
  isProfileImg: PropTypes.bool,
  isLike: PropTypes.bool,
};

SubHeader.defaultProps = {
  isLike: false,
  rightBtnType: "default",
};

export default SubHeader;
