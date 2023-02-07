import styled, { css } from "styled-components";

/* 공통 */

export const ContentWrapper = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2% auto;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const StatusBarBase = styled.div`
  position: relative;
  width: 90%;
  height: auto;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 4%;
  margin-bottom: 2%;
  display: inline-block;
  border: 1px solid #c4c4c4;
  background-color: #c4c4c4;
`;

export const StatusBarStep = styled.div`
  position: absolute;
  height: 0px;
  top: -2px;
  left: -2px;
  border-radius: 2px;

  ${({ theme, step }) => css`
    width: ${step * 25.2 + "%"};
    border: 2px solid ${theme.colors.mainGreen};
    background-color: ${theme.colors.mainGreen};
  `}
`;

export const ContentTitle = styled.div`
  width: 310px;
  margin-bottom: 2%;
`;

export const ButtonBoxStyled = styled.div`
  display: flex;
  width: 310px;
  align-items: center;
  padding-left: 2px;
  margin-bottom: 2%;
`;

export const TextBox = styled.p`
  width: 310px;
  height: 66px;
  padding: 3px 5px 3px 5px;
  font-weight: 400;
  border-radius: 6px;
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.fontGrey};
    font-size: ${theme.fontSize.sm};
  `}
`;

export const TermsServiceFooterStyled = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ theme }) => css`
    background-color: ${theme.colors.mainWhite};
    border-top: 1px solid ${theme.colors.mainGrey};
  `}
`;
