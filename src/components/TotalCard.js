import { theme } from "../theme";
import { Box, Divider, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import Button from "./common/Button";
import TwoCoulmnRow from "./common/TwoCoulmnRow";

const styles = {
  root: {
    width: (props) => props.width,
    borderRadius: "6px",
    height: "auto",
    padding: "10px 15px",
    backgroundColor: theme.palette.gray.alabaster,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    margin: "5px 0",
    "& button": {
      padding: 0,
    },
  },
};

const TotalCard = ({
  classes,
  width,
  planPrice,
  planName,
  addOns,
  billingPeriod,
  handleChangeClick,
}) => {
  const yearlyBilling = billingPeriod === "yearly";

  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <div>
          <Typography
            variant="subtitle1"
            color={theme.palette.blue.marine}
            fontSize={14}
            fontWeight={600}
          >
            {planName} {yearlyBilling ? "(Yearly)" : "(Monthly)"}
          </Typography>
          <Button
            label="Change"
            variant="text"
            contrastText="grey"
            underline={true}
            hoverBtnColor="none"
            hoverTextColor={theme.palette.blue.purplish}
            onClick={handleChangeClick}
          />
        </div>
        <Typography
          variant="subtitle1"
          color={theme.palette.blue.marine}
          fontSize={14}
          fontWeight={600}
        >
          ${planPrice}
          {yearlyBilling ? "/yr" : "/mo"}
        </Typography>
      </Box>
      {addOns?.length && <Divider sx={{ margin: "10px 0px" }} />}
      {addOns &&
        addOns.map((item) => (
          <TwoCoulmnRow
            rowKey={item?.name}
            value={item?.price[billingPeriod]}
            yearlyBilling={yearlyBilling}
          />
        ))}
    </Box>
  );
};

export default withStyles(styles)(TotalCard);
