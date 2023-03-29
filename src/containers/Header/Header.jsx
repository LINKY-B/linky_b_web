import { memo } from "react";
import { Container, StyledHeader } from "./Header.style";

const Header = ({ children }) => {
  return (
    <StyledHeader>
      <Container>{children}</Container>
    </StyledHeader>
  );
};
export default memo(Header);
