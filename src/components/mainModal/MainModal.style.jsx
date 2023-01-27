import styled from "styled-components";

export const MainModalWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 100;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: none;
`;

export const ContentWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.mainWhite};
  border-radius: 6px;
  min-height: calc(var(--vh, 1vh) * 30);
  max-height: calc(var(--vh, 1vh) * (65));

  padding: 1rem;
  text-align: center;
  color: ${(props) => props.theme.colors.fontGrey};

  display: flex;
  flex-direction: column;
`;

export const BottomButton = styled.button`
  height: calc(var(--vh, 1vh) * 9);
  width: 100%;
  padding: 1rem;
  border-radius: 6px;
  font-size: inherit;
  color: ${(props) => props.color || props.theme.colors.fortGreen};
  background-color: ${(props) =>
    props.backgroundColor || props.theme.colors.mainWhite};
`;
