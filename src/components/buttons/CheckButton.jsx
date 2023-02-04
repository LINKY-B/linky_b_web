import { IconButtonStyled } from "./Buttons.style";
import PropTypes from "prop-types";
import { CheckCircleIcon } from "components/Icon/CheckCircleIcon";
import { useTheme } from "styled-components";

/**
 * CheckButton component
 *
 * @param {boolean} isChecked true일 경우 초록색 false인 경우 회색
 * @param {function} onClick 이벤트 함수
 * @returns 스타일 적용된 컴포넌트 반환
 *
 */
const CheckButton = ({ isChecked, onClick, inversed }) => {
  const theme = useTheme();
  const color = isChecked ? theme.colors.mainGreen : theme.colors.fontGrey;

  return (
    <IconButtonStyled className="CheckButton" onClick={onClick}>
      <CheckCircleIcon color={color} inversed={inversed} />
    </IconButtonStyled>
  );
};

CheckButton.defaultProps = {
  isChecked: true,
  inversed: false,
};

CheckButton.propTypes = {
  isChecked: PropTypes.bool,
  inversed: PropTypes.bool,
  onClick: PropTypes.func,
};

export default CheckButton;
