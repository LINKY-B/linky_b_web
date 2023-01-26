import { TextareaStyled } from "./inputs.style";
import PropTypes from "prop-types";

/**
 * Textarea component
 *
 * @param {string} value 입력 값
 * @param {function} onChange 이벤트 함수
 * @param {string} placeholder 대체 입력 문구
 * @returns 스타일 적용된 컴포넌트 반환
 *
 */
const Textarea = ({ value, onChange, placeholder }) => {
  return (
    <TextareaStyled
      className="Textarea"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    ></TextareaStyled>
  );
};

Textarea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default Textarea;
