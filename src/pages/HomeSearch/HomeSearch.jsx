import { useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";

import { ChatQuestionMarkIcon, SearchIcon } from "components/Icon/Icon";
import { Header } from "components/header/Header";
import { Spacing } from "components/spacing";
import { Text } from "components/text";
import HomeList from "containers/HomeList/HomeList";
import { HomeWrapper } from "containers/HomeList/HomeList.style";
import { useAppDispatch, useAppSelector } from "store/Hooks";
import { homeActions } from "store/ducks/homeSlice";
import { useHomeSearch } from "utils/hooks/useHome";
import { debounce } from "utils/util";
import {
  SearchBarContainer,
  SearchContainer,
  SearchInput,
  StyledButton,
  StyledSearch,
} from "./HomeSearch.style";
import { TotalAlertModal } from "containers/Modal/TotalAlertModal";

const HomeSearch = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const searchInputRef = useRef();
  const dispatch = useAppDispatch();
  const homeSelector = useAppSelector((store) => store.home);
  const { searchString } = homeSelector;
  const { setSearch } = homeActions;

  const { data, isLoading, error } = useHomeSearch(searchString);

  console.log(searchString);

  useEffect(() => {
    if (searchInputRef?.current) {
      searchInputRef.current.focus();
    }
  }, [searchInputRef]);

  const handleChange = useCallback(
    (e) => {
      debounce(dispatch(setSearch(e.target.value)), 1000);
    },
    [dispatch, setSearch],
  );

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <StyledSearch searchString={searchString}>
      <TotalAlertModal />
      <Header>
        <SearchBarContainer>
          <SearchIcon />
          <SearchInput
            placeholder="검색"
            ref={searchInputRef}
            onChange={handleChange}
            value={searchString}
          />
        </SearchBarContainer>
        <StyledButton onClick={handleCancel}>
          <Text fontSize={theme.fontSize.sm}>취소</Text>
        </StyledButton>
      </Header>
      {isLoading || error || !data || data?.length === 0 ? (
        <SearchContainer>
          <ChatQuestionMarkIcon />
          <Spacing margin={theme.spacing.lg} />
          <Text color={theme.colors.fontGrey} fontSize={theme.fontSize.sm}>
            닉네임을 검색해 친구를 추가해보세요
          </Text>
        </SearchContainer>
      ) : (
        <HomeWrapper>
          <HomeList data={data} />
        </HomeWrapper>
      )}
    </StyledSearch>
  );
};

HomeSearch.defaultProps = {
  onClickCancel: () => {},
};

export default HomeSearch;
