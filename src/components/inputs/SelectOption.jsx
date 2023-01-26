import { SelectOptionStyled } from "./inputs.style";
import PropTypes from "prop-types";

/**
 * SelectOption component
 *
 * @param {string} defaultValue 기본 값
 * @param {string} name 컴포넌트 이름
 * @param {function} onChange 이벤트 함수
 * @param {Array} options [{value:"재학"},{value:"졸업"},...]과 같은 형식을 갖는 배열
 * @returns 스타일 적용된 컴포넌트 반환
 */
const SelectOption = ({ defaultValue, name, onChange, options }) => {
  return (
    <SelectOptionStyled name={name} onChange={onChange}>
      <option value="none" defaultValue>
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.value}
        </option>
      ))}
    </SelectOptionStyled>
  );
};

SelectOption.propTypes = {
  defaultValue: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
};

export default SelectOption;
