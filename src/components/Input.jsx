import styled from "styled-components";

const InputStyled = styled.input`
  width: ${({width}) => width || '310px'};
  height: 36px;
  border: 1px solid #878787;
  border-radius: 6px;
  padding: 8px 1px 8px 11px;
  font-weight: 400;
  font-size: ${({theme}) => theme.fontSize.sm};
  line-height: 16px;
`;


const Input = ({type, name, value, placeholder, onChange, width}) => {
  return (
    <InputStyled
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      width={width}
    ></InputStyled>
  );
};

Input.defaultProps = {
  type: "text",
  onChange: () => {
    alert("onChange 이벤트에 대해 함수가 정의되지 않았습니다")
  }
}

export default Input;
