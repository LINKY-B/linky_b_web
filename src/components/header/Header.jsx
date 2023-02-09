import { Container, StyledHeader } from "./Header.style";

export const Header = ({ children }) => {
  return (
    <StyledHeader>
      <Container>{children}</Container>
    </StyledHeader>
  );
};
