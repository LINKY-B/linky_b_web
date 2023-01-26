import styled from "styled-components";

export const StyledText = styled.span`
  font-size: ${(props) => props.fontSize || props.theme.fontSize.md};
  color: ${(props) => props.color || props.theme.colors.mainBlack};
  white-space: pre-line;
`;
