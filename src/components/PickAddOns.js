import { withStyles } from "@mui/styles";
import Header from "./common/Header";
import { addOnsData } from "../data";
import AddOnsCard from "./common/AddOnsCard";
import { useContext } from "react";
import { MultiStepFormCtx } from "../store/Provider";
import { removeAddOns, setAddOns } from "../store/actions";

const styles = {
  root: {
    padding: "20px 10px",
    display: "flex",
    gap: "30px",
    flexDirection: "column",
  },
  addOnsContainer: {
    display: "flex",
    gap: "10px",
    flexDirection: "column",
  },
};

const PickAddOns = ({ classes, width }) => {
  const { billingPeriod, dispatch, selectedAddOns } =
    useContext(MultiStepFormCtx);

  return (
    <div className={classes.root}>
      <Header
        width={width}
        mainHeaderTxt="Pick add-ons"
        subHeaderTxt="Add-ons help enhance your gaming experience."
      />
      <div className={classes.addOnsContainer}>
        {addOnsData &&
          addOnsData?.map((item) => (
            <AddOnsCard
              width={width}
              addOnName={item.name}
              addOnDesc={item.desc}
              addOnPrice={item.price[billingPeriod]}
              yearlyBilling={billingPeriod === "yearly"}
              defaultChecked={
                !!selectedAddOns?.find((addOns) => item.id === addOns.id)
              }
              handleChecked={() => dispatch(setAddOns(item))}
              handleUnchecked={() => dispatch(removeAddOns(item.id))}
            />
          ))}
      </div>
    </div>
  );
};

export default withStyles(styles)(PickAddOns);
