import styled, { css } from "styled-components";
import React, { useEffect } from "react";
import { useState } from "react";

const StyledHeader = styled.header`
  height: 55px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  & > .left_child {
    word-break: keep-all;
    margin-left: 20px;
    font-size: 28px;
    width: 20%;
    white-space: nowrap;
  }

  & > .right_child {
    display: flex;
    justify-content: space-around;
    width: 10%;

    > div > img {
      cursor: pointer;
      width: 25px;
      height: 25px;
    }
  }
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
      <div className="left_child">LINKY-B</div>

      <div className="right_child">
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
      </div>
    </StyledHeader>
  );
};
export default MainHeader;
