import styled, { css } from "styled-components";

import { Icon } from "components/Icon/index";
export const InputStyled = styled.input`
  height: 36px;
  border-radius: 6px;
  padding: 8px 1px 8px 11px;
  font-weight: 400;
  line-height: 16px;

  ${({ theme }) => css`
    border: 1px solid ${theme.colors.fontGrey};
    font-size: ${theme.fontSize.sm};
  `}

  ${({ size }) => {
    if (size === "large")
      return css`
        width: 310px;
      `;

    if (size === "medium")
      return css`
        width: 230px;
      `;

    if (size === "small")
      return css`
        width: 202px;
      `;
  }}
`;

export const TextareaStyled = styled.textarea`
  width: 219px;
  height: 110px;
  resize: none;
  border-radius: 6px;
  font-weight: 400;
  padding: 3px 10px 3px 10px;
  line-height: 19px;

  ${({ theme }) => css`
    border: 1px solid ${theme.colors.fontGrey};
    font-size: ${theme.fontSize.sm};
  `};
`;

export const SelectOptionStyled = styled.select`
  width: 311px;
  height: 36px;
  padding-left: 10px;
  font-weight: 400;
  appearance: none;
  border-radius: 6px;
  background: url(${Icon.BottomArrowIcon}) no-repeat right 1rem center;
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.fontGrey};
    font-size: ${theme.fontSize.sm};
  `};
`;
