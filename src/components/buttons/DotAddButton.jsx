import { PlusDottedCircleIcon } from "components/Icon/Icon";
import PropTypes from "prop-types";
import { IconButtonStyled } from "./Buttons.style";

/**
 * DotAddButton component
 *
 * @param {string} name 이름
 * @param {function} onClick 이벤트 함수
 * @returns 스타일 적용된 컴포넌트 반환
 *
 */
const DotAddButton = ({ name, onClick }) => {
  return (
    <IconButtonStyled name={name} onClick={onClick}>
      <PlusDottedCircleIcon />
    </IconButtonStyled>
  );
};

DotAddButton.propTypes = {
  onClick: PropTypes.func,
};

export default DotAddButton;
