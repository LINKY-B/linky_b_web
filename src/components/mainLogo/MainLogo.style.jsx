import styled, { css } from "styled-components";
import { Icon } from "components/Icon/index";

export const MainLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
  min-height: 10vh;
  overflow: hidden;
`;

export const MainLogoImg = styled(Icon.MainLogoIcon)`
  overflow: hidden;
`;
