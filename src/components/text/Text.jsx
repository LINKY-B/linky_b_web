import PropTypes from "prop-types";
import { StyledText } from "./Text.style";

export const Text = ({ fontSize, color, fontWeight, children }) => {
  return (
    <StyledText fontSize={fontSize} fontWeight={fontWeight} color={color}>
      {children}
    </StyledText>
  );
};

Text.propTypes = {
  fontSize: PropTypes.string,
  color: PropTypes.string,
  fontWeight: PropTypes.number,
};

export default Text;
