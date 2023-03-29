import {
  InputWrapper,
  ButtonWrapper,
  MainLogoWrapper,
} from "pages/Login/Login.style";
import {
  FindPwdWrapper,
  PartialInputWrapper,
  TextWrapper,
} from "./FindPwd.style";
import Input from "components/inputs/Input";
import Spacing from "components/spacing/Spacing";
import Button from "components/buttons/Button";
import Text from "components/text/Text";
import MainLogo from "components/mainLogo/MainLogo";
import { useTheme } from "styled-components";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";
import { useState } from "react";

const FindPwd = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const err = "";
  const handleSubmit = () => {};

  return (
    <FindPwdWrapper>
      <MainLogoWrapper>
        <MainLogo top={35}></MainLogo>
      </MainLogoWrapper>
      <InputWrapper>
        <TextWrapper>
          <Text
            fontSize={theme.fontSize.md}
            fontWeignt={500}
            color={theme.colors.mainBlack}
          >
            비밀번호 찾기
          </Text>
          <Spacing margin={theme.spacing.sm}></Spacing>
        </TextWrapper>
        <PartialInputWrapper>
          <Input
            type="text"
            size="medium"
            value={id}
            placeholder="가입된 이메일을 입력해주세요"
            onChange={(e) => setId(e.target.value)}
          ></Input>
          <Spacing margin={theme.spacing.md}></Spacing>
          <Button size="small"> 인증번호 받기</Button>
        </PartialInputWrapper>
        {err === "" ? (
          <Spacing margin={theme.spacing.xl}></Spacing>
        ) : (
          <TextWrapper>
            <Text fontSize={theme.fontSize.sm}>{err}</Text>
          </TextWrapper>
        )}
        <PartialInputWrapper>
          <Input type="text" size="medium" placeholder=""></Input>
          <Spacing margin={theme.spacing.md}></Spacing>
          <Button size="small"> 인증번호 확인</Button>
        </PartialInputWrapper>

        {err === "" ? (
          <Spacing margin={theme.spacing.xl}></Spacing>
        ) : (
          <TextWrapper>
            <Text fontSize={theme.fontSize.sm}>{err}</Text>
          </TextWrapper>
        )}
      </InputWrapper>
      <ButtonWrapper>
        <Button onClick={handleSubmit}>
          이메일 인증으로 비밀번호 변경하기
        </Button>
      </ButtonWrapper>
    </FindPwdWrapper>
  );
};

export default FindPwd;
