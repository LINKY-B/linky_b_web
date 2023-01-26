import styled, { css, ThemeProvider } from "styled-components";
import React, { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { Spacing } from "styles/Style";

//style
import {
  StyledHeader,
  MainTextWrapper,
  ButtonWrapper,
} from "./MainHeader.style";

//image
import filterImg from "./../../assets/images/filter.png";
import searchImg from "./../../assets/images/search.png";

const MainHeader = ({ isFilter }) => {
  const search = () => {
    alert("검색버튼 클릭");
  };

  const filter = () => {
    alert("필터버튼 클릭");
  };

  useEffect(() => {});

  return (
    <StyledHeader>
      <MainTextWrapper>
        <h2>LINKY-B</h2>
      </MainTextWrapper>

      <ButtonWrapper>
        <div className="emo1">
          <img src={searchImg} onClick={search} alt="검색 이미지 오류"></img>
        </div>
        {isFilter ? (
          <div className="emo2">
            <img src={filterImg} onClick={filter} alt="필터 이미지 오류"></img>
          </div>
        ) : (
          <div></div>
        )}
      </ButtonWrapper>
    </StyledHeader>
  );
};

MainHeader.propTypes = {
  isFilter: PropTypes.bool,
};

export default MainHeader;
