/*React hook imports */
import React, { useContext } from "react";

/*Material ui imports */
import { withStyles } from "@mui/styles";

/*Components imports */
import StepContainer from "./StepContainer";

/*Image import */
import sideBarBg from "../../public/bg-sidebar-desktop.svg";

/*Store imports */
import { MultiStepFormCtx } from "../store/Provider";

const styles = {
  root: {
    width: (props) => props.width,
    height: "450px",
    background: `url(${sideBarBg})`,
    padding: "30px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
};

const SideBar = ({ classes, width }) => {
  const { activeStep } = useContext(MultiStepFormCtx);

  return (
    <div className={classes.root}>
      {/* List of steps */}
      {withVariant(activeStep)([
        <StepContainer key={1} label={1} textContent="your info" />,
        <StepContainer key={2} label={2} textContent="select plan" />,
        <StepContainer key={3} label={3} textContent="add-ons" />,
        <StepContainer key={4} label={4} textContent="summary" />,
      ])}
    </div>
  );
};

export default withStyles(styles)(SideBar);

//adding dynamic props variant to the StepContainer Component
const withVariant = (activeStep) => (children) =>
  children.map((ele) =>
    React.cloneElement(ele, {
      variant: activeStep === parseInt(ele.props.label) ? "fill" : "noFill",
    })
  );
