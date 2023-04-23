import Spacing from "components/spacing/Spacing";
import HomeListItem from "containers/HomeListItem/HomeListItem";
import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "store/Hooks";
import { MODAL_TYPES, modalActions } from "store/ducks/modalSlice";
import { useTheme } from "styled-components";
import { StyledHomeList } from "./HomeList.style";

const HomeList = ({ data }) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // 내부 컨테이너 - 최적화
  const HomeListContent = ({ user }) => {
    const { userId } = user;

    // 요청 보내기 버튼
    const onClickRequestButton = useCallback(({ userId, userNickName }) => {
      dispatch(
        modalActions.showModal({
          userId,
          userNickName,
          modalType: MODAL_TYPES.TRY_MATCH,
        }),
      );
    }, []);

    // 목록 - 아이템 클릭 핸들러
    const handleOnClickItem = useCallback((userId) => {
      navigate(`/home/user/${userId}`);
    }, []);

    return (
      <div key={userId}>
        <HomeListItem
          key={userId}
          user={user}
          onClickRequestButton={onClickRequestButton}
          onClick={() => handleOnClickItem(userId)}
        />
        <Spacing margin={theme.spacing.lg} />
      </div>
    );
  };

  return (
    <StyledHomeList>
      {data &&
        data.map((user) => {
          const { userId } = user;
          return <HomeListContent key={userId} user={user} />;
        })}
    </StyledHomeList>
  );
};

export default memo(HomeList);
