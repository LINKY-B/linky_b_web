import { DotAddButtonStyled } from "./Buttons.style";
import PropTypes from "prop-types";

/**
 * DotAddButton component
 *
 * @param {function} onClick 이벤트 함수
 * @returns 스타일 적용된 컴포넌트 반환
 *
 */
const DotAddButton = ({ onClick }) => {
  return (
    <DotAddButtonStyled
      className="DotAddButton"
      onClick={onClick}
    ></DotAddButtonStyled>
  );
};

DotAddButton.propTypes = {
  onClick: PropTypes.func,
};

export default DotAddButton;