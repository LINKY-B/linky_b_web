import { InputWrapper, ButtonWrapper } from "pages/Login/Login.style";
import {
  ChangePasswordWrapper,
  PartialInputWrapper,
  TextWrapper,
} from "./ChangePassword.style";
import Input from "components/inputs/Input";
import Spacing from "components/spacing/Spacing";
import Button from "components/buttons/Button";
import Text from "components/text/Text";

import { useTheme } from "styled-components";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";
import { useState } from "react";

const ChangePassword = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const err = "error number 1";
  const handleSubmit = () => {};

  return (
    <ChangePasswordWrapper>
      <InputWrapper>
        <TextWrapper>
          <Text fontSize={theme.fontSize.lg} color={theme.colors.mainBlack}>
            비밀번호 찾기
          </Text>
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
          <Spacing margin={theme.spacing.lg}></Spacing>
        ) : (
          <TextWrapper>
            <Text fontSize={theme.fontSize.sm}>{err}</Text>
          </TextWrapper>
        )}
        <PartialInputWrapper>
          <Input type="text" size="medium" value={id} placeholder=""></Input>
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
    </ChangePasswordWrapper>
  );
};

export default ChangePassword;
