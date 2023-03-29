import { Box, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import Step from "./Step";
import { theme } from "../../theme";

const styles = {
  root: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  textContent: {
    textTransform: "uppercase",
    color: theme.palette.common.white,
    marginLeft: "15px",
    "& p:last-child": {
      letterSpacing: "0.8px",
    },
  },
};

const StepContainer = ({ classes, label, variant, textContent }) => {
  return (
    <Box className={classes.root}>
      <Step variant={variant} label={label} />
      <Box className={classes.textContent}>
        <Typography variant="body2" fontSize="10px">
          Step {label}
        </Typography>
        <Typography variant="body2" fontWeight="600" fontSize="12px">
          {textContent}
        </Typography>
      </Box>
    </Box>
  );
};

export default withStyles(styles)(StepContainer);
