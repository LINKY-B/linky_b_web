import DotAddButton from "components/buttons/DotAddButton";
import Button from "components/buttons/Button";
import CheckButton from "components/buttons/CheckButton";
import Input from "components/inputs/Input";
import SelectButton from "components/buttons/SelectButton";
import TopButton from "components/buttons/TopButton";
import { useState } from "react";
import Textarea from "components/inputs/Textarea";
import SelectOption from "components/inputs/SelectOption";

const Test = () => {
  const [input, setInput] = useState({
    name: "",
    nick: "",
    password: "",
  });
  const { name, nick, password } = input;

  const [textArea, setTextArea] = useState("");

  const onChange = (e) => {
    console.log(e.target.name);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onClick = () => {
    alert("버튼을 클릭했다!");
  };

  const options = [{ value: "재학" }, { value: "졸업" }];

  return (
    <>
      <div>
        <Input
          type="text"
          size="medium"
          name="name"
          value={name}
          placeholder="본인 이름을 입력해 주세요."
          onChange={onChange}
        ></Input>
      </div>
      <div>
        <Input
          type="text"
          name="nick"
          value={nick}
          placeholder="닉네임을 입력해 주세요."
          onChange={onChange}
          width="230px"
        ></Input>
      </div>
      <div>
        <Input
          type="password"
          size="small"
          name="password"
          value={password}
          placeholder="비밀번호 테스트."
          onChange={onChange}
          width="210px"
        ></Input>
      </div>
      <div>
        <Button size="modal" color="green" onClick={onClick}>
          다음
        </Button>
        <Button size="half" color="grey" onClick={onClick}>
          다음
        </Button>
      </div>
      <div>
        <SelectButton
          id="1"
          type="rectangle"
          isSelected={true}
          onClick={onClick}
        >
          내향적
        </SelectButton>
        <SelectButton id="2" onclick={onClick}>
          외향적
        </SelectButton>
      </div>
      <div>
        <DotAddButton onClick={onClick}></DotAddButton>
      </div>
      <div>
        <TopButton onClick={onClick}></TopButton>
      </div>
      <div>
        <CheckButton isChecked={true} onClick={onClick}></CheckButton>
        <CheckButton isChecked={false} onClick={onClick}></CheckButton>
      </div>
      <div>
        <Textarea
          value={textArea}
          onChange={(e) => {
            setTextArea(e.target.value);
          }}
          placeholder="신고 사유를 적어주세요.(200자 이내)"
        ></Textarea>
      </div>
      <div>
        <SelectOption
          defaultValue="졸업 유무를 선택해 주세요"
          name="졸업유무"
          options={options}
        ></SelectOption>
      </div>
    </>
  );
};

export default Test;
