import PropTypes from "prop-types";
import { useTheme } from "styled-components";
import { Spacing } from "components/spacing";
import { Text } from "components/text";
import {
  ColumnDirectionWrapper,
  FlexContainer,
  SpaceBetweenWrapper,
  RadiusLabel,
  StyledMemberInfoContainer,
} from "./MemberInfoContainer.style";
import { PinIcon, ThumbUpIcon } from "components/Icon/Icon";
import { memo } from "react";

/**
 * @param {*} object
 * @param {Node} leftChild 왼쪽에 표시할 노드
 * @param {Node} rightChild 오른쪽에 표시할 노드
 * @param {Node} bottomChild 가장 아래에 표시할 노드
 * @param {Function} onClick 이 컨테이너를 눌렀을 때의 콜백. left child와 right child에는 적용되지 않음.
 * @param {String} userNickname 사용자 이름
 * @param {String} userDetail 사용자 이름 옆에 회색 작은 글씨로 표시될 내용.
 * @param {String | Number} userLikeCount 엄지척 아이콘에 표시될 숫자
 * @param {Array} userInterests 사용자 이름 아래에 동그란 라벨로 표시될 요소.
 * @param {Boolean} subheader 서브헤더에 사용되는지. 서브헤더는 폰트 사이즈가 다름.
 * @param {Boolean} pin Pin 아이콘을 그릴지.
 */
const MemberInfoContainer = ({
  leftChild,
  rightChild,
  bottomChild,
  onClick,
  userNickname,
  userDetail,
  userLikeCount,
  userInterests,
  subheader,
  pin,
}) => {
  const theme = useTheme();

  return (
    <StyledMemberInfoContainer className="memberInfoContainer">
      <SpaceBetweenWrapper>
        <FlexContainer>
          {leftChild}
          <ColumnDirectionWrapper onClick={onClick}>
            <FlexContainer>
              <Text>{userNickname}</Text>

              {userLikeCount && (
                <>
                  <Spacing margin={theme.spacing.md} />
                  <ThumbUpIcon />
                  <Spacing margin={theme.spacing.xs} />
                  <Text
                    color={theme.colors.fontGreen}
                    fontSize={subheader ? theme.fontSize.md : theme.fontSize.xs}
                  >
                    {userLikeCount}
                  </Text>
                </>
              )}

              {userDetail && (
                <>
                  <Spacing margin={theme.spacing.md} />
                  <Text
                    color={theme.colors.fontGrey}
                    fontSize={
                      subheader ? theme.fontSize.xxs : theme.fontSize.xxxs
                    }
                  >
                    {userDetail}
                    {pin && <PinIcon color={theme.colors.mainGreen} />}
                  </Text>
                </>
              )}
            </FlexContainer>
            {userInterests && (
              <FlexContainer>
                {userInterests.map((i) => (
                  <FlexContainer key={i.interest}>
                    <RadiusLabel>{i.interest}</RadiusLabel>
                    <Spacing margin={theme.spacing.sm} />
                  </FlexContainer>
                ))}
              </FlexContainer>
            )}
            {bottomChild}
          </ColumnDirectionWrapper>
        </FlexContainer>
        {rightChild}
      </SpaceBetweenWrapper>
    </StyledMemberInfoContainer>
  );
};

MemberInfoContainer.propTypes = {
  leftChild: PropTypes.node,
  rightChild: PropTypes.node,
  bottomChild: PropTypes.node,
  onClick: PropTypes.func,
  userNickname: PropTypes.string.isRequired,
  userDetail: PropTypes.string,
  userLikeCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  userInterests: PropTypes.array,
  subheader: PropTypes.bool,
  pin: PropTypes.bool,
};

MemberInfoContainer.defaultProps = {
  onClick: () => {},
};

export default memo(MemberInfoContainer);
