import PropTypes from "prop-types";

import { ReactComponent as CheckSolidCircleIcon } from "assets/svgs/check_solid_circle.svg";
import { ReactComponent as CheckFillCircleIcon } from "assets/svgs/check_fill_circle.svg";

const CustomCheckSolidCircleIcon = ({ color }) => {
  return <CheckSolidCircleIcon fill={color} />;
};

const CustomCheckFillCircleIcon = ({ color }) => {
  return <CheckFillCircleIcon fill={color} />;
};

const CustomCheckCircleIcon = ({ color, inversed }) => {
  const Icon = inversed
    ? CustomCheckFillCircleIcon
    : CustomCheckSolidCircleIcon;
  return <Icon color={color} />;
};

CustomCheckCircleIcon.propTypes = {
  color: PropTypes.string,
  inversed: PropTypes.bool,
};

CustomCheckCircleIcon.defaultProps = {
  color: "#9FC743",
};

export { CustomCheckCircleIcon as CheckCircleIcon };
