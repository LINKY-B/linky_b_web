import styled, { css } from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
`;

export const MainLogoWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  max-height: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  min-height: 200px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  flex: 1;
  max-height: 200px;
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-height: 30px;
  width: 310px;
  min-width: 200px;
  margin: 10px;
  flex: 1;
  overflow: hidden;
`;

export const BottomButton = styled.button`
  color: #878787;
`;
