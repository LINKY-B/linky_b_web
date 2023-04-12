import { ButtonStyled } from "./Buttons.style";
import PropTypes from "prop-types";

/**
 * Button component
 *
 * @param {string} size 버튼 사이즈(normal, modal, half, small)
 * @param {string} color 버튼 색상(green, grey)
 * @param {boolean} shadow 그림자
 * @param {function} onClick 이벤트 함수
 * @returns 스타일 적용된 컴포넌트 반환
 *
 */
const Button = ({ size, color, shadow, onClick, children }) => {
  return (
    <ButtonStyled
      className="Button"
      size={size}
      color={color}
      shadow={shadow}
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
  shadow: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
