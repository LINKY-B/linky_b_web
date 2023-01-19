import styled, { css, ThemeProvider } from "styled-components";
import React, { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";

export const StyledHeader = styled.header`
  height: 55px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`;

//MainTextWrapper는 추후에 text에서 이미지로 변경될시 변경해야함
const MainTextWrapper = styled.div`
  word-break: keep-all;
  margin-left: 20px;
  width: 20%;
  white-space: nowrap;
  > h2 {
    font-size: ${(props) => props.fontSize || props.theme.fontSize.lg};
  } //
`;

const ButtonWrapper = styled.div`
display: flex;
justify-content: end;
width: 20%;
margin-right:20px;
> div > img {
  margin-right:10px;
  cursor: pointer;
  width: 25px;
  height: 25px;
`;
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
          <img
            src={process.env.PUBLIC_URL + `assets/reading glasses.png`}
            onClick={search}
            alt="이미지 오류"
          ></img>
        </div>
        {isFilter ? (
          <div className="emo2">
            <img
              src={process.env.PUBLIC_URL + `assets/filter.png`}
              onClick={filter}
              alt="이미지 오류"
            ></img>
          </div>
        ) : (
          <div></div>
        )}
      </ButtonWrapper>
    </StyledHeader>
  );
};
export default MainHeader;
