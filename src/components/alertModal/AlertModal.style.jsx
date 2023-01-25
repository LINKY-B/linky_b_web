import styled from "styled-components";

export const AlertModalWrapper = styled.div`
  z-index: 100;
  min-width: 269px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 6px;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.mainWhite};
`;

export const CloseButtonWrapper = styled.div`
  width: 100%;
  text-align: right;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 1rem;
  padding-top: 0;
`;

export const TempButton = styled.button`
  padding: 1rem;
  border-radius: 6px;
  color: ${(props) => props.color || props.theme.colors.mainWhite};
  background-color: ${(props) =>
    props.backgroundColor || props.theme.colors.mainGreen};
`;
