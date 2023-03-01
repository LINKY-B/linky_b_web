import PropTypes from "prop-types";
import { useTheme } from "styled-components";
import { Spacing } from "components/spacing";
import MemberInfoContainer from "containers/MemberInfoContainer/MemberInfoContainer";
import {
  CheckCircleIcon,
  CrossIcon,
  MinusCircleIcon,
} from "components/Icon/Icon";
import {
  ButtonWrapper,
  ProfileImage,
  SmallProfileImage,
} from "./MatchListItem.style";

/**
 * @param {*} object
 * @param {object} user 서버로부터 받아온 사용자 정보 {userProfileImg, userNickname 등등}
 * @param {Function} onClickApproveButton 오른쪽에 표시할 노드
 * @param {Function} onClickRejectButton 이 컨테이너를 눌렀을 때의 콜백. left child와 right child에는 적용되지 않음.
 * @param {bool} simple 참이면 나에게 시도한 회원 컨테이너, 거짓이면 내가 연결을 시도한 회원 컨테이너를 보여준다.
 */
const MatchListItem = ({
  user,
  onClickDeleteButton,
  onClickApproveButton,
  onClickRejectButton,
  onClick,
  simple,
}) => {
  const {
    userId,
    userProfileImg,
    userNickname,
    userMajorName,
    userLikeCount,
    getUserInterestRes,
  } = user;

  const theme = useTheme();

  return simple ? (
    <MemberInfoContainer
      leftChild={
        <>
          <SmallProfileImage src={userProfileImg} />
          <Spacing />
        </>
      }
      rightChild={
        <button onClick={onClickDeleteButton}>
          <CrossIcon
            color={theme.colors.fontGrey}
            width="1.2em"
            height="1.2em"
          />
        </button>
      }
      userNickname={userNickname}
      userLikeCount={userLikeCount}
      userDetail={`${userMajorName} / 20학번`}
    />
  ) : (
    <MemberInfoContainer
      leftChild={
        <>
          <ProfileImage src={userProfileImg} />
          <Spacing />
        </>
      }
      rightChild={
        <ButtonWrapper>
          <button onClick={onClickApproveButton}>
            <CheckCircleIcon />
          </button>
          <button onClick={onClickRejectButton}>
            <MinusCircleIcon />
          </button>
        </ButtonWrapper>
      }
      onClick={onClick}
      userNickname={userNickname}
      userLikeCount={userLikeCount}
      userInterests={getUserInterestRes}
      userDetail={`${userMajorName} / 20학번`}
    />
  );
};

MatchListItem.propTypes = {
  user: PropTypes.object,
  onClickApproveButton: PropTypes.func,
  onClickRejectButton: PropTypes.func,
  simple: PropTypes.bool,
};

MatchListItem.defaultProps = {
  onClickApproveButton: () => {},
  onClickRejectButton: () => {},
  simple: false,
};

export default MatchListItem;
