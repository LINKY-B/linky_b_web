import styled, { css } from "styled-components";

const colorStyle = css`
  ${({ theme, color }) => {
    const buttonColor = theme.colors[color];
    return buttonColor === "mainGreen"
      ? css`
          background: ${buttonColor};
          color: #ffffff;
        `
      : css`
          background: ${buttonColor};
          color: ${theme.colors["fontGrey"]};
        `;
  }}
`;

const ButtonType = css`
  ${({ modal }) =>
    modal
      ? css`
          width: 220px;
          height: 38px;
        `
      : css`
          width: 310px;
          height: 50px;
        `}
`;

const ButtonStyled = styled.button`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.md};
  border-radius: 6px;

  /* 버튼 타입 */
  ${ButtonType}

  /* 버튼 색상 */
  ${colorStyle}
`;

const Button = ({ color, onClick, children, modal }) => {
  return (
    <>
      <ButtonStyled color={color} onClick={onClick} modal={modal}>
        {children}
      </ButtonStyled>
    </>
  );
};

Button.defaultProps = {
  color: "mainGreen",
};

export default Button;
