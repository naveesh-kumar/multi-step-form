import { withStyles } from "@mui/styles";
import { theme } from "../theme";
import Header from "./common/Header";
import { planData } from "../data";
import PlanCard from "./common/PlanCard";
import { useContext } from "react";
import { MultiStepFormCtx } from "../store/Provider";
import { setActivePlan, setBillingPeriod } from "../store/actions";
import Switch from "./common/Switch";

const styles = {
  root: {
    padding: "20px 10px",
    display: "flex",
    gap: "30px",
    flexDirection: "column",
  },
  planContainer: {
    width: (props) => props.width,
    display: "flex",
    justifyContent: "space-between",
  },
  switchContainer: {
    backgroundColor: theme.palette.gray.alabaster,
    padding: "8px 0px",
    width: (props) => props.width,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const SelectYourPlan = ({ classes, width }) => {
  const { billingPeriod, dispatch, selectedPlan } =
    useContext(MultiStepFormCtx);

  return (
    <div className={classes.root}>
      <Header
        width={width}
        mainHeaderTxt="Select you plan"
        subHeaderTxt="You have the option of monthly and yearly billing."
      />
      <div className={classes.planContainer}>
        {planData &&
          planData?.map((item) => (
            <PlanCard
              key={item.id}
              imgSrc={item.img}
              planName={item.name}
              planPrice={item.price[billingPeriod]}
              yearlyBilling={billingPeriod === "yearly"}
              discountMsg={item.yearlyDiscount}
              handleClick={() => dispatch(setActivePlan(item))}
              highlightBorder={item.id === selectedPlan[0]?.id}
            />
          ))}
      </div>
      <div className={classes.switchContainer}>
        <Switch
          leftText="Monthly"
          rightText="Yearly"
          handleChange={(e) => {
            dispatch(setBillingPeriod(e.target.checked ? "yearly" : "monthly"));
          }}
          defaultChecked={billingPeriod === "yearly"}
        />
      </div>
    </div>
  );
};

export default withStyles(styles)(SelectYourPlan);
