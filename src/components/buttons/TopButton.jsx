import PropTypes from "prop-types";
import { IconButtonStyled } from "./Buttons.style";
import { TopArrowCircleIcon } from "components/Icon/Icon";

/**
 * TopButton component
 *
 * @param {function} onClick 이벤트 함수
 * @returns 스타일 적용된 컴포넌트 반환
 *
 */
const TopButton = ({ onClick }) => {
  return (
    <IconButtonStyled className="TopButton" onClick={onClick}>
      <TopArrowCircleIcon />
    </IconButtonStyled>
  );
};

TopButton.propTypes = {
  onClick: PropTypes.func,
};

export default TopButton;
