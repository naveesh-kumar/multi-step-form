import { theme } from "../../theme";
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
    "& p": {
      textDecoration: (props) => (props.underline ? "underline" : ""),
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
  underline,
  ...restProps
}) => {
  const isMobile = theme.breakpoints.down("mobile");

  return (
    <MuiButton
      className={classes.root}
      variant={variant}
      color={color}
      {...restProps}
    >
      <Typography
        variant="body2"
        fontSize={isMobile ? 14 : 12}
        fontWeight={500}
      >
        {label}
      </Typography>
    </MuiButton>
  );
};

export default withStyles(styles)(Button);
