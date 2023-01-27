import { useEffect } from "react";
import { useAppDispatch } from "store/Hooks";
import { useTheme } from "styled-components";

import { matchActions, MATCH_MODAL_TYPES } from "store/ducks/matchSlice";
import { useMatchHome } from "utils/hooks/useMatch";

import { MatchModal } from "components/MatchModal";
import MatchListItem from "containers/MatchListItem/MatchListItem";
import { Text } from "components/text";
import { Spacing } from "components/spacing";
import { Hr } from "styles/Style";
import { MatchWrapper, StyledMatch } from "./Match.style";

export const Match = () => {
  const { data, error, isLoading } = useMatchHome();
  const theme = useTheme();
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(matchActions.resetModal());
    };
  }, [dispatch]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (error) {
    return <span>Error : {error.message}</span>;
  }

  console.log(data);

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

  return (
    <StyledMatch className="Match">
      <MatchModal />

      <MatchWrapper>
        <Text>나에게 연결을 시도한 회원</Text>
        {data?.tryMatchedUsers &&
          data.tryMatchedUsers.map((user) => {
            const { userId, userNickname } = user;
            return (
              <div key={user.userId}>
                <Spacing margin={theme.spacing.lg} />
                <MatchListItem
                  user={user}
                  onClickApproveButton={() =>
                    onClickApproveButton({ userId, userNickname })
                  }
                  onClickRejectButton={() => {
                    onClickRejectButton({ userId, userNickname });
                  }}
                />
                {/* <Hr /> */}
              </div>
            );
          })}
      </MatchWrapper>
      <MatchWrapper>
        <Text>내가 연결을 시도한 회원</Text>
        {data?.tryMatchingUsers &&
          data.tryMatchingUsers.map((user) => (
            <div key={user.userId}>
              <Spacing margin={theme.spacing.lg} />
              <MatchListItem user={user} />
              <Hr />
            </div>
          ))}
      </MatchWrapper>
    </StyledMatch>
  );
};

export default Match;
