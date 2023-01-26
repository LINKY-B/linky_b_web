import { InputStyled } from "./inputs.style";
import PropTypes from "prop-types";

/**
 * Input component
 *
 * @param {string} type text(기본값), password, ...
 * @param {string} size large(기본값), medium, small
 * @param {string} name 컴포넌트 이름
 * @param {string} value 입력 값
 * @param {string} placeholder 대체 입력 문구
 * @param {function} onChange 이벤트 함수
 * @returns 스타일 적용된 컴포넌트 반환
 *
 */
const Input = ({ type, size, name, value, placeholder, onChange }) => {
  return (
    <InputStyled
      type={type}
      size={size}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    ></InputStyled>
  );
};

Input.defaultProps = {
  type: "text",
  size: "large",
};

Input.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
