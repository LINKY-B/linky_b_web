import styled, { css, useTheme } from "styled-components";

import { useNavigate } from "react-router-dom";
import { useMemo } from "react";
import PropTypes from "prop-types";

import Spacing from "components/spacing/Spacing";
import Text from "components/text/Text";

/**
 *
 * @param {string} mainText 자신의 id 또는 현재 메뉴의 설명(ex: 배고픈 청설모, 회원 탈퇴)
 * @param {string} subText 작은폰트, grey색의 text (00명과 링크중, 컴공/17학번)
 * @param {bool} isLike 좋아요버튼과 좋아요 수를 나타내기 위한 bool변수 (true시 좋아요 렌더링)
 * @param {string} rightBtnType page에 따른 오른쪽 버튼 종류 선택 가능(isChat,isBlock,isLink,isProfile)(각각 채팅화면, 차단화면, 연결내역화면, 내프로필화면)
 * @returns 스타일 적용된 컴포넌트 반환
 */
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
