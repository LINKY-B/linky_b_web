import PropTypes from "prop-types";
import { IconButtonStyled } from "./Buttons.style";
import { PlusCircleIcon } from "components/Icon/Icon";

/**
 * DotAddButton component
 *
 * @param {function} onClick 이벤트 함수
 * @returns 스타일 적용된 컴포넌트 반환
 *
 */
const DotAddButton = ({ onClick }) => {
  return (
    <IconButtonStyled className="DotAddButton" onClick={onClick}>
      <PlusCircleIcon />
    </IconButtonStyled>
  );
};

DotAddButton.propTypes = {
  onClick: PropTypes.func,
};

export default DotAddButton;
