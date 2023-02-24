import MainLogo from "components/mainLogo/MainLogo";
import {
  LoginWrapper,
  MainLogoWrapper,
  LoginForm,
  ButtonWrapper,
  FooterWrapper,
  Container,
} from "./Login.style";
import Input from "components/inputs/Input";
import { useState } from "react";
import Spacing from "components/spacing/Spacing";
import { useTheme } from "styled-components";
import Button from "components/buttons/Button";
const Login = () => {
  const theme = useTheme();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //login Logic
  };
  return (
    <LoginWrapper>
      <MainLogoWrapper>
        <MainLogo top={35}></MainLogo>
      </MainLogoWrapper>
      <Container>
        <LoginForm onSubmit={handleSubmit}>
          <Input
            type="number"
            size="large"
            value={id}
            placeholder="휴대폰 번호"
            onChange={(e) => setId(e.target.value)}
          ></Input>
          <Spacing margin={theme.spacing.xl}></Spacing>
          <Input
            type="password"
            size="large"
            value={password}
            placeholder="비밀번호"
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
          <Spacing margin={theme.spacing.xl}></Spacing>
        </LoginForm>
        <Spacing margin={theme.spacing.xl}></Spacing>
        <ButtonWrapper>
          <Button type="sumbit">로그인</Button>
        </ButtonWrapper>
        <FooterWrapper>
          <button>회원가입</button>
          <button>비밀번호찾기</button>
        </FooterWrapper>
      </Container>
    </LoginWrapper>
  );
};
export default Login;
