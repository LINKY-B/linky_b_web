import styled from "styled-components";

export const StyledStickyFooter = styled.div`
  position: fixed;
  bottom: 0;
  width: var(--app-max-width, 100%);
  height: 60px;
`;

export const StickyFooterContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: var(--app-max-width);
  margin-left: auto;
  margin-right: auto;
  padding: 0;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;
