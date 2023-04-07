import { theme } from "../../theme";
import { Box, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";

const styles = {
  root: {
    width: ((props) => props.width) || "100%",
  },
};

const Header = ({ classes, mainHeaderTxt, subHeaderTxt, width }) => {
  return (
    <Box className={classes.root}>
      <Typography
        variant="h5"
        fontWeight={700}
        color={theme.palette.blue.marine}
        letterSpacing={0.2}
      >
        {mainHeaderTxt}
      </Typography>
      <Typography variant="caption" color={theme.palette.gray.cool}>
        {subHeaderTxt}
      </Typography>
    </Box>
  );
};

export default withStyles(styles)(Header);
