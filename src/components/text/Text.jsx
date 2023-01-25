import PropTypes from "prop-types";
import { StyledText } from "./Text.style";

export const Text = ({ fontSize, color, children }) => {
  return (
    <StyledText fontSize={fontSize} color={color}>
      {children}
    </StyledText>
  );
};

Text.propTypes = {
  fontSize: PropTypes.string,
  color: PropTypes.string,
};

export default Text;
