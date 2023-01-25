import { TopButtonStyled } from "./Buttons.style";
import PropTypes from "prop-types";

/**
 * TopButton component
 *
 * @param {function} onClick 이벤트 함수
 * @returns 스타일 적용된 컴포넌트 반환
 *
 */
const TopButton = ({ onClick }) => {
  return (
    <TopButtonStyled className="TopButton" onClick={onClick}></TopButtonStyled>
  );
};

TopButton.propTypes = {
  onClick: PropTypes.func,
};

export default TopButton;
