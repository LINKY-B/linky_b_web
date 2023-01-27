import { CheckButtonStyled } from "./Buttons.style";
import PropTypes from "prop-types";

/**
 * CheckButton component
 *
 * @param {boolean} isChecked true일 경우 초록색 false인 경우 회색
 * @param {function} onClick 이벤트 함수
 * @returns 스타일 적용된 컴포넌트 반환
 *
 */
const CheckButton = ({ isChecked, onClick }) => {
  return (
    <CheckButtonStyled
      className="CheckButton"
      isChecked={isChecked}
      onClick={onClick}
    ></CheckButtonStyled>
  );
};

CheckButton.defaultProps = {
  isChecked: true,
};

CheckButton.propTypes = {
  isChecked: PropTypes.bool,
  onClick: PropTypes.func,
};

export default CheckButton;
