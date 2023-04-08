/*React hook imports */
import { useContext, useMemo, useState } from "react";

/*Material ui imports */
import { withStyles } from "@mui/styles";
import { Box } from "@mui/material";

/*Custom theme import */
import { theme } from "../theme";

/*Components imports */
import SideBar from "./SideBar";
import PersonalInfo from "./PersonalInfo";
import ButtonContainer from "./ButtonContainer";
import SelectYourPlan from "./SelectYourPlan";
import PickAddOns from "./PickAddOns";
import FinishingUp from "./FinishingUp";
import ThankYou from "./ThankYou";

/*Store imports */
import { MultiStepFormCtx } from "../store/Provider";
import { setActiveStep } from "../store/actions";

const styles = {
  root: {
    width: "60%",
    height: "65%",
    borderRadius: 8,
    padding: "10px",
    display: "grid",
    gridTemplateColumns: "33% 57%",
    gridTemplateRows: "1fr",
    gap: "10%",
    background: theme.palette.common.white,
    [theme.breakpoints.down("mobile")]: {
      width: "100%",
      height: "100%",
      borderRadius: 0,
      padding: 0,
      background: "transparent",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "25% 75%",
      gap: 0,
    },
    [theme.breakpoints.up(1100)]: {
      width: "45%",
      height: "60%",
    },
  },
  main: {
    paddingTop: "2%",
    display: "grid",
    gridTemplateColumns: "90%",
    gridTemplateRows: "90% 10%",
    height: "100%",
    [theme.breakpoints.down("mobile")]: {
      paddingTop: 0,
      gridTemplateColumns: "1fr",
    },
  },
  component: {
    [theme.breakpoints.down("mobile")]: {
      height: "fit-content",
      background: theme.palette.common.white,
      padding: "10px 20px 20px 20px",
      borderRadius: "8px",
      margin: "15px",
      transform: "translateY(-95px)",
    },
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
  let showGoBack = activeStep > 1 && activeStep <= 4;
  let showNext = activeStep < 4;
  let showConfirm = activeStep === 4;

  //logic for rendering the components depending on the active step
  const componentToRender = useMemo(() => {
    let component = {
      1: <PersonalInfo />,
      2: <SelectYourPlan />,
      3: <PickAddOns />,
      4: !showThankYou ? <FinishingUp /> : <ThankYou />,
    };
    return component[activeStep] ?? <></>;
  }, [activeStep, showThankYou]);

  return (
    <Box className={classes.root}>
      {/* Side bar section */}
      <SideBar activeStep={activeStep} />
      <Box className={classes.main}>
        {/* respective components for each step */}
        <div className={classes.component}>{componentToRender}</div>
        {/* Button container for each step */}
        {!showThankYou && (
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
        )}
      </Box>
    </Box>
  );
};

export default withStyles(styles)(Container);
