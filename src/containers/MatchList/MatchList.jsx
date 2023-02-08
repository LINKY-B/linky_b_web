import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "store/Hooks";
import { useTheme } from "styled-components";
import PropTypes from "prop-types";

import { matchActions, MATCH_MODAL_TYPES } from "store/ducks/matchSlice";

import { Spacing } from "components/spacing";
import { Text } from "components/text";
import MatchListItem from "containers/MatchListItem/MatchListItem";
import SubHeader from "containers/SubHeader/SubHeader";
import { MatchWrapper, StyledMatch } from "pages/Match/Match.style";

/**
 *
 * @param {*} data: useQuery에서 받아온 데이터
 * @param {*} error: useQuery에서 받아온 에러
 * @param {*} isLoading: useQuery에서 받아온 로딩
 *
 * @param {*} isSubheader: subheader를 넣을지
 * @param {*} title: subheader에 넣을 제목
 * @param {*} isSimple: 아이템 유형이 simple(내가 연결을 시도한 사람)인지
 * @param {*} sectionHeader: section 가장 윗부분에 넣을 노드
 *
 * @returns 연결내역 화면에서의 리스트 컴포넌트
 */
export const MatchList = ({
  data,
  error,
  isLoading,
  title,
  isSimple,
  isSubheader,
  sectionHeader,
}) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // when unmount: reset modal
  useEffect(() => {
    return () => {
      dispatch(matchActions.resetModal());
    };
  }, [dispatch]);

  // useQuery pre return
  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error : {error.message}</span>;
  }

  // click handlers
  const handleOnClickItem = (userId) => {
    navigate(`/match/matched/${userId}`);
  };

  const onClickApproveButton = ({ userId, userNickname }) => {
    dispatch(
      matchActions.showModal({
        userId,
        userNickname,
        modalType: MATCH_MODAL_TYPES.APPROVE,
      }),
    );
  };

  const onClickRejectButton = ({ userId, userNickname }) => {
    dispatch(
      matchActions.showModal({
        userId,
        userNickname,
        modalType: MATCH_MODAL_TYPES.REJECT,
      }),
    );
  };

  const onClickDeleteButton = ({ userId, userNickname }) => {
    dispatch(
      matchActions.showModal({
        userId,
        userNickname,
        modalType: MATCH_MODAL_TYPES.DELETE,
      }),
    );
  };

  const onClickApproveAllButton = () => {
    dispatch(
      matchActions.showModal({
        modalType: MATCH_MODAL_TYPES.APPROVE_ALL,
      }),
    );
  };

  return (
    <>
      {isSubheader && (
        <SubHeader
          leftChild={<Text fontSize={theme.fontSize.md}>{title}</Text>}
          rightChild={
            !isSimple && (
              <button onClick={onClickApproveAllButton}>
                <Text fontSize={theme.fontSize.xs}>모두 수락</Text>
              </button>
            )
          }
        />
      )}
      <StyledMatch className="MatchList">
        <MatchWrapper>
          {sectionHeader}
          {data &&
            data.map((user) => {
              const { userId, userNickname } = user;
              return (
                <div key={userId}>
                  <MatchListItem
                    user={user}
                    onClick={() => handleOnClickItem(userId)}
                    onClickDeleteButton={() => {
                      onClickDeleteButton({ userId, userNickname });
                    }}
                    onClickApproveButton={() =>
                      onClickApproveButton({ userId, userNickname })
                    }
                    onClickRejectButton={() => {
                      onClickRejectButton({ userId, userNickname });
                    }}
                    simple={isSimple}
                  />
                  <Spacing margin={theme.spacing.lg} />
                </div>
              );
            })}
        </MatchWrapper>
      </StyledMatch>
    </>
  );
};

MatchList.propTypes = {
  data: PropTypes.array,
  error: PropTypes.object,
  isLoading: PropTypes.bool,
  title: PropTypes.string,
  isSimple: PropTypes.bool,
  isSubheader: PropTypes.bool,
  sectionHeader: PropTypes.node,
};

export default MatchList;
