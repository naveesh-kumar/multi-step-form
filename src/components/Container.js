/*React hook imports */
import { useContext, useMemo, useState } from "react";

/*Material ui imports */
import { withStyles } from "@mui/styles";
import { Box, Paper } from "@mui/material";

/*Components imports */
import SideBar from "./SideBar";
import PersonalInfo from "./PersonalInfo";
import ButtonContainer from "./ButtonContainer";
import SelectYourPlan from "./SelectYourPlan";
import PickAddOns from "./PickAddOns";
import FinishingUp from "./FinishingUp";

/*Store imports */
import { MultiStepFormCtx } from "../store/Provider";
import { setActiveStep } from "../store/actions";

const styles = {
  root: {
    width: "45%",
    height: "60%",
    borderRadius: 8,
    padding: "8px",
    display: "grid",
    gridTemplateColumns: "35% 55%",
    gridTemplateRows: "1fr",
    gap: "10%",
  },
  main: {
    paddingTop: "2%",
    display: "grid",
    gridTemplateColumns: "90%",
    gridTemplateRows: "90% 10%",
    height: "100%",
  },
};

const Container = ({ classes }) => {
  const { activeStep, dispatch, formValues, selectedPlan } =
    useContext(MultiStepFormCtx);
  // local state for tracking when to open thank you page
  const [showThankYou, setShowThankYou] = useState(false);

  // logic for back, next or confirm buttons
  let allowClick =
    activeStep === 1
      ? Object.values(formValues).every((item) => !!item)
      : activeStep === 2
      ? !!selectedPlan.length
      : true;
  let showGoBack = activeStep > 1 && activeStep <= 4 && !showThankYou;
  let showNext = activeStep < 4;
  let showConfirm = activeStep === 4 && !showThankYou;

  //logic for rendering the components depending on the active step
  const componentToRender = useMemo(() => {
    let component = {
      1: <PersonalInfo />,
      2: <SelectYourPlan />,
      3: <PickAddOns />,
      4: !showThankYou ? <FinishingUp /> : <></>,
    };
    return component[activeStep] ?? <></>;
  }, [activeStep, showThankYou]);

  return (
    <Paper elevation={1} className={classes.root}>
      {/* Side bar section */}
      <SideBar activeStep={activeStep} />
      <Box className={classes.main}>
        {/* respective components for each step */}
        {componentToRender}
        {/* Button container for each step */}
        <ButtonContainer
          showGoBack={showGoBack}
          showNext={showNext}
          showConfirm={showConfirm}
          backClickHandler={() => dispatch(setActiveStep(activeStep - 1))}
          nextClickHandler={() =>
            allowClick && dispatch(setActiveStep(activeStep + 1))
          }
          confirmClickHandler={() => setShowThankYou(true)}
        />
      </Box>
    </Paper>
  );
};

export default withStyles(styles)(Container);
