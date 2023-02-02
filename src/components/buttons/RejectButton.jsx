import { RejectButtonStyled } from "./Buttons.style";
import PropTypes from "prop-types";

/**
 * RejectButton component
 *
 * @param {function} onClick 이벤트 함수
 * @returns 스타일 적용된 컴포넌트 반환
 *
 */
const RejectButton = ({ onClick }) => {
  return (
    <RejectButtonStyled
      className="RejectButton"
      onClick={onClick}
    ></RejectButtonStyled>
  );
};

RejectButton.propTypes = {
  onClick: PropTypes.func,
};

export default RejectButton;
