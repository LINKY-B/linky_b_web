import { SelectOptionStyled } from "./inputs.style";
import PropTypes from "prop-types";

/**
 * SelectOption component
 *
 * @param {string} value 값
 * @param {string} defaultValue 기본 값(대체문구)
 * @param {string} name 컴포넌트 이름
 * @param {string} width 넓이 "150px"
 * @param {function} onChange 이벤트 함수
 * @param {Array} options 배열
 * @returns 스타일 적용된 컴포넌트 반환
 */
const SelectOption = ({
  value,
  defaultValue,
  name,
  width,
  onChange,
  options,
}) => {
  return (
    <SelectOptionStyled
      name={name}
      value={value}
      width={width}
      onChange={onChange}
    >
      <option value="" defaultValue>
        {defaultValue}
      </option>
      {options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </SelectOptionStyled>
  );
};

SelectOption.propTypes = {
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
};

SelectOption.defaultProps = {
  defaultValue: "기본값을 선택해 주세요",
};
export default SelectOption;
