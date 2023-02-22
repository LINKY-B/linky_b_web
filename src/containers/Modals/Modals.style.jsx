import { TextareaStyled } from "components/inputs/inputs.style";
import styled from "styled-components";

export const ModalButtonWrapper = styled.div`
  // border: 1px solid blue;
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
`;

export const ModalButton = styled.button`
  // border: 1px solid pink;
  width: 100%;
  padding: 0.5rem 0;
`;

export const ReportModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const SelectButtonWrapper = styled.div`
  display: flex;
  padding: 0;
  width: 95%;
  flex-wrap: wrap;
  gap: 0.3rem 0.3rem;
`;

export const ReportTextArea = styled(TextareaStyled)`
  font-size: ${(props) => props.theme.fontSize.xxs};
  // border: 1px solid red;
  width: 95%;
`;
