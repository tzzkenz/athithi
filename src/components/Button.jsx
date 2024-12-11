import { Button } from "@mui/material";
import PropTypes from "prop-types";

export default function ButtonComponent({
  text,
  variant = "contained",
  color = "primary",
  onClick,
}) {
  return (
    <Button variant={variant} color={color} onClick={onClick}>
      {text}
    </Button>
  );
}

ButtonComponent.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};
