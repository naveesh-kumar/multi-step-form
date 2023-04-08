import { theme } from "../../theme";
import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    margin: "5px 0",
    "& p": {
      [theme.breakpoints.down("mobile")]: {
        fontSize: "14px",
      },
    },
  },
};

const TwoCoulmnRow = ({ classes, rowKey, value, yearlyBilling }) => {
  return (
    <div className={classes.root}>
      <Typography variant="caption" color={theme.palette.gray.cool}>
        {rowKey}
      </Typography>
      <Typography variant="caption" color={theme.palette.blue.marine}>
        ${value}
        {yearlyBilling ? "/yr" : "/mo"}
      </Typography>
    </div>
  );
};

export default withStyles(styles)(TwoCoulmnRow);
