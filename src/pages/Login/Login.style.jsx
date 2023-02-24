import styled, { css } from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 95vh;
  overflow: hidden;
`;

export const MainLogoWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  flex: 1;
  max-height: 400px;

  display: flex;
  flex-direction: column;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  //   position: absolute;
  //   top: 60%;
  //   left: 50%;
  //   transform: translate(-50%, -50%);

  max-height: 50px;
  flex: 1;
`;

export const ButtonWrapper = styled.div`
  position: relative;
  flex: 1;
  max-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: end;
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
