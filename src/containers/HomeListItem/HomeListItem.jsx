import PropTypes from "prop-types";
import { memo } from "react";
import { PlusCircleIcon } from "components/Icon/Icon";
import { Spacing } from "components/spacing";
import { MemberInfoContainer } from "containers/MemberInfoContainer";
import { ButtonWrapper, ProfileImage } from "./HomeListItem.style";

/**
 * @param {*} object
 * @param {object} user 서버로부터 받아온 사용자 정보 {userProfileImg, userNickName 등등}
 * @param {Function} onClickRequestButton 요청 버튼을 눌렀을 때의 핸들러
 * @param {bool} onClick 목록 아이템을 눌렀을 때 핸들러
 */
const HomeListItem = ({ user, onClickRequestButton, onClick }) => {
  const {
    userId,
    userProfileImg,
    userNickName,
    userMajorName,
    userLikeCount,
    userInterest,
    userStudentNum,
  } = user;

  return (
    <MemberInfoContainer
      leftChild={
        <>
          <ProfileImage src={userProfileImg} />
          <Spacing />
        </>
      }
      rightChild={
        <ButtonWrapper>
          <button
            onClick={() => onClickRequestButton({ userId, userNickName })}
          >
            <PlusCircleIcon />
          </button>
        </ButtonWrapper>
      }
      onClick={onClick}
      userNickName={userNickName}
      userLikeCount={userLikeCount}
      userInterests={userInterest}
      userDetail={`${userMajorName} / ${userStudentNum}학번`}
    />
  );
};

HomeListItem.propTypes = {
  user: PropTypes.object,
  onClickRequestButton: PropTypes.func,
};

HomeListItem.defaultProps = {
  onClickRequestButton: () => {},
};

export default memo(HomeListItem);
