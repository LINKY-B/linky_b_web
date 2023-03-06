import React, { useEffect, memo } from "react";
import PropTypes from "prop-types";
import { useTheme } from "styled-components";

//component
import Spacing from "components/spacing/Spacing";
import Text from "components/text/Text";

//style
import { FilterIcon, SearchIcon } from "./MainHeader.style";

import Header from "containers/Header/Header";
import { FlexWrapper, ButtonWrapper } from "containers/Header/Header.style";

/**
 *
 * @param {bool} filter 필터버튼 생성여부
 * @param {bool} search  검색버튼 생성여부
 * @param {function} onClickSearch search버튼 클릭시 동작 함수
 * @param {function} onClickFilter filter버튼 클릭시 동작 함수
 * @returns
 */

const MainHeader = ({ search, filter, onClickSearch, onClickFilter }) => {
  const theme = useTheme();

  useEffect(() => {});

  return (
    <Header>
      <Text fontSize={theme.fontSize.lg}>LINKY-B</Text>
      <Spacing></Spacing>
      <FlexWrapper></FlexWrapper>
      <ButtonWrapper>
        {search && <SearchIcon onClick={onClickSearch}></SearchIcon>}
        {filter && <FilterIcon onClick={onClickFilter}></FilterIcon>}
      </ButtonWrapper>
    </Header>
  );
};

MainHeader.propTypes = {
  search: PropTypes.bool,
  filter: PropTypes.bool,
  onClickFilter: PropTypes.func,
  onClickSearch: PropTypes.func,
};

export default memo(MainHeader);
