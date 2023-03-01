import {
  LoginWrapper,
  MainLogoWrapper,
  LoginForm,
  ButtonWrapper,
  FooterWrapper,
  Container,
  InputWrapper,
  BottomButton,
} from "./Login.style";

import React, { useState } from "react";
import { useTheme } from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { authSlice } from "store/ducks/authSlice";
import { authService } from "utils/apis/authService";

/* component */
import MainLogo from "components/mainLogo/MainLogo";
import ChangePassword from "pages/Login/ChangePassword";
import Input from "components/inputs/Input";
import Spacing from "components/spacing/Spacing";
import Button from "components/buttons/Button";
import Text from "components/text/Text";

const Login = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [findPwd, setFindPwd] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    //login Logic
    try {
      const token = await authService.login(id, password);

      dispatch(authSlice.actions.loginSuccess(token));
      navigate("/", { replace: true });
    } catch (err) {
      dispatch(authSlice.actions.loginFailure(err));
      console.log(err);
      setErr(err.message); //임시 에러처리
    }
  };
  console.log(findPwd);

  const handleFindPassword = () => {
    setFindPwd(true);
  };
  return (
    <LoginWrapper>
      <MainLogoWrapper>
        <MainLogo top={35}></MainLogo>
      </MainLogoWrapper>

      <Container>
        {findPwd ? (
          <ChangePassword></ChangePassword>
        ) : (
          <div>
            <LoginForm onSubmit={handleSubmit}>
              <InputWrapper>
                <Input
                  type="text"
                  size="large"
                  value={id}
                  placeholder="이메일"
                  onChange={(e) => setId(e.target.value)}
                ></Input>
                {err === "" ? (
                  <Spacing margin={theme.spacing.xl}></Spacing>
                ) : (
                  <Text>{err}</Text>
                )}
                <Input
                  type="password"
                  size="large"
                  value={password}
                  placeholder="비밀번호"
                  onChange={(e) => setPassword(e.target.value)}
                ></Input>
                {err === "" ? (
                  <Spacing margin={theme.spacing.xl}></Spacing>
                ) : (
                  <Text>{err}</Text>
                )}
              </InputWrapper>
              <Spacing margin={theme.spacing.xl}></Spacing>
              <ButtonWrapper>
                <Button type="sumbit">로그인</Button>
              </ButtonWrapper>
              <Spacing margin={theme.spacing.sm}></Spacing>
            </LoginForm>
            <FooterWrapper>
              <BottomButton onClick={() => navigate("/signup")}>
                회원가입
              </BottomButton>
              <BottomButton onClick={handleFindPassword}>
                비밀번호찾기
              </BottomButton>
            </FooterWrapper>{" "}
          </div>
        )}
      </Container>
    </LoginWrapper>
  );
};
export default Login;
