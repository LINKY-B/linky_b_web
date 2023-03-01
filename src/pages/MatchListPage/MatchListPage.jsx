import { useMatchedList, useMatchingList } from "utils/hooks/useMatch";

import MatchList from "containers/MatchList/MatchList";
import { TotalAlertModal } from "containers/Modal/TotalAlertModal";

export const MatchedListPage = () => {
  const { data, error, isLoading } = useMatchedList();

  return (
    <>
      <TotalAlertModal />
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
      <TotalAlertModal />
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
