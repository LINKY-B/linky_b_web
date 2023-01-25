import Button from "components/Button";
import Input from "components/Input";
import { useState } from "react";

const Test = () => {
  const [input, setInput] = useState({
    name: "",
    nick: "",
    password: "",
  });
  const { name, nick, password } = input;

  const onChange = (e) => {
    console.log(e.target.name);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onClick = () => {
    alert("버튼을 클릭했다!");
  };

  return (
    <>
      <div>
        <Input
          type="text"
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
          value={password}
          placeholder="비밀번호 테스트."
          onChange={onChange}
          width="210px"
        ></Input>
      </div>
      <div>
        <Button color="mainGreen" onClick={onClick}>
          다음
        </Button>
      </div>
      <div>
        <Button color="mainGrey" onClick={onClick} modal>
          다음
        </Button>
      </div>
    </>
  );
};

export default Test;
