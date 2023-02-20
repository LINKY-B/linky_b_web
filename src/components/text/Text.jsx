import PropTypes from "prop-types";
import { StyledText } from "./Text.style";

export const Text = ({ fontSize, color, fontWeight, children, whiteSpace }) => {
  return (
    <StyledText
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      whiteSpace={whiteSpace}
    >
      {children}
    </StyledText>
  );
};

Text.propTypes = {
  fontSize: PropTypes.string,
  color: PropTypes.string,
  fontWeight: PropTypes.number,
  whiteSpace: PropTypes.string,
};

export default Text;
