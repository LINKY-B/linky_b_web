import styled, { css } from "styled-components";

/* 버튼 크기 */
const buttonSize = css`
  ${({ size }) => {
    if (size === "normal") {
      return css`
        width: 310px;
        height: 50px;
      `;
    }

    if (size === "modal") {
      return css`
        width: 220px;
        height: 38px;
      `;
    }

    if (size === "half") {
      return css`
        width: 156px;
        height: 50px;
      `;
    }
  }}
`;

/* 버튼 색상 */
const buttonColor = css`
  ${({ theme, color }) => {
    if (color === "green") {
      return css`
        background: ${theme.colors.mainGreen};
        color: ${theme.colors.mainWhite};
      `;
    }

    if (color === "grey") {
      return css`
        background: ${theme.colors.mainGrey};
        color: ${theme.colors.fontGrey};
      `;
    }
  }}
`;

// 일반버튼
export const ButtonStyled = styled.button`
  border-radius: 6px;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 700;

  /* 버튼 크기 */
  ${buttonSize}

  /* 버튼 색상 */
  ${buttonColor}
`;

// 선택 버튼
export const SelectButtonStyled = styled.button`
  width: fit-content;
  height: 26px;
  padding: 0px 10px 0px 10px;
  border-radius: 20px;
  font-size: ${({ theme }) => theme.fontSize.sm};

  ${({ theme, isSelected }) => {
    if (isSelected) {
      return css`
        color: ${theme.colors.mainGreen};
        border: 1px solid ${theme.colors.mainGreen};
        font-weight: 600;
      `;
    }

    return css`
      color: ${theme.colors.fontGrey};
      border: 1px solid ${theme.colors.fontGrey};
      font-weight: 400;
    `;
  }}

  ${({ type }) => {
    if (type === "rectangle") {
      return css`
        border-radius: 6px;
      `;
    }
  }}
`;

// 아이콘 버튼(스타일)
export const IconButtonStyled = styled.button`
  padding: 0;
  margin: 0;
`;