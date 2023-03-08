import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { useAppDispatch } from "store/Hooks";
import PropTypes from "prop-types";

import { modalActions, MODAL_TYPES } from "store/ducks/modalSlice";

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

  // '모두수락' 버튼 핸들러
  const onClickApproveAllButton = useCallback(() => {
    dispatch(
      modalActions.showModal({
        modalType: MODAL_TYPES.APPROVE_ALL,
      }),
    );
  }, [dispatch]);

  /**
   * 연결 리스트의 내용을 보여주는 컴포넌트
   * @returns
   */
  const MatchListContent = () => {
    // 연결내역목록 - 수락버튼 핸들러
    const onClickApproveButton = useCallback(({ userId, userNickname }) => {
      dispatch(
        modalActions.showModal({
          userId,
          userNickname,
          modalType: MODAL_TYPES.APPROVE,
        }),
      );
    }, []);

    // 연결내역목록 - 거절버튼 핸들러
    const onClickRejectButton = useCallback(({ userId, userNickname }) => {
      dispatch(
        modalActions.showModal({
          userId,
          userNickname,
          modalType: MODAL_TYPES.REJECT,
        }),
      );
    }, []);

    // 연결내역목록 - 삭제버튼 핸들러
    const onClickDeleteButton = useCallback(({ userId, userNickname }) => {
      dispatch(
        modalActions.showModal({
          userId,
          userNickname,
          modalType: MODAL_TYPES.DELETE,
        }),
      );
    }, []);

    // 연결내역목록 - 아이템 클릭 핸들러
    const handleOnClickItem = useCallback((userId) => {
      navigate(`/match/matched/${userId}`);
    }, []);

    // useQuery pre return
    if (isLoading) {
      return <span>Loading...</span>;
    }

    if (error) {
      return <span>Error : {error.message}</span>;
    }

    return (
      data &&
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
      })
    );
  };

  // 연결내역 목록 헤더
  const MatchHeader = memo(({ title, isSubheader }) => {
    return (
      isSubheader && (
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
      )
    );
  });

  return (
    <>
      <MatchHeader title={title} isSubheader={isSubheader} />
      <StyledMatch className="MatchList">
        <MatchWrapper>
          {sectionHeader}
          <MatchListContent />
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

export default memo(MatchList);
