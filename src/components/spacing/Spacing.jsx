import { StyledSpacing } from "./Spacing.style";
import PropTypes from "prop-types";

export const Spacing = ({ margin }) => {
  return <StyledSpacing margin={margin}></StyledSpacing>;
};

Spacing.propTypes = {
  margin: PropTypes.string,
};

export default Spacing;
