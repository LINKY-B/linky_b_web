import styled from "styled-components";

export const StyledText = styled.span`
  font-size: ${(props) => props.fontSize || props.theme.fontSize.md};
  font-weight: ${(props) => props.fontWeight || 400};
  color: ${(props) => props.color || props.theme.colors.mainBlack};
  white-space: pre-line;
`;
