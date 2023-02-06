import { IconButtonStyled } from "./Buttons.style";
import PropTypes from "prop-types";
import { CheckCircleIcon } from "components/Icon/CheckCircleIcon";
import { useTheme } from "styled-components";

/**
 * CheckButton component
 *
 * @param {string} name 버튼 구분을 위한 이름
 * @param {boolean} isChecked true일 경우 초록색 false인 경우 회색
 * @param {function} onClick 이벤트 함수
 * @param {boolean} inversed 반전
 * @returns 스타일 적용된 컴포넌트 반환
 *
 */
const CheckButton = ({ name, isChecked, onClick, inversed }) => {
  const theme = useTheme();
  const color = isChecked ? theme.colors.mainGreen : theme.colors.fontGrey;

  return (
    <IconButtonStyled className="CheckButton" name={name} onClick={onClick}>
      <CheckCircleIcon color={color} inversed={inversed} />
    </IconButtonStyled>
  );
};

CheckButton.defaultProps = {
  isChecked: true,
  inversed: false,
};

CheckButton.propTypes = {
  name: PropTypes.string,
  isChecked: PropTypes.bool,
  inversed: PropTypes.bool,
  onClick: PropTypes.func,
};

export default CheckButton;
