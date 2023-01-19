import styled from "styled-components";

export const Hr = styled.hr`
  width: 100%;
`;

/**
 * @param margin default: theme.md
 */
export const Spacing = styled.div`
  margin: ${(props) => props.margin || props.theme.spacing.md};
`;
