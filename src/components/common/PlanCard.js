import { theme } from "../../theme";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { withStyles } from "@mui/styles";

const styles = {
  root: {
    width: "90px",
    height: "auto",
    border: (props) =>
      props.highlightBorder
        ? `1px solid ${theme.palette.blue.purplish}`
        : `1px solid ${theme.palette.gray.light}`,
    borderRadius: "6px",
    padding: "10px",
    gap: "30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    "&:hover": {
      cursor: "pointer",
    },
    [theme.breakpoints.down("mobile")]: {
      width: "100%",
      flexDirection: "row",
      alignItems: "start",
      justifyContent: "start",
      gap: "15px",
    },
  },
};

const PlanCard = ({
  classes,
  imgSrc,
  planName,
  planPrice,
  yearlyBilling,
  discountMsg,
  handleClick,
  highlightBorder,
}) => {
  const isMobile = useMediaQuery(theme.breakpoints.down("mobile"));
  return (
    <div className={classes.root} tabIndex={1} onClick={handleClick}>
      <img
        src={imgSrc}
        alt={planName}
        width={isMobile ? 40 : 30}
        height={isMobile ? 40 : 30}
      />
      <Box>
        <Box>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            color={theme.palette.blue.marine}
            fontSize={isMobile ? 16 : 14}
            textOverflow="ellipsis"
          >
            {planName}
          </Typography>
        </Box>
        <Typography variant="caption" color={theme.palette.gray.cool}>
          ${planPrice}
          {yearlyBilling ? "/yr" : "/mo"}
        </Typography>
        {yearlyBilling && (
          <Typography
            variant="subtitle2"
            fontSize={isMobile ? 14 : 12}
            color={theme.palette.blue.marine}
          >
            {discountMsg}
          </Typography>
        )}
      </Box>
    </div>
  );
};

export default withStyles(styles)(PlanCard);
