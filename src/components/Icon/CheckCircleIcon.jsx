import PropTypes from "prop-types";

import { ReactComponent as CheckSolidCircleIcon } from "assets/svgs/check_solid_circle.svg";
import { ReactComponent as CheckFillCircleIcon } from "assets/svgs/check_fill_circle.svg";

const CustomCheckSolidCircleIcon = ({ color, width, height }) => {
  return <CheckSolidCircleIcon fill={color} width={width} height={height} />;
};

const CustomCheckFillCircleIcon = ({ color, width, height }) => {
  return <CheckFillCircleIcon fill={color} width={width} height={height} />;
};

const CustomCheckCircleIcon = ({ color, inversed, width, height }) => {
  const Icon = inversed
    ? CustomCheckFillCircleIcon
    : CustomCheckSolidCircleIcon;
  return <Icon color={color} width={width} height={height} />;
};

CustomCheckCircleIcon.propTypes = {
  color: PropTypes.string,
  inversed: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
};

CustomCheckCircleIcon.defaultProps = {
  color: "#9FC743",
  width: "1em",
  height: "1em",
};

export { CustomCheckCircleIcon as CheckCircleIcon };
