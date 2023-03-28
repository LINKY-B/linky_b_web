import Button from "components/buttons/Button";
import Input from "components/inputs/Input";
import { useState } from "react";
import { ContentBox, FlexWrapper } from "./SignUp.style";

const InputButtonBox = ({
  title,
  placeholder,
  buttonText,
  handleClick,
  children,
}) => {
  const [inputValue, setInputValue] = useState("");

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <ContentBox className={title}>
      {children}
      <FlexWrapper>
        <Input
          name={title}
          size="small"
          value={inputValue}
          onChange={onChange}
          placeholder={placeholder}
        ></Input>
        <Button size="small" onClick={() => handleClick(inputValue)}>
          {buttonText}
        </Button>
      </FlexWrapper>
    </ContentBox>
  );
};

export default InputButtonBox;
