/*React hook imports */
import React from "react";

/*Material ui imports */
import { withStyles } from "@mui/styles";

/*Custom theme import */
import { theme } from "../theme";

/*Components imports */
import StepContainer from "./StepContainer";

/*Image import */
import sideBarBg from "../../public/bg-sidebar-desktop.svg";

const styles = {
  root: {
    width: "100%",
    height: "100%",
    //uncomment the folowing for storybook
    // background: `url(${sideBarBg})`,
    background: "url(/bg-sidebar-desktop.svg)",
    padding: "30px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    borderRadius: 8,
    [theme.breakpoints.down("mobile")]: {
      background: "url(/bg-sidebar-mobile.svg)",
      borderRadius: 0,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "start",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  },
};

const SideBar = ({ classes, activeStep }) => {
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
