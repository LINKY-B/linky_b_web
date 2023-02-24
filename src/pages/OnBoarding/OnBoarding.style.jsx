import styled, { css } from "styled-components";
import Button from "components/buttons/Button";
import { Icon } from "components/Icon/index";
export const OnBoardingWrapper = styled.div`
  margin: 0 auto;
  display: flex;

  justify-content: center;
`;

export const MainLogoImg = styled(Icon.MainLogoIcon)``;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 80px;
`;
