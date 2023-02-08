import { useTheme } from "styled-components";
import { useMatchedList, useMatchingList } from "utils/hooks/useMatch";

import { MatchModal } from "components/MatchModal";
import MatchList from "containers/MatchList/MatchList";

export const MatchedListPage = () => {
  const { data, error, isLoading } = useMatchedList();
  const theme = useTheme();

  return (
    <>
      <MatchModal />
      <MatchList
        data={data}
        error={error}
        isLoading={isLoading}
        title="나에게 연결을 시도한 회원"
        isSubheader
      />
    </>
  );
};

export const MatchingListPage = () => {
  const { data, error, isLoading } = useMatchingList();

  return (
    <>
      <MatchModal />
      <MatchList
        data={data}
        error={error}
        isLoading={isLoading}
        title="내가 연결을 시도한 회원"
        isSubheader
        isSimple
      />
    </>
  );
};
