import styled, { css } from "styled-components";

/* 공통 */

export const ContentWrapper = styled.div`
  width: 100%;
  height: 82%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2% auto;
  overflow: auto;
  justify-content: space-between;

  ${({ footer }) =>
    footer &&
    css`
      height: 70%;
    `}

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
  margin-top: 2%;
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

export const ContentBox = styled.div`
  display: inline-block;
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

export const FlexWrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  gap: 10px;

  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap};
    `};

  flex-wrap: wrap;
`;

export const ErrorMessage = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.xxs};
    color: ${theme.colors.errorRed};
  `}
`;

/* TermsService */

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

/* UnivInformation */

export const DivisionLine = styled.div`
  position: relative;
  width: 320px;
  height: 0px;
  margin: 2% auto;
  border: 1px solid #c4c4c4;
  background-color: #c4c4c4;
`;

export const UploadImageButton = styled.button`
  width: 105px;
  height: 100px;
  border-radius: 6px;
  text-align: center;
  line-height: 100px;
  float: left;
  ${({ theme }) => css`
    border: 1.5px dashed ${theme.colors.fontGrey};
    color: ${theme.colors.fontGrey};
  `};
`;

export const PreviewImage = styled.div`
  position: relative;
  width: 105px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  float: left;
  margin-left: 16px;
  ${({ theme }) => css`
    background-color: ${theme.colors.mainGrey};
    border-radius: 6px;
    font-size: ${theme.fontSize.xs};
  `};

  > img {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 105px;
    height: 100px;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors.mainGrey};
  }
`;

/* ProfileINformation */

export const ProfileButton = styled.button`
  display: flex;
  position: relative;
  padding: 1.5px;
  justify-content: space-between;
  border: 3px solid ${({ theme }) => theme.colors.mainGrey};
  border-radius: 50%;
  width: fit-content;
  height: fit-content;

  ${({ isClick, theme }) =>
    isClick &&
    css`
      border-color: ${theme.colors.mainGreen};
    `}
`;
