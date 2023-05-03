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

import React, { useState, useCallback, useRef, useEffect } from "react";
import { useTheme } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import { authSlice } from "store/ducks/authSlice";
import { authService } from "utils/apis/authService";

/* component */
import MainLogo from "components/mainLogo/MainLogo";
import ChangePassword from "pages/FindPwd/FindPwd";
import Input from "components/inputs/Input";
import Spacing from "components/spacing/Spacing";
import Button from "components/buttons/Button";
import Text from "components/text/Text";

const Login = React.memo(() => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const { error } = useSelector((state) => state.auth);

  useEffect(() => {}, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    //login Logic
    try {
      const accessToken = await authService.login(id, password);
      dispatch(authSlice.actions.loginSuccess({ accessToken }));
      navigate(from, { replace: true });
    } catch (err) {
      console.log("message" + err);
      console.error(err);
      dispatch(authSlice.actions.loginFailure(err));

      throw err;
    }
  });
  const handleFindPassword = () => {
    navigate("/findpwd");
  };
  console.log("login auth error: " + JSON.stringify(error, null, 2));
  console.log();
  return (
    <LoginWrapper>
      <MainLogoWrapper>
        <MainLogo top={35}></MainLogo>
      </MainLogoWrapper>
      <Container>
        <LoginForm onSubmit={handleSubmit}>
          <InputWrapper>
            <Input
              type="text"
              size="large"
              value={id}
              placeholder="이메일"
              onChange={(e) => setId(e.target.value)}
            ></Input>
            {error?.errors[0].field === "email" ? (
              <div>
                <Spacing margin={theme.spacing.xs}></Spacing>
                <Text fontSize={theme.fontSize.xs}>
                  {error.errors[0].reason}
                </Text>
                <Spacing margin={theme.spacing.xs}></Spacing>
              </div>
            ) : (
              <Spacing margin={theme.spacing.xl}></Spacing>
            )}
            <Input
              type="password"
              size="large"
              value={password}
              placeholder="비밀번호"
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
            {/* 백엔드 에러메세지를 id오류와 pw오류를 따로 객체화 시켜 보내줘야함 */}
            {error?.errors[0].field === "password" ? (
              <div>
                <Spacing margin={theme.spacing.xs}></Spacing>
                <Text fontSize={theme.fontSize.xs}>
                  {" "}
                  {error.errors[0].reason}
                </Text>
                <Spacing margin={theme.spacing.xs}></Spacing>
              </div>
            ) : (
              <Spacing margin={theme.spacing.xl}></Spacing>
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
          <BottomButton onClick={handleFindPassword}>비밀번호찾기</BottomButton>
        </FooterWrapper>
      </Container>
    </LoginWrapper>
  );
});
export default Login;
