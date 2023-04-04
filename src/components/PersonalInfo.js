import { withStyles } from "@mui/styles";
import Header from "./common/Header";
import Input from "./common/Input";
import { useContext } from "react";
import { MultiStepFormCtx } from "../Provider";
import { setFormError, setFormValue } from "../actions";

const styles = {
  root: {
    padding: "20px 10px",
    display: "flex",
    gap: "30px",
    flexDirection: "column",
    "& form": {
      display: "flex",
      gap: "15px",
      flexDirection: "column",
    },
  },
};

const PersonalInfo = ({ classes, width }) => {
  const { formErrors, dispatch } = useContext(MultiStepFormCtx);

  const handleOnBlur = (e) => {
    let { name, value } = e.target;
    if (!value) {
      dispatch(setFormError({ [name]: "This Field is required" }));
    } else {
      dispatch(setFormError({ [name]: "" }));
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    dispatch(setFormValue({ [name]: value }));
  };

  return (
    <div className={classes.root}>
      <Header
        width={width}
        mainHeaderTxt="Personal info"
        subHeaderTxt="Please provide your name, email address and phone number."
      />
      <form autoComplete="off">
        <Input
          placeholder="e.g. Stephen King"
          label="Name"
          width={width}
          name="name"
          required
          handleInputChange={(e) => handleInputChange(e)}
          handleOnBlur={(e) => handleOnBlur(e)}
          error={!!formErrors.name}
          errMsg={formErrors.name}
        />

        <Input
          placeholder="e.g. stephenking@lorem.com"
          label="Email Address"
          width={width}
          name="email"
          required
          handleOnBlur={(e) => handleOnBlur(e)}
          error={!!formErrors.email}
          errMsg={formErrors.email}
        />

        <Input
          placeholder="e.g. +1 234 567 890"
          label="Phone Number"
          width={width}
          name="phone"
          required
          handleOnBlur={(e) => handleOnBlur(e)}
          error={!!formErrors.phone}
          errMsg={formErrors.phone}
        />
      </form>
    </div>
  );
};

export default withStyles(styles)(PersonalInfo);
