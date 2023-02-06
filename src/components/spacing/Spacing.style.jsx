import styled from "styled-components";

export const StyledSpacing = styled.div`
  margin: ${(props) => props.margin || props.theme.spacing.md};
  overflow: auto;
`;
