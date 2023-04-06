/*React hook imports */
import { useContext, useMemo } from "react";

/*Material ui imports */
import { withStyles } from "@mui/styles";
import { Typography } from "@mui/material";

/*Custom theme import */
import { theme } from "../theme";

/*Components imports */
import Header from "./common/Header";
import TotalCard from "./TotalCard";

/*Store imports */
import { MultiStepFormCtx } from "../store/Provider";
import { setBillingPeriod } from "../store/actions";

const styles = {
  root: {
    padding: "20px 10px",
    display: "flex",
    gap: "30px",
    flexDirection: "column",
  },
  totalContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: (props) => props.width,
    margin: "5px 0",
    padding: "0px 10px",
  },
};

const FinishingUp = ({ classes, width }) => {
  const { selectedPlan, billingPeriod, selectedAddOns, dispatch } =
    useContext(MultiStepFormCtx);

  // selected plan details
  const planName = selectedPlan[0]?.name;
  const planPrice = selectedPlan[0]?.price[billingPeriod];

  // total amount of plan selected and associated add ons amount if any selected
  const total = useMemo(
    () =>
      planPrice +
      selectedAddOns.reduce((addOnTotal, addOn) => {
        if (addOn) {
          addOnTotal = addOnTotal + addOn.price[billingPeriod];
        }
        return addOnTotal;
      }, 0),
    [billingPeriod, selectedAddOns, planPrice]
  );

  return (
    <div className={classes.root}>
      {/* Header section */}
      <Header
        width={width}
        mainHeaderTxt="Finishing up"
        subHeaderTxt="Double-check everything looks OK before confirming."
      />
      {/* Selected Plan and Add on details */}
      <TotalCard
        width={width}
        planPrice={planPrice}
        planName={planName}
        addOns={selectedAddOns}
        billingPeriod={billingPeriod}
        handleChangeClick={() =>
          dispatch(
            setBillingPeriod(billingPeriod === "yearly" ? "monthly" : "yearly")
          )
        }
      />
      {/* Details of total amount */}
      <div className={classes.totalContainer}>
        <Typography variant="caption" color={theme.palette.gray.cool}>
          Total (per {billingPeriod === "yearly" ? "year" : "month"})
        </Typography>
        <Typography
          variant="subtitle1"
          color={theme.palette.blue.purplish}
          fontWeight={700}
        >
          ${total}
          {billingPeriod === "yearly" ? "/yr" : "/mo"}
        </Typography>
      </div>
    </div>
  );
};

export default withStyles(styles)(FinishingUp);
