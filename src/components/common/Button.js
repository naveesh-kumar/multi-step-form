import { Button as MuiButton, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";

const styles = {
  root: {
    color: (props) => `${props.contrastText} !important`,
    boxShadow: "none",
    "&:hover": {
      color: (props) => `${props.hoverTextColor} !important`,
      background: (props) => `${props.hoverBtnColor} !important`,
      boxShadow: "none",
    },
  },
};

const Button = ({
  classes,
  label,
  color,
  variant,
  contrastText = "white",
  hoverTextColor,
  hoverBtnColor,
  ...restProps
}) => {
  return (
    <MuiButton
      className={classes.root}
      variant={variant}
      color={color}
      {...restProps}
    >
      <Typography variant="body2">{label}</Typography>
    </MuiButton>
  );
};

export default withStyles(styles)(Button);
