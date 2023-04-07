/*React hook imports */
import { useContext } from "react";

/*Material ui imports */
import { withStyles } from "@mui/styles";

/*Custom theme import */
import { theme } from "../theme";

/*Components imports */
import Header from "./common/Header";
import PlanCard from "./common/PlanCard";
import Switch from "./common/Switch";

/*Store imports */
import { MultiStepFormCtx } from "../store/Provider";
import { setActivePlan, setBillingPeriod } from "../store/actions";

/*Dummy data import */
import { planData } from "../data";

const styles = {
  root: {
    padding: "20px 10px",
    display: "flex",
    gap: "30px",
    flexDirection: "column",
  },
  planContainer: {
    width: ((props) => props.width) || "100%",
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
      {/* Header Section */}
      <Header
        width={width}
        mainHeaderTxt="Select you plan"
        subHeaderTxt="You have the option of monthly and yearly billing."
      />
      <div className={classes.planContainer}>
        {/* List of Plan Cards */}
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
        {/* Switch between monthly or yearly billing */}
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
