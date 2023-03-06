import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";

import { useMatchHome } from "utils/hooks/useMatch";

import { RightArrowIcon } from "components/Icon/Icon";
import { Spacing } from "components/spacing";
import { Text } from "components/text";
import { Footer } from "containers/Footer";
import MainHeader from "containers/MainHeader/MainHeader";
import { MatchList } from "containers/MatchList";
import { StickyFooter } from "containers/StickyFooter";
import { TotalAlertModal } from "containers/Modal/TotalAlertModal";
import {
  AlignItemsCenterWrapper,
  FlexWrapper,
  StyledMatch,
} from "./Match.style";
import { memo } from "react";

export const Match = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const MatchTryToMeArticle = memo(({ data, error, isLoading }) => (
    <article className="MatchTryToMeArticle">
      <MatchList
        data={data}
        error={error}
        isLoading={isLoading}
        title="나에게 연결을 시도한 회원"
        sectionHeader={
          <>
            <FlexWrapper>
              <Text fontSize={theme.fontSize.sm}>
                나에게 연결을 시도한 회원
              </Text>

              <AlignItemsCenterWrapper
                onClick={() => navigate("/match/matched")}
              >
                <Text fontSize={theme.fontSize.xs}>전체 보기</Text>
                <RightArrowIcon />
              </AlignItemsCenterWrapper>
            </FlexWrapper>
            <Spacing margin={theme.spacing.lg} />
          </>
        }
      />
    </article>
  ));

  const MatchingTryingArticle = memo(({ data, error, isLoading }) => (
    <article className="MatchTryingArticle">
      <MatchList
        data={data}
        error={error}
        isLoading={isLoading}
        title="내가 연결을 시도한 회원"
        sectionHeader={
          <>
            <FlexWrapper>
              <Text fontSize={theme.fontSize.sm}>내가 연결을 시도한 회원</Text>

              <AlignItemsCenterWrapper
                onClick={() => navigate("/match/matching")}
              >
                <Text fontSize={theme.fontSize.xs}>전체 보기</Text>
                <RightArrowIcon />
              </AlignItemsCenterWrapper>
            </FlexWrapper>
            <Spacing margin={theme.spacing.lg} />
          </>
        }
        isSimple
      />
    </article>
  ));

  const MatchContent = () => {
    const matchHome = useMatchHome();
    const { data, isLoading, error } = matchHome;

    if (isLoading) {
      return <span>Loading...</span>;
    }

    if (error) {
      return <span>Error : {error.message}</span>;
    }

    const { tryMatchedUsers, tryMatchingUsers } = data;

    return (
      <StyledMatch className="Match">
        <MatchTryToMeArticle data={tryMatchedUsers} />
        <MatchingTryingArticle data={tryMatchingUsers} />
      </StyledMatch>
    );
  };

  return (
    <>
      <TotalAlertModal />
      <MainHeader />
      <MatchContent />
      <StickyFooter>
        <Footer />
      </StickyFooter>
    </>
  );
};

export default memo(Match);
