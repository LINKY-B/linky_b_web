import PropTypes from "prop-types";
import { SelectButtonStyled } from "./Buttons.style";

/**
 * SelectButton component
 *
 * @param {string} id 버튼id
 * @param {string} type 버튼 종류(round, rectangle)
 * @param {boolean} isSelected true일 경우 초록색으로 스타일 바뀜
 * @param {function} onClick 이벤트 함수
 * @returns 스타일 적용된 컴포넌트 반환
 *
 */
const SelectButton = ({ id, type, isSelected, onClick, children }) => {
  return (
    <SelectButtonStyled
      id={id}
      type={type}
      isSelected={isSelected}
      onClick={onClick}
    >
      {children}
    </SelectButtonStyled>
  );
};

SelectButton.defaultProps = {
  type: "round",
  isSelected: false,
};

SelectButton.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  isSelected: PropTypes.bool,
  onclick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default SelectButton;
