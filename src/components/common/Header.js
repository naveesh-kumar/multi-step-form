import { theme } from "../../theme";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { withStyles } from "@mui/styles";

const styles = {
  root: {
    width: ((props) => props.width) || "100%",
  },
};

const Header = ({ classes, mainHeaderTxt, subHeaderTxt, width }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("mobile"));

  return (
    <Box className={classes.root}>
      <Typography
        variant="h5"
        fontWeight={700}
        color={theme.palette.blue.marine}
        letterSpacing={0.2}
        gutterBottom={isMobile ? true : false}
      >
        {mainHeaderTxt}
      </Typography>
      <Typography
        variant="caption"
        color={theme.palette.gray.cool}
        fontSize={isMobile ? 16 : 12}
      >
        {subHeaderTxt}
      </Typography>
    </Box>
  );
};

export default withStyles(styles)(Header);
