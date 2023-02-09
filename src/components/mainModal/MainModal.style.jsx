import styled from "styled-components";

export const MainModalWrapper = styled.div`
  position: fixed;
  z-index: 100;
  padding: 0;
  bottom: 0;
  width: var(--app-max-width, 100%);
  max-width: var(--app-max-width, 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: none;
  // border: 5px solid orange;
`;

export const ContentWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.mainWhite};
  border-radius: 6px;
  text-align: center;
  max-height: calc(var(--vh, 1vh) * 95);
  min-height: calc(var(--vh, 1vh) * 20);

  padding: 0 1rem;
  display: flex;
  flex-direction: column;
`;

export const MainModalButton = styled.button`
  height: calc(var(--vh, 1vh) * 9);
  font-weight: 700;
  padding: 1rem;
  border-radius: 6px;
  color: ${(props) => props.color || props.theme.colors.fortGreen};
  background-color: ${(props) =>
    props.backgroundColor || props.theme.colors.mainWhite};
`;
