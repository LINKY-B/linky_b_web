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

import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

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
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  console.log(from);
  // const userRef = useRef(null);

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState({ id: "", pw: "" });
  const [findPwd, setFindPwd] = useState(false);

  const { isLoading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    // userRef.current.focus();
  });

  useEffect(() => {
    setErrMsg("");
  }, [id, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //login Logic
    // dispatch(await authService.login(id, password));
    try {
      const token = await authService.login(id, password);
      dispatch(authSlice.actions.loginSuccess(token));
      navigate(from, { replace: true });
    } catch (err) {
      dispatch(authSlice.actions.loginFailure(err));
      console.log(err);
    }
  };

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
                  placeholder="?????????"
                  // ref={userRef}
                  onChange={(e) => setId(e.target.value)}
                ></Input>
                {!error?.code === "001" ? (
                  <Spacing margin={theme.spacing.xl}></Spacing>
                ) : (
                  <Text fontSize={theme.fontSize.sm} color="red">
                    {error?.message}
                  </Text>
                )}
                <Input
                  type="password"
                  size="large"
                  value={password}
                  placeholder="????????????"
                  onChange={(e) => setPassword(e.target.value)}
                ></Input>
                {/* ????????? ?????????????????? id????????? pw????????? ?????? ????????? ?????? ??????????????? */}
                {!error?.code === "002" ? (
                  <Spacing margin={theme.spacing.xl}></Spacing>
                ) : (
                  <Text
                    fontSize={theme.fontSize.sm}
                    color="red"
                    aria-live="assertive"
                  >
                    {error?.message}
                  </Text>
                )}
              </InputWrapper>
              <Spacing margin={theme.spacing.xl}></Spacing>
              <ButtonWrapper>
                <Button type="sumbit">?????????</Button>
              </ButtonWrapper>
              <Spacing margin={theme.spacing.sm}></Spacing>
            </LoginForm>
            <FooterWrapper>
              <BottomButton onClick={() => navigate("/signup")}>
                ????????????
              </BottomButton>
              <BottomButton onClick={handleFindPassword}>
                ??????????????????
              </BottomButton>
            </FooterWrapper>
          </div>
        )}
      </Container>
    </LoginWrapper>
  );
};
export default Login;
