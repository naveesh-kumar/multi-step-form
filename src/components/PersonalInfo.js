/*React hook imports */
import { useContext } from "react";

/*Material ui imports */
import { withStyles } from "@mui/styles";

/*Components imports */
import Header from "./common/Header";
import Input from "./common/Input";

/*Store imports */
import { MultiStepFormCtx } from "../store/Provider";
import { setFormError, setFormValue } from "../store/actions";

const styles = {
  root: {
    paddingTop: "20px",
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
  const { formValues, formErrors, dispatch } = useContext(MultiStepFormCtx);

  // Blur event handler for input elements
  const handleOnBlur = (e) => {
    let { name, value } = e.target;
    if (!value) return dispatch(setFormError(name, "This Field is required"));
    return dispatch(setFormError(name, ""));
  };

  // Change event handler for input elements
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    dispatch(setFormValue(name, value));
  };

  return (
    <div className={classes.root}>
      {/* Header Section */}
      <Header
        width={width}
        mainHeaderTxt="Personal info"
        subHeaderTxt="Please provide your name, email address and phone number."
      />
      {/* Form Section */}
      <form autoComplete="off">
        {/* Name input */}
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
          value={formValues.name}
        />
        {/* Email input */}
        <Input
          placeholder="e.g. stephenking@lorem.com"
          label="Email Address"
          width={width}
          name="email"
          required
          handleInputChange={(e) => handleInputChange(e)}
          handleOnBlur={(e) => handleOnBlur(e)}
          error={!!formErrors.email}
          errMsg={formErrors.email}
          value={formValues.email}
        />
        {/* Phone input */}
        <Input
          placeholder="e.g. +1 234 567 890"
          label="Phone Number"
          width={width}
          name="phone"
          required
          handleInputChange={(e) => handleInputChange(e)}
          handleOnBlur={(e) => handleOnBlur(e)}
          error={!!formErrors.phone}
          errMsg={formErrors.phone}
          value={formValues.phone}
        />
      </form>
    </div>
  );
};

export default withStyles(styles)(PersonalInfo);
