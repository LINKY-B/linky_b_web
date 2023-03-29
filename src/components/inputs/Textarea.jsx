import { TextareaStyled } from "./inputs.style";
import PropTypes from "prop-types";

/**
 * Textarea component
 *
 * @param {string} value 입력 값
 * @param {string} width 크기
 * @param {function} onChange 이벤트 함수
 * @param {function} onBlur 이벤트 함수
 * @param {string} placeholder 대체 입력 문구
 * @param {number} maxLength 최대 입력 길이 제한
 * @returns 스타일 적용된 컴포넌트 반환
 *
 */
const Textarea = ({
  value,
  width,
  onChange,
  onBlur,
  placeholder,
  maxLength,
}) => {
  return (
    <TextareaStyled
      className="Textarea"
      value={value}
      width={width}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      maxLength={maxLength}
    ></TextareaStyled>
  );
};

Textarea.propTypes = {
  value: PropTypes.string,
  width: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
};

export default Textarea;
