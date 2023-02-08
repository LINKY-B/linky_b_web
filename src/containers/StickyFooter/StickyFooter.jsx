import {
  StickyFooterContainer,
  StyledStickyFooter,
} from "./StickyFooter.style";

export const StickyFooter = ({ children }) => {
  return (
    <StyledStickyFooter>
      <StickyFooterContainer>{children}</StickyFooterContainer>
    </StyledStickyFooter>
  );
};

export default StickyFooter;
