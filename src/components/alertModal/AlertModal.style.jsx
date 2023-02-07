import styled from "styled-components";

export const AlertModalWrapper = styled.div`
  z-index: 100;
  width: 300px;

  position: fixed;
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
  align-items: center;
  text-align: center;

  margin: 0;
  padding: 0.5rem;
  padding-top: 0;
`;
