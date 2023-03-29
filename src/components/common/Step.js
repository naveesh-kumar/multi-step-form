import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import { theme } from "../../theme";

const styles = {
  root: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: (props) =>
      props.variant === "noFill" ? "transparent" : theme.palette.blue.light,
    color: (props) =>
      props.variant === "noFill"
        ? theme.palette.common.white
        : theme.palette.blue.marine,
    border: (props) =>
      props.variant === "noFill"
        ? `1px solid ${theme.palette.common.white}`
        : "",
  },
};

const Step = ({ classes, label, variant }) => {
  return (
    <div className={classes.root}>
      <Typography variant="body2" fontWeight="600">
        {label}
      </Typography>
    </div>
  );
};

export default withStyles(styles)(Step);
