import { ButtonStyled } from "./Buttons.style";
import PropTypes from "prop-types";

/**
 * Button component
 *
 * @param {string} size 버튼 사이즈(normal, modal, half)
 * @param {string} color 버튼 색상(green, grey)
 * @param {function} onClick 이벤트 함수
 * @returns 스타일 적용된 컴포넌트 반환
 *
 */
const Button = ({ size, color, onClick, children }) => {
  return (
    <ButtonStyled
      className="Button"
      size={size}
      color={color}
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  );
};

Button.defaultProps = {
  size: "normal",
  color: "green",
};

Button.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
